import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-fom',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], // ✅ Add HttpClientModule
  templateUrl: './contact-fom.html',
  styleUrls: ['./contact-fom.css'] // ✅ Fixed name
})
export class ContactFom implements OnInit {
  appointmentForm!: FormGroup;
  submitted = false;
  successMsg = '';
  errorMsg = '';

  apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';
  // apiUrl = 'http://localhost:3000/api';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      appointment_date: ['', Validators.required],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.appointmentForm.controls;
  }

  submitForm(): void {
    this.submitted = true; // ✅ Make sure errors show after first submit
    this.successMsg = '';
    this.errorMsg = '';

    if (this.appointmentForm.invalid) {
      this.errorMsg = '⚠️ Please fill all required fields correctly.';
      return;
    }

    const formValues = this.appointmentForm.value;

    // ✅ Corrected: appointment_date instead of date
    const emailParams = {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      date: formValues.appointment_date,
      service: formValues.service,
      message: formValues.message,
    };

    const emailRequest = {
      to: ['inventionmindsblr@gmail.com'],
      status: 'Specialty-Page',
      appointmentDetails: emailParams,
    };

    console.log('📤 Sending email request:', emailRequest);

    this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
      next: (res: any) => {
        console.log('✅ Email sent successfully:', res);
        this.successMsg = '✅ Thank you! Your message has been sent successfully.';
        this.appointmentForm.reset();
        this.submitted = false;
        this.router.navigate(['/thank-you']);
      },
      error: (err: any) => {
        console.error('❌ Error sending email:', err);
        this.errorMsg = '❌ Failed to send message. Please try again later.';
      },
    });
  }
}
