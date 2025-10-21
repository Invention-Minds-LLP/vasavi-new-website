import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-callback-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './callback-form.html',
  styleUrl: './callback-form.css'
})
export class CallbackForm {
formData = {
    name: '',
    mobile: '',
    otp: '',
  };

  showOTP = false;
  successMessage: string | null = null;

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      this.showOTP = true; // simulate sending OTP
      // Here, you can call your API to send OTP to the user.
    }
  }

  verifyOTP() {
    if (this.formData.otp === '123456') {
      this.successMessage = 'Thank you! We will call you back shortly.';
      this.showOTP = false;
    } else {
      alert('Invalid OTP. Please try again.');
    }
  }
}
