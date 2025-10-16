import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package',
  standalone: true, // ✅ Important
  imports: [RouterLink, RouterModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './package.html',
  styleUrls: ['./package.css']
})
export class Package implements OnInit {
  appointmentForm!: FormGroup;
  submitted = false;
  successMsg = '';
  errorMsg = '';
  isLoading = false;

  // apiUrl = 'http://localhost:3000/api';
  apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';

  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private metaService: Meta,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      plan: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.titleService.setTitle('Best Bariatric Surgery Hospital in Banashankari Bangalore | Vasavi Hospitals');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Vasavi Hospitals in Banashankari Bangalore offers advanced bariatric and weight loss surgeries with safe procedures and faster recovery.',
    });
  }

  get f() {
    return this.appointmentForm.controls;
  }

  submitForm(): void {
    this.submitted = true;
    this.successMsg = '';
    this.errorMsg = '';

    if (this.appointmentForm.invalid) {
      this.errorMsg = '⚠️ Please fill all required fields correctly.';
      return;
    }

    this.isLoading = true;

    const formValues = this.appointmentForm.value;
    const emailParams = {
      packageName: formValues.plan,
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      date: formValues.date,
      service: formValues.service,
      message: formValues.message,
    };

    const emailRequest = {
      to: ['inventionmindsblr@gmail.com'],
      status: 'Package-Enquiry',
      appointmentDetails: emailParams,
    };

    console.log('📤 Sending email request:', emailRequest);

    this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
      next: (res: any) => {
        console.log('✅ Email sent successfully:', res);
        this.successMsg = '✅ Thank you! Your enquiry has been sent successfully.';
        alert(this.successMsg);
        this.isLoading = false;
        this.appointmentForm.reset();
        this.submitted = false;
        // Optional: Auto-close modal
        const modal = document.getElementById('enquire');
        if (modal) {
          console.log(modal)
          const bsModal = (window as any).bootstrap.Modal.getInstance(modal);
          bsModal?.hide();
        }
        this.router.navigate(['/thank-you']);
      },
      error: (err: any) => {
        console.error('❌ Error sending email:', err);
        this.errorMsg = '❌ Failed to send message. Please try again later.';
        this.isLoading = false;
      },
    });
  }
  ngOnDestroy() {
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('padding-right');
  }
  
}
