import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';


declare const grecaptcha: any;

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule,RouterLink, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  contactForm!: FormGroup;
  recaptchaResponse: string = '';

  constructor(private titleService: Title, private metaService: Meta, private fb: FormBuilder, private zone: NgZone) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact Vasavi Hospitals Banashankari Bangalore | 24/7 Support');
    this.metaService.updateTag({ name: 'description', content: 'Reach Vasavi Hospitals in Banashankari Bangalore. Book doctor appointments, emergency care, or patient support anytime, 24/7.' }),

      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
        service: ['', Validators.required],
        message: ['']
      });

    // Define global callback for reCAPTCHA
    (window as any).onRecaptchaSuccess = (response: string) => {
      this.zone.run(() => {
        this.recaptchaResponse = response;
        console.log('✅ reCAPTCHA verified:', response);
      });
    };
  }

  ngAfterViewInit(): void {
    // Wait until the reCAPTCHA script is loaded, then render
    const interval = setInterval(() => {
      if (typeof grecaptcha !== 'undefined' && grecaptcha.render) {
        grecaptcha.render('recaptcha-container', {
          sitekey: '6Le0LXAqAAAAAGDRVcwcrAtDUyu81GVurRimvCSW',
          callback: 'onRecaptchaSuccess'
        });
        clearInterval(interval);
      }
    }, 500);
  }

  submitForm(): void {
    if (!this.contactForm.valid) {
      alert('⚠️ Please fill all required fields.');
      return;
    }

    if (!this.recaptchaResponse) {
      alert('⚠️ Please complete the reCAPTCHA.');
      return;
    }

    const formData = {
      ...this.contactForm.value,
      recaptcha: this.recaptchaResponse
    };

    console.log('✅ Form data ready:', formData);

    alert('✅ Thank you for contacting us! We have received your message.');
    this.contactForm.reset();
    grecaptcha.reset();
  }

}

