import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true, // ✅ REQUIRED for imports to work
  imports: [
    RouterLink,
    RouterModule,
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'], // ✅ plural
})
export class Footer implements OnInit {
  enquiryForm!: FormGroup;
  submitted = false;
  successMsg = '';
  errorMsg = '';
  isLoading = false;

  hide: boolean = true;

  // apiUrl = 'http://localhost:3000/api';.
  apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';

  constructor(private fb: FormBuilder, private http: HttpClient, public router: Router) {}

  ngOnInit(): void {
    this.enquiryForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(2)],
      ],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      appointment_date: ['', Validators.required],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      // 🔸 Remove recaptcha if not using
    });
  }

  get f() {
    return this.enquiryForm.controls;
  }

  submitForm(): void {
    this.submitted = true;
    this.successMsg = '';
    this.errorMsg = '';

    if (this.enquiryForm.invalid) {
      this.errorMsg = '⚠️ Please fill all required fields correctly.';
      return;
    }

    this.isLoading = true;
    const formValues = this.enquiryForm.value;

    const emailParams = {
      name: formValues.name,
      phone: formValues.phone,
      date: formValues.appointment_date,
      service: formValues.service,
      message: formValues.message,
    };

    const emailRequest = {
      // to: ['inventionmindsblr@gmail.com'],
      to: ['Vinay.d@vasavihospitals.com', 'digital@vasavihospitals.com'],
      status: 'Enquiry-Form',
      appointmentDetails: emailParams,
    };

    this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
      next: (res: any) => {
        this.successMsg = '✅ Your enquiry has been sent successfully. We’ll contact you soon!';
        this.enquiryForm.reset();
        this.submitted = false;
        this.isLoading = false;
        this.hide = false;
        this.router.navigate(['/thank-you']);

        const modal = document.getElementById('enquire');
        const bsModal = (window as any).bootstrap.Modal.getInstance(modal);
        bsModal?.hide();
      },
      error: (err: any) => {
        console.error('❌ Error sending enquiry:', err);
        this.errorMsg = '❌ Something went wrong. Please try again later.';
        this.isLoading = false;
      },
    });
  }

  showDesigner(): boolean {
    const inventionRoutes = [
      '/bariatric-surgery',
      '/cardiology',
      '/ent',
      '/nephrology',
      '/obstetrics-gynaecology',
      '/oncology',
      '/orthopedic',
      '/pulmonology',
      '/urology',
      '/robotic-hernia-surgery',
      '/robotic-tkr',
      '/robotic-thr',
      '/gallbladder-removal-surgery-in-bangalore',
      '/appendectomy-surgery-in-bangalore',
      '/hysterectomy-surgery-in-bangalore',
      '/tonsillectomy-surgery-in-bangalore-in-bangalore',
      '/piles-surgery-in-bangalore-in-bangalore',
      '/turp-surgery-in-bangalore-in-bangalore',
      '/fistula-surgery-in-bangalore',
      '/acl-reconstruction-in-bangalore',
      '/adenoid-removal-in-bangalore',
      '/sinus-surgery-in-bangalore',
      '/hernia-surgery-in-bangalore',
      '/total-knee-replacement-in-bangalore',
      '/total-hip-replacement-in-bangalore',
    ];
    return inventionRoutes.includes(this.router.url);
  }
}
