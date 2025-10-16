import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';

import { HttpClient } from '@angular/common/http';


declare const grecaptcha: any;

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  contactForm!: FormGroup;
  recaptchaResponse: string = '';
  // apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';
  apiUrl = 'http://localhost:3000/api';

  constructor(private titleService: Title, private metaService: Meta, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact Vasavi Hospitals Banashankari Bangalore | 24/7 Support');
    this.metaService.updateTag({ name: 'description', content: 'Reach Vasavi Hospitals in Banashankari Bangalore. Book doctor appointments, emergency care, or patient support anytime, 24/7.' }),

      this.contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        phone: [
          '',
          [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]
        ],
        service: ['', Validators.required],
        message: ['', Validators.required],
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
      to: ['inventionmindsblr@gmail.com'],
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
      },
      error: (err) => {
        console.error('❌ Error sending email:', err);
        alert('❌ Failed to send message. Please try again later.');
      },
    });
  }
}

