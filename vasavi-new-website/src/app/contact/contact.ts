import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { environment } from '../../environments/environment';


declare const grecaptcha: any;

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterModule, NgHcaptchaModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  contactForm!: FormGroup;
  recaptchaResponse: string = '';
  apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';
  // apiUrl = 'http://localhost:3000/api';
  emailOtpSent = false;
  emailOtpVerified = false;

  mobileOtpSent = false;
  mobileOtpVerified = false;
  hsiteKey = environment.hcaptchaSiteKey_static;

  captchaVerified = false;
  captchaSession: string | null = null;

  // ⏱ Timers
  emailOtpTimer = 120;
  mobileOtpTimer = 120;

  emailTimerInterval: any;
  mobileTimerInterval: any;

  canResendEmailOtp = false;
  canResendMobileOtp = false;
  statusMessage = '';
  statusType: 'info' | 'success' | 'error' = 'info';





  constructor(private titleService: Title, private metaService: Meta, private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact Vasavi Hospitals Banashankari Bangalore | 24/7 Support');
    this.metaService.updateTag({ name: 'description', content: 'Reach Vasavi Hospitals in Banashankari Bangalore. Book doctor appointments, emergency care, or patient support anytime, 24/7.' }),

      this.contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        phone: [
          '',
          [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]
        ],
        email: ['', [Validators.required, Validators.email]],
        service: ['', Validators.required],
        message: ['', Validators.required],

        // ✅ OTP controls
        emailOtp: [''],
        mobileOtp: ['']
      });

    // ✅ Initialize reCAPTCHA
    setTimeout(() => {
      if (typeof grecaptcha !== 'undefined') {
        grecaptcha.render('recaptcha-container', {
          sitekey: '6Le0LXAqAAAAAGDRVcwcrAtDUyu81GVurRimvCSW',
          callback: (response: string) => {
            this.recaptchaResponse = response;
          },
        });
      }
    }, 500);
  }



  get f() {
    return this.contactForm.controls;
  }

  submitForm(): void {
    if (!this.emailOtpVerified || !this.mobileOtpVerified) {
      alert('⚠️ Please verify Email and Mobile before submitting');
      return;
    }

    if (this.contactForm.invalid) {
      alert('⚠️ Please fill all required fields correctly.');
      return;
    }
    // if (!this.recaptchaResponse) {
    //   alert('⚠️ Please complete the reCAPTCHA.');
    //   return;
    // }

    const formValues = this.contactForm.value;

    // ✅ Construct email parameters
    const emailParams = {
      name: formValues.name,
      email: '',
      phone: formValues.phone,
      service: formValues.service,
      message: formValues.message,
    };

    const emailRequest = {
      // to: ['inventionmindsblr@gmail.com'],
      to: ['Vinay.d@vasavihospitals.com', 'digital@vasavihospitals.com'],
      whatsappNumber: ['918884466000'],
      // whatsappNumber: ['919342287945'],
      status: 'Contact-Page',
      appointmentDetails: emailParams,
    };

    console.log('📤 Sending email request:', emailRequest);

    // ✅ Send email request
    this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
      next: (res) => {
        console.log('✅ Email sent successfully:', res);
        alert('✅ Thank you! Your message has been sent successfully.');
        this.contactForm.reset();
        grecaptcha.reset();
        this.router.navigate(['/thank-you']);
      },
      error: (err) => {
        console.error('❌ Error sending email:', err);
        alert('❌ Failed to send message. Please try again later.');
      },
    });
  }
  sendEmailOtp() {
    if (this.contactForm.invalid) {
      alert('⚠️ Fill all form details first');
      return;
    }

    if (!this.captchaVerified || !this.captchaSession) {
      alert('⚠️ Please complete captcha verification first');
      return;
    }


    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem('contact_email_otp', otp);
    localStorage.setItem('contact_email_otp_expiry', (Date.now() + 2 * 60 * 1000).toString());

    this.http.post(`${this.apiUrl}/email/send-email-otp`, {
      email: this.contactForm.value.email,
      name: this.contactForm.value.name,
      otp
    }).subscribe({
      next: () => {
        this.emailOtpSent = true;
        this.startEmailOtpTimer();
        // alert('✅ Email OTP sent');
        this.statusType = 'info';
        this.statusMessage =
          'An OTP has been sent to your email. Please enter it to continue.';
      },
      error: () => alert('❌ Failed to send Email OTP')
    });
  }
  verifyEmailOtp() {
    const enteredOtp = this.contactForm.value.emailOtp;
    const savedOtp = localStorage.getItem('contact_email_otp');
    const expiry = Number(localStorage.getItem('contact_email_otp_expiry'));

    if (!enteredOtp || !savedOtp || Date.now() > expiry) {
      alert('Email OTP expired or invalid');
      return;
    }

    if (enteredOtp === savedOtp) {
      this.emailOtpVerified = true;
      localStorage.removeItem('contact_email_otp');
      localStorage.removeItem('contact_email_otp_expiry');
      // alert('✅ Email verified');
      this.statusType = 'info';
      this.statusMessage = 'Email verified successfully. Sending Mobile OTP…';
      this.sendMobileOtp();
    } else {
      alert('❌ Wrong Email OTP');
    }
  }
  sendMobileOtp() {
    if (!this.emailOtpVerified) {
      alert('Verify email first');
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem('contact_mobile_otp', otp);
    localStorage.setItem('contact_mobile_otp_expiry', (Date.now() + 2 * 60 * 1000).toString());

    this.http.post(`${this.apiUrl}/sms/send-otp-vasavi`, {
      patientName: this.contactForm.value.name,
      patientPhoneNumber: '91' + this.contactForm.value.phone,
      service: this.contactForm.value.service,
      otp
    }).subscribe({
      next: () => {
        this.mobileOtpSent = true;
        this.startMobileOtpTimer();
        // alert('✅ Mobile OTP sent');
        this.statusType = 'info';
        this.statusMessage = 'Mobile OTP sent successfully.';
      },
      error: () => {
        this.statusType = 'error';
        this.statusMessage = 'Failed to send Mobile OTP.';
      }
    });
  }
  verifyMobileOtp() {
    const enteredOtp = this.contactForm.value.mobileOtp;
    const savedOtp = localStorage.getItem('contact_mobile_otp');
    const expiry = Number(localStorage.getItem('contact_mobile_otp_expiry'));

    if (!enteredOtp || !savedOtp || Date.now() > expiry) {
      alert('Mobile OTP expired or invalid');
      return;
    }

    if (enteredOtp === savedOtp) {
      this.mobileOtpVerified = true;
      localStorage.removeItem('contact_mobile_otp');
      localStorage.removeItem('contact_mobile_otp_expiry');
      this.statusType = 'success';
      this.statusMessage =
        'Mobile verified successfully. You can now submit the form.';

      alert('✅ Mobile verified');
    } else {
      alert('❌ Wrong Mobile OTP');
    }
  }
  onCaptchaVerify(token: string | any) {
    const captchaToken = typeof token === 'string'
      ? token
      : token?.token || token;

    this.http.post<any>(`${this.apiUrl}/email/captcha/verify`, {
      captchaToken
    }).subscribe({
      next: (res) => {
        this.captchaVerified = true;
        this.captchaSession = res.captchaSession;
        this.sendEmailOtp();
        // console.log('✅ hCaptcha verified');
        this.statusType = 'info';
        this.statusMessage =
          'Captcha verified successfully. Sending Email OTP…';
      },
      error: () => {
        this.captchaVerified = false;
        // alert('Captcha verification failed. Please retry.');
        this.statusType = 'error';
        this.statusMessage =
          'Captcha verification failed. Please try again.';
      }
    });
  }

  onCaptchaExpire() {
    this.captchaVerified = false;
    this.captchaSession = null;
  }

  onCaptchaError(err: any) {
    console.error('hCaptcha error:', err);
    this.captchaVerified = false;
    this.captchaSession = null;
  }
  startEmailOtpTimer() {
    this.emailOtpTimer = 120;
    this.canResendEmailOtp = false;

    clearInterval(this.emailTimerInterval);
    this.emailTimerInterval = setInterval(() => {
      this.emailOtpTimer--;
      if (this.emailOtpTimer <= 0) {
        clearInterval(this.emailTimerInterval);
        this.canResendEmailOtp = true;
      }
    }, 1000);
  }

  startMobileOtpTimer() {
    this.mobileOtpTimer = 120;
    this.canResendMobileOtp = false;

    clearInterval(this.mobileTimerInterval);
    this.mobileTimerInterval = setInterval(() => {
      this.mobileOtpTimer--;
      if (this.mobileOtpTimer <= 0) {
        clearInterval(this.mobileTimerInterval);
        this.canResendMobileOtp = true;
      }
    }, 1000);
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

}

