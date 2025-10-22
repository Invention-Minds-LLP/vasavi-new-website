import { Component, Input, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
    mobile: ''
  };
  userAddress: string = 'Fetching location...';

  showOTP = false;
  successMessage: string | null = null;
  userLocation: string = 'Unknown Location';
  detectedPincode: string = '';

  constructor(private http: HttpClient) {}

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

  // ✅ Form submission (no OTP)
  onSubmit(form: any) {
    if (form.invalid) {
      alert('⚠️ Please enter valid details before submitting.');
      return;
    }
    const appointmentDetails = {
      name: this.formData.name,
      phone: this.formData.mobile,
      address: this.userAddress,
      page: this.pageName
    };
    const emailRequest = {
      to: ['Vinay.d@vasavihospitals.com', 'digital@vasavihospitals.com'],
      // to:['inventionmindsblr@gmail.com'],
      status: 'Callback-Form',
      appointmentDetails
    };

    console.log('📤 Sending callback email:', emailRequest);

    this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
      next: (res: any) => {
        console.log('✅ Callback email sent:', res);
        this.successMessage = '✅ Thank you! We will call you back shortly.';
        form.reset();
      },
      error: (err: any) => {
        console.error('❌ Email send failed:', err);
        alert('❌ Failed to send. Please try again later.');
      }
    });
  }
}
