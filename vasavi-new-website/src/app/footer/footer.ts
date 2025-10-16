import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true, // ✅ REQUIRED for imports to work
  imports: [RouterLink, RouterModule, CommonModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'] // ✅ plural
})
export class Footer implements OnInit {
  enquiryForm!: FormGroup;
  submitted = false;
  successMsg = '';
  errorMsg = '';
  isLoading = false;

  // apiUrl = 'http://localhost:3000/api';.
  apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';

  constructor(private fb: FormBuilder, private http: HttpClient,public router: Router) {}

  ngOnInit(): void {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(2)]],
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
      to: ['inventionmindsblr@gmail.com'],
      status: 'Enquiry-Form',
      appointmentDetails: emailParams,
    };

    this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
      next: (res: any) => {
        this.successMsg = '✅ Your enquiry has been sent successfully. We’ll contact you soon!';
        this.enquiryForm.reset();
        this.submitted = false;
        this.isLoading = false;
        this.router.navigate(['/thank-you']);

        // Optional: close modal automatically
        const modal = document.getElementById('enquire');
        if (modal) {
          const bsModal = (window as any).bootstrap.Modal.getInstance(modal);
          bsModal?.hide();
        }
      },
      error: (err: any) => {
        console.error('❌ Error sending enquiry:', err);
        this.errorMsg = '❌ Something went wrong. Please try again later.';
        this.isLoading = false;
      },
    });
  }  

   showDesigner(): boolean {
    const inventionRoutes = ['/bariatric-surgery', '/cardiology', '/ent','/nephrology','/obstetrics-gynaecology','/oncology','/orthopedic','/pulmonology','/urology','/robotic-hernia-surgery','/robotic-tkr','/robotic-thr','/robotic-gallbladder-removal-surgery','/robotic-appendectomy-surgery','/robotic-hysterectomy-surgery'];
    return inventionRoutes.includes(this.router.url);
  }
}
