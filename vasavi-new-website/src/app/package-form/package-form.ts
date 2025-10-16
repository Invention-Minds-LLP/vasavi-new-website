import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-package-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './package-form.html',
  styleUrl: './package-form.css'
})
export class PackageForm implements OnInit {
  @Input() showModal = false;
  @Input() planName = '';
  @Output() closed = new EventEmitter<void>(); // <-- parent listener

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
      plan: [this.planName, Validators.required],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnChanges(): void {
    if (this.appointmentForm && this.planName) {
      this.appointmentForm.patchValue({ plan: this.planName });
    }
  }

  get f() {
    return this.appointmentForm.controls;
  }

  closeModal() {
    this.showModal = false;
    this.closed.emit(); // <-- notify parent to reset flag
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

    const emailRequest = {
      to: ['inventionmindsblr@gmail.com'],
      status: 'Package-Enquiry',
      appointmentDetails: this.appointmentForm.value,
    };

    this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
      next: () => {
        this.successMsg = '✅ Thank you! Your enquiry has been sent successfully.';
        alert(this.successMsg);
        this.isLoading = false;
        this.appointmentForm.reset();
        this.submitted = false;

        // close after short delay
        setTimeout(() => this.closeModal(), 2000);
        this.router.navigate(['/thank-you']);
      },
      error: () => {
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
