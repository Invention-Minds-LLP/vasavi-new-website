import { Component, Input, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-callback-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './callback-form.html',
  styleUrl: './callback-form.css'
})
export class CallbackForm {

  @Input() pageName: string = 'Website'; // Pass page name dynamically (e.g. Hysterectomy Page)
  // apiUrl: string = 'http://localhost:3000/api'; // Replace with your real API base URL
  apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';


  formData = {
    name: '',
    mobile: '',
    otp:''
  };
  userAddress: string = 'Fetching location...';

  showOTP = false;
  successMessage: string | null = null;
  userLocation: string = 'Unknown Location';
  detectedPincode: string = '';
  otpSent = false;
  otpVerified = false;
  isSending = false;
  isVerifying = false;
  resendTimer = 0;
  resendInterval: any;

  constructor(private http: HttpClient, private router: Router) {}

  // onSubmit(form: any) {
  //   if (form.valid) {
  //     console.log('Form submitted:', this.formData);
  //     this.showOTP = true; // simulate sending OTP
  //     // Here, you can call your API to send OTP to the user.
  //   }
  // }

  // verifyOTP() {
  //   if (this.formData.otp === '123456') {
  //     this.successMessage = 'Thank you! We will call you back shortly.';
  //     this.showOTP = false;
  //   } else {
  //     alert('Invalid OTP. Please try again.');
  //   }
  // }


  ngOnInit(): void {
    this.fetchUserLocation();
  }

  fetchUserLocation(): void {
    this.http.get('https://ipapi.co/json/').subscribe({
      next: (data: any) => {
        const city = data.city || '';
        const state = data.region || '';
        const country = data.country_name || '';
        const postal = data.postal || '';

        // Build formatted address
        this.userAddress = `${city}${city && state ? ', ' : ''}${state}${state && country ? ', ' : ''}${country}${postal ? ' - ' + postal : ''}`.trim();
      },
      error: () => {
        console.warn('⚠️ Could not fetch IP location.');
        this.userAddress = 'Unknown Location';
      }
    });
  }

  // // ✅ Form submission (no OTP)
  // onSubmit(form: any) {
  //   if (form.invalid) {
  //     alert('⚠️ Please enter valid details before submitting.');
  //     return;
  //   }
  //   const appointmentDetails = {
  //     name: this.formData.name,
  //     phone: this.formData.mobile,
  //     address: this.userAddress,
  //     page: this.pageName
  //   };
  //   const emailRequest = {
  //     to: ['Vinay.d@vasavihospitals.com', 'digital@vasavihospitals.com', 'Ceo@vasavihospitals.com'],
  //     // to:['inventionmindsblr@gmail.com'],
  //     status: 'Callback-Form',
  //     appointmentDetails
  //   };

  //   console.log('📤 Sending callback email:', emailRequest);

  //   this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
  //     next: (res: any) => {
  //       console.log('✅ Callback email sent:', res);
  //       this.successMessage = '✅ Thank you! We will call you back shortly.';
  //       form.reset();
  //       this.router.navigate(['/thank-you']);
  //     },
  //     error: (err: any) => {
  //       console.error('❌ Email send failed:', err);
  //       alert('❌ Failed to send. Please try again later.');
  //     }
  //   });
  // }


  // Step 1️⃣ Generate and send OTP
  sendOtp(form: any) {
    if (form.invalid) {
      alert('⚠️ Please enter valid details before sending OTP.');
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('callback_otp', otp);
    localStorage.setItem('callback_otp_expiry', (Date.now() + 2 * 60 * 1000).toString()); // 2 min expiry

    this.isSending = true;
    this.http.post(`${this.apiUrl}/sms/send-otp-vasavi`, {
      patientName: this.formData.name,
      patientPhoneNumber: '91' + this.formData.mobile, // ensure with country code
      service: this.pageName,
      otp
    }).subscribe({
      next: () => {
        this.isSending = false;
        this.otpSent = true;
        this.showOTP = true;
        this.startResendTimer();
        alert('✅ OTP sent to your mobile number.');
      },
      error: (err) => {
        console.error('❌ OTP send failed:', err);
        this.isSending = false;
        alert('❌ Failed to send OTP. Please try again.');
      }
    });
  }

  // Step 2️⃣ Verify OTP locally
  verifyOtp() {
    const savedOtp = localStorage.getItem('callback_otp');
    const expiry = Number(localStorage.getItem('callback_otp_expiry'));

    if (!this.formData.otp) {
      alert('⚠️ Please enter OTP.');
      return;
    }

    if (!savedOtp || !expiry) {
      alert('⚠️ OTP expired or not found. Please resend.');
      return;
    }

    if (Date.now() > expiry) {
      alert('⚠️ OTP expired. Please resend.');
      return;
    }

    if (this.formData.otp === savedOtp) {
      this.otpVerified = true;
      this.showOTP = false;
      localStorage.removeItem('callback_otp');
      localStorage.removeItem('callback_otp_expiry');
      this.sendEmail();
    } else {
      alert('❌ Invalid OTP. Please try again.');
    }
  }

  // Step 3️⃣ Resend OTP
  resendOtp() {
    if (this.resendTimer > 0) return;
    this.sendOtp({ valid: true });
  }

  startResendTimer() {
    this.resendTimer = 120;
    clearInterval(this.resendInterval);
    this.resendInterval = setInterval(() => {
      this.resendTimer--;
      if (this.resendTimer <= 0) clearInterval(this.resendInterval);
    }, 1000);
  }
  get formattedResendTime(): string {
    const minutes = Math.floor(this.resendTimer / 60);
    const seconds = this.resendTimer % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  

  // Step 4️⃣ Send callback email after OTP verified
  sendEmail() {
    this.successMessage = '✅ Thank you! We will call you back shortly.';
    const appointmentDetails = {
      name: this.formData.name,
      phone: this.formData.mobile,
      address: this.userAddress,
      page: this.pageName
    };

    const emailRequest = {
      // whatsappNumber:['919342287945', '917708059010'],
      whatsappNumber: ['919164840378'],
      to: ['Vinay.d@vasavihospitals.com', 'digital@vasavihospitals.com', 'Ceo@vasavihospitals.com'],
      // to:['inventionmindsblr@gmail.com'],
      status: 'Callback-Form',
      appointmentDetails
    };

    this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
      next: () => {
        this.successMessage = '✅ Thank you! We will call you back shortly.';
        this.router.navigate(['/thank-you']);
      },
      error: (err) => {
        console.error('❌ Email send failed:', err);
        alert('❌ Failed to send email. Please try again later.');
      }
    });
  }
}
