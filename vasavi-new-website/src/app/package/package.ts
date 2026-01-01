import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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

    this.titleService.setTitle('Full Body Health Checkup Packages | Healthy Life Clinic');
    this.metaService.updateTag({
      name: 'description',
      content: 'Invest in your health! Get a comprehensive full body checkup including blood tests, consultation, and more. Book your package today to ensure complete wellness.',
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
      // to: ['inventionmindsblr@gmail.com'],
      to: ['Vinay.d@vasavihospitals.com', 'digital@vasavihospitals.com'],
      whatsappNumber: ['918884466000'],
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
  goToPackage(slug: string) {
  this.router.navigate(['/health-package', slug]);
}

  packages:any = [
    {
      icon : "/img/health-check-package/icon-1.png",
      price : "Rs.1700/-",
      package_name : "Basic Health Check Package",
      list : ['Essential Tests', 'Early Detection', 'Annual Screening'],
      image : "basic-health-check-package.png",
      slug : "/health-package/basic-health-check-package"
    },
    {
      icon : "/img/health-check-package/icon-2.png",
      price : "Rs. 1999/-",
      package_name : "Vasavi Well Women Health Check up",
      list : ['Women-Specific Tests', 'Hormonal Health', 'Preventive Care'],
      image : "vasavi-well-women-health-check-up.png",
      slug : "/health-package/well-women-health-check-up"
    },
    {
      icon : "/img/health-check-package/icon-3.png",
      price : "Rs. 5999/-",
      package_name : "Cardiac Wellness Package",
      list : ['Advanced Cardiac Checks', 'Heart Risk Detection', '30+ Tests'],
      image : "cardiac-wellness-package.png",
      slug : "/health-package/cardiac-wellness-package"
    },
    {
      icon : "/img/health-check-package/icon-4.png",
      price : "Rs.4000/-",
      package_name : "Vasavi Diabetic Health Check up",
      list : ['39 tests', 'Type 1 & Type 2', 'Complete Screening'],
      image : "vasavi-diabetic-health-check-up.png",
      slug : "/health-package/diabetes-health-check"
    },
    {
      icon : "/img/health-check-package/icon-5.png",
      price : "Rs.4000/-",
      package_name : "Vasavi Master Health Check - Men",
      list : ['Advanced Screening', 'Heart & Lung Care', 'Lifestyle Risk Control'],
      image : "vasavi-master-health-check-men.png",
      slug : "/health-package/vasavi-master-health-check-men"
    },
    {
      icon : "/img/health-check-package/icon-6.png",
      price : "Rs.4500/-",
      package_name : "Vasavi Master Health Check - Women",
      list : ['Women-Focused Screening', 'Complete Cardiac Care', 'Holistic Wellness'],
      image : "vasavi-master-health-check-women.png",
      slug : "/health-package/vasavi-master-health-check-women"
    },
    {
      icon : "/img/health-check-package/icon-7.png",
      price : "Rs.9999/-",
      package_name : "Comprehensive Annual Diabetes Care Package",
      list : ['Complete Diabetes Screening', 'Type 1 & Type 2', '39+ Tests'],
      image : "comprehensive-annual-diabetes-care-package.png",
      slug : "/health-package/comprehensive-annual-diabetes-care-package"
    },
    {
      icon : "/img/health-check-package/icon-8.png",
      price : "Rs.6999/-",
      package_name : "Comprehensive Annual Heart Care Package",
      list : ['Complete Heart Screening', 'Preventive & Diagnostic', '40+ Tests'],
      image : "comprehensive-annual-heart-care-package.png",
      slug : "/health-package/comprehensive-annual-heart-care-package"
    },
  ]

  @ViewChild('nextSection') nextSection!: ElementRef;

  scrollToNextSection(): void {
    this.nextSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

}
