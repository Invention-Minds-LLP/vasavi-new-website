import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, input, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-health-package-form',
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './health-package-form.html',
  styleUrl: './health-package-form.css'
})
export class HealthPackageForm {

  @Input() doctor: any;
  @Input() page: any

   apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';

  appointmentForm!: FormGroup;
  otpSent = false;
  otpVerified = false;
  otpInvalid = false;
  otpExpired = false;
  generatedOtp!: string;
  timeLeft = 0;
  interval: any;
  canSendOtp = false;
  pageName = 'Health Checkup';
  otp: any;
  minDate: string = new Date().toISOString().split('T')[0];
  currentPackage: any;

   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      date: ['', Validators.required],
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      otp: ['']
    });

    // Enable Send OTP button only when 3 fields are valid
    this.appointmentForm.valueChanges.subscribe(() => {
      const dateValid = this.appointmentForm.get('date')?.valid;
      const nameValid = this.appointmentForm.get('name')?.valid;
      const mobileValid = this.appointmentForm.get('mobile')?.valid;

      this.canSendOtp = !!(dateValid && nameValid && mobileValid);
    });


  }

  sendOtp() {
    if (!this.canSendOtp) return;

    this.generateOtp();
    this.startOtpTimer();
  }

  generateOtp() {
    this.otpSent = true;
    this.otpVerified = false;
    this.otpInvalid = false;
    this.otpExpired = false;


    this.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("OTP:", this.generatedOtp);
    this.http
      .post(`${this.apiUrl}/sms/send-otp-vasavi`, {
        patientName: this.appointmentForm.value.name,
        patientPhoneNumber: '91' + this.appointmentForm.value.mobile, // ensure with country code
        service: this.pageName,
        otp: this.generatedOtp,
      })
      .subscribe({
        next: () => {
          this.otpSent = true;
        },
        error: (err) => {
          console.error('❌ OTP send failed:', err);
          alert('❌ Failed to send OTP. Please try again.');
        },
      });
  }

  startOtpTimer() {
    this.timeLeft = 120;
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.timeLeft--;

      if (this.timeLeft === 0) {
        clearInterval(this.interval);
        this.otpExpired = true;
        this.otpVerified = false;
        this.otpInvalid = false;
      }
    }, 1000);
  }

  resendOtp() {
    this.generateOtp();
    this.startOtpTimer();
  }

  verifyOtp() {
    if (this.otpExpired) return;

    const enteredOtp = String(this.appointmentForm.value.otp);

    if (enteredOtp === this.generatedOtp) {

      this.otpVerified = true;
      this.otpInvalid = false;
      this.otpExpired = false;
      this.bookAppointment();
    } else {
      this.otpVerified = false;
      this.otpInvalid = true;
    }
  }

  bookAppointment() {
    if (!this.otpVerified) return;
    console.log("Form Data:", this.appointmentForm.value, this.page);
    const appointmentDetails = {
      name: this.appointmentForm.value.name,
      phone: this.appointmentForm.value.mobile,
      date: this.appointmentForm.value.date,
      address: '',
      page: this.page,
    };

    const emailRequest = {
      // whatsappNumber:['919342287945'],
      whatsappNumber: ['919164840378'],
      to: ['Vinay.d@vasavihospitals.com', 'digital@vasavihospitals.com', 'Ceo@vasavihospitals.com'],
      // to:['inventionmindsblr@gmail.com'],
      status: 'Health Checkup Appointment Booking',
      appointmentDetails,
    };

    this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
      next: () => {
        this.router.navigate(['/thank-you']);
      },
      error: (err) => {
        console.error('❌ Email send failed:', err);
        alert('❌ Failed to send email. Please try again later.');
      },
    });


    this.appointmentForm.reset();
    this.otpSent = false;
    this.otpVerified = false;
    this.otpInvalid = false;
    this.otpExpired = false;
    clearInterval(this.interval);
  }

}
