import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { DoctorsSlide } from "../../doctors-slide/doctors-slide";

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthPackageForm } from "../../health-package-form/health-package-form";

@Component({
  selector: 'app-health-check',
  imports: [CommonModule, FormsModule, DoctorsSlide, ReactiveFormsModule, HealthPackageForm],
  templateUrl: './health-check.html',
  styleUrl: './health-check.css'
})
export class HealthCheck {
  // apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';
  // apiUrl = 'http://localhost:3000/api';


  openedIndex: number | null = null;

  toggle(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }

  scrollToForm() {
    document.getElementById('appointmentFormSection')?.scrollIntoView({
      behavior: 'smooth'
    });
  }



  // appointmentForm!: FormGroup;
  // otpSent = false;
  // otpVerified = false;
  // otpInvalid = false;
  // otpExpired = false;
  // generatedOtp!: string;
  // timeLeft = 0;
  // interval: any;
  // canSendOtp = false;
  // pageName = 'Health Checkup';
  // otp: any;
  // minDate: string = new Date().toISOString().split('T')[0];
  currentPackage: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.currentPackage = this.packages.find(p => p.slug === slug);

      if (this.currentPackage) {
        this.title.setTitle(this.currentPackage.metaTitle);

        this.meta.updateTag({
          name: 'description',
          content: this.currentPackage.metaDescription
        });
      }
    });

    // this.appointmentForm = this.fb.group({
    //   date: ['', Validators.required],
    //   name: ['', [Validators.required]],
    //   mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    //   otp: ['']
    // });

    // // Enable Send OTP button only when 3 fields are valid
    // this.appointmentForm.valueChanges.subscribe(() => {
    //   const dateValid = this.appointmentForm.get('date')?.valid;
    //   const nameValid = this.appointmentForm.get('name')?.valid;
    //   const mobileValid = this.appointmentForm.get('mobile')?.valid;

    //   this.canSendOtp = !!(dateValid && nameValid && mobileValid);
    // });


  }

  // sendOtp() {
  //   if (!this.canSendOtp) return;

  //   this.generateOtp();
  //   this.startOtpTimer();
  // }

  // generateOtp() {
  //   this.otpSent = true;
  //   this.otpVerified = false;
  //   this.otpInvalid = false;
  //   this.otpExpired = false;


  //   this.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
  //   console.log("OTP:", this.generatedOtp);
  //   this.http
  //     .post(`${this.apiUrl}/sms/send-otp-vasavi`, {
  //       patientName: this.appointmentForm.value.name,
  //       patientPhoneNumber: '91' + this.appointmentForm.value.mobile, // ensure with country code
  //       service: this.pageName,
  //       otp: this.generatedOtp,
  //     })
  //     .subscribe({
  //       next: () => {
  //         this.otpSent = true;
  //       },
  //       error: (err) => {
  //         console.error('❌ OTP send failed:', err);
  //         alert('❌ Failed to send OTP. Please try again.');
  //       },
  //     });
  // }

  // startOtpTimer() {
  //   this.timeLeft = 120;
  //   clearInterval(this.interval);

  //   this.interval = setInterval(() => {
  //     this.timeLeft--;

  //     if (this.timeLeft === 0) {
  //       clearInterval(this.interval);
  //       this.otpExpired = true;
  //       this.otpVerified = false;
  //       this.otpInvalid = false;
  //     }
  //   }, 1000);
  // }

  // resendOtp() {
  //   this.generateOtp();
  //   this.startOtpTimer();
  // }

  // verifyOtp() {
  //   if (this.otpExpired) return;

  //   const enteredOtp = String(this.appointmentForm.value.otp);

  //   if (enteredOtp === this.generatedOtp) {

  //     this.otpVerified = true;
  //     this.otpInvalid = false;
  //     this.otpExpired = false;
  //     this.bookAppointment();
  //   } else {
  //     this.otpVerified = false;
  //     this.otpInvalid = true;
  //   }
  // }

  // bookAppointment() {
  //   if (!this.otpVerified) return;
  //   console.log("Form Data:", this.appointmentForm.value);
  //   const appointmentDetails = {
  //     name: this.appointmentForm.value.name,
  //     phone: this.appointmentForm.value.mobile,
  //     date: this.appointmentForm.value.date,
  //     address: '',
  //     page: this.pageName,
  //   };

  //   const emailRequest = {
  //     // whatsappNumber:['919342287945'],
  //     whatsappNumber: ['919164840378'],
  //     to: ['Vinay.d@vasavihospitals.com', 'digital@vasavihospitals.com', 'Ceo@vasavihospitals.com'],
  //     // to:['inventionmindsblr@gmail.com'],
  //     status: 'Health Checkup Appointment Booking',
  //     appointmentDetails,
  //   };

  //   this.http.post(`${this.apiUrl}/email/send-pages-email`, emailRequest).subscribe({
  //     next: () => {
  //       this.router.navigate(['/thank-you']);
  //     },
  //     error: (err) => {
  //       console.error('❌ Email send failed:', err);
  //       alert('❌ Failed to send email. Please try again later.');
  //     },
  //   });


  //   this.appointmentForm.reset();
  //   this.otpSent = false;
  //   this.otpVerified = false;
  //   this.otpInvalid = false;
  //   this.otpExpired = false;
  //   clearInterval(this.interval);
  // }


  packages = [
    {
      slug: "diabetes-health-check",

      metaTitle: "Diabetes Health Check Package | Vasavi Hospital Bangalore",
      metaDescription: "Complete diabetes checkup package at Vasavi Hospital, Bangalore. Includes HbA1c, blood sugar tests, kidney screening & expert diabetology consultation.",

      // Banner section
      pageTitle: "Diabetes Health Check",
      pagePrice: "4000",
      pageSubtitle: "All-in-One Diabetes Care",
      pageDescription:
        "Track your blood sugar, heart, kidney, liver and overall health through a complete diabetes package.",

      // Banner Cards
      bannerCards: [
        { title: "39 tests", subtitle: "Complete diabetic evaluation" },
        { title: "Type 1 & Type 2", subtitle: "Suitable for all diabetics" },
        { title: "Complete Screening", subtitle: "Covers all major diabetes markers." }
      ],

      // About Section
      about: [
        {
          title: "Diabetes affects more than just your sugar.",
          subtitle:
            `<div>It can silently damage your <span>kidneys, eyes, nerves, heart, joints, and immunity</span> without showing symptoms</div> <br>

          <div>That’s why your check-up must be <span>full-body</span>, not just a sugar test. Our Master Diabetes Care Package covers <span>everything diabetes touches</span> - helping you catch problems early and stay in control.</div>`
        }
      ],
      aboutImage: "img/health-package/diabetes.jpg",

      // Includes
      includesTitle: "What’s included in the package?",
      includesSubtitle:
        "Structured into investigations, imaging, cardiac care and specialist consultations.",
      includes: [
        {
          title: "Hematology",
          content: [
            "Complete Blood Count (CBC)",
            "ESR (Erythrocyte Sedimentation Rate)",
            "Peripheral Smear"
          ]
        },
        {
          title: "Biochemical Parameters",
          content: [
            "Fasting Blood Sugar & Post Prandial",
            "Urea",
            "Creatinine",
            "Uric Acid",
            "Glycosylated Hemoglobin (Hba1c)"
          ]
        },
        {
          title: "Cardiology",
          content: ["ECG (Resting)"]
        },
        {
          title: "Liver Function Test",
          content: [
            "Total Bilirubin",
            "Direct Bilirubin",
            "Indirect Bilirubin",
            "SGPT",
            "SGOT",
            "Alkaline Phosphatase",
            "Total Protein",
            "Albumin",
            "Globulin",
            "A/G Ratio"
          ]
        },
        {
          title: "Other Tests",
          content: [
            "Blood Grouping - Rh Typing",
            "Complete Urine Analysis",
            "Urine for Micro-albumin",
            "Stool Examination",
            "GGTP"
          ]
        },
        {
          title: "Lipid Profile Test",
          content: [
            "Total Cholesterol",
            "HDL Cholesterol",
            "LDL Cholesterol Triglycerides",
            "Total Cholesterol / HDL Ratio"
          ]
        },
        {
          title: "Radiology",
          content: ["Chest X-Ray", "Ultrasound - Abdomen", "Foot Scan"]
        },
        {
          title: "Consultations",
          content: [
            "Internal Medicine Consultation",
            "Surgical Consultation",
            "Diabetologist Consultation",
            "Ophthalmologist Consultation",
            "Dental Consultation",
            "One additional Consultation of customer’s choice (within 2 days)",
            "Dietitian Consultation"
          ]
        }
      ],



      // Why Choose
      whyChooseTitle: "Why choose this diabetes package?",
      whyChooseSubtitle:
        "Specially curated for long-term diabetes management, complication prevention and holistic lifestyle support.",
      whyChoose: [
        {
          icon: "fa-solid fa-check",
          content: "Integrated approach to diabetic care under one roof"
        },
        {
          icon: "fa-solid fa-check",
          content: "Designed by experienced diabetologists & physicians"
        },
        {
          icon: "fa-solid fa-check",
          content: "Prevention-focused: catch complications early"
        },
        {
          icon: "fa-solid fa-check",
          content: "Ideal for diabetics, prediabetics & high-risk individuals"
        }
      ],

      // Care With Us
      careTitle: "Your Care Journey With Us",
      careSubtitle:
        "Specially curated for long-term diabetes management, complication prevention and holistic lifestyle support.",
      careWith: [
        {
          img: "/img/health-package/Ellipse 10.png",
          content: "Book your slot online or via call"
        },
        {
          img: "/img/health-package/Ellipse 11.png",
          content: "Visit the center fasting, as advised by our team."
        },
        {
          img: "/img/health-package/Ellipse 12.png",
          content: "Sample collection & scans as per package"
        },
        {
          img: "/img/health-package/Ellipse 13.png",
          content: "Consultation with our specialist doctors"
        },
        {
          img: "/img/health-package/Ellipse 14.png",
          content: "Personalised lifestyle & diet plan"
        }
      ],

      // Doctors Slide
      doctorSlide: [
        {
          name: "Dr. Vinay Hosadurga",
          img: "/img/new-doctor-image/dr-vinay-hosadurga.png",
          alt: "Dr. Vinay Hosadurga | General Physician | Vasavi Hospitals Bangalore",
          experience: "14+",
          department: "General Medicine",
          slug: "/dr-vinay-hosadurga"
        },
        {
          name: "Dr. Sunil R",
          img: "/img/new-doctor-image/dummy-male.png",
          alt: "Dr. Sunil R | Nephrologist | Vasavi Hospitals Bangalore",
          experience: "15+",
          department: "Nephrology",
          slug: "/dr-sunil-r"
        },
        {
          name: "Dr. Gargi Das",
          img: "/img/new-doctor-image/Dr Gargi Das.png",
          alt: "Dr Gargi Das - Consultant Ophthalmologist | Vasavi Hospitals Bangalore",
          experience: "6+",
          department: "Ophthalmology",
          slug: "/dr-gargi-das"
        },
        {
          name: "Dr. Ramesh Hanumegowda",
          img: "img/new-doctor-image/dr-ramesh-hanumegowda-urologist-transparent.png",
          alt: "Best General Surgeon in Bangalore | Dr. Ramesh T S",
          experience: "15+",
          department: "Urology",
          slug: "/dr-ramesh-hanumegowda"
        },
        {
          name: "Dr. Nisha Buchade",
          img: "img/go/dr-nisha-buchade-sq.png",
          alt: "Best Gynecologic Oncologist | Dr. Nisha Buchade",
          experience: "15+",
          department: "Obstetrics and Gynaecology",
          slug: "/dr-nisha-buchade"
        },
        {
          name: "Dr. Naneboena Sunitha",
          img: "/img/new-doctor-image/dr-naneboena-sunitha-sq.png",
          alt: "Dr Naneboena Sunitha | Consultant Nutritionist",
          experience: "26+",
          department: "Nutrition & Dietetics",
          slug: "/dr-naneboena-sunitha"
        }
      ],

      // CTA
      ctaTitle: "Ready to take charge of your diabetes?",
      ctaSubtitle:
        "Book your Master Diabetes Care package and start your journey towards better sugar control and a healthier life.",

      // FAQ
      faqs: [
        {
          title: "Who should opt for the Annual Master Diabetes Care Package?",
          content:
            "Anyone with diabetes, prediabetes, family history of diabetes, obesity, or lifestyle risk factors will benefit from this annual package."
        },
        {
          title: "How many visits are covered in a year?",
          content:
            "The package covers multiple lab visits, cardiac evaluations twice a year, radiology once a year and up to four specialist consultations depending on the service."
        },
        {
          title: "Do I need to come fasting?",
          content:
            "Yes, for accurate blood sugar and lipid profile results, you will be advised to come fasting for specific visits. Our team will guide you when you book."
        },
        {
          title: "Is this package suitable for elderly patients?",
          content:
            "Yes. Regular monitoring through this package is highly recommended for elderly patients with diabetes or multiple risk factors."
        }
      ],
    },




    //Cardiac Health Package

    {
      slug: "cardiac-wellness-package",
      metaTitle: "Cardiac Health Check Package | Vasavi Hospital Bangalore",
      metaDescription: "Comprehensive cardiac health check package at Vasavi Hospital, Bangalore. Includes ECG, echo, blood tests & cardiologist consultation for early detection.",


      // Banner section
      pageTitle: "Cardiac Health Package",
      pagePrice: "5999",
      pageSubtitle: "All-in-One Diabetes Care",
      pageDescription:
        "Monitor your heart health with a complete cardiac evaluation designed to detect risks early, prevent complications, and support long-term cardiac wellbeing. This package includes essential tests for your heart, blood, cholesterol, liver, thyroid, and overall body function - along with specialist consultations.",

      // Banner Cards
      bannerCards: [
        { title: "30+ Tests", subtitle: "Complete cardiac & general health evaluation" },
        { title: "Heart Risk Detection", subtitle: "Screens for cholesterol, BP, sugar & cardiac markers" },
        { title: "Advanced Cardiac Checks", subtitle: "Includes ECG, 2D Echo & TMT (Stress Test)" }
      ],

      // About Section
      about: [
        {
          title: "Heart disease affects more than just your heart.",
          subtitle:
            `<div>It can silently impact your blood vessels, brain, kidneys, lungs, and overall energy levels without showing obvious symptoms.</div> <br>

          <div>That’s why your heart check-up must be comprehensive, not just an ECG. Our Master Cardiac Health Package covers every major factor that influences your heart – helping you detect risks early, prevent complications, and stay heart-healthy for life.</div>`
        }
      ],
      aboutImage: "img/health-package/Cardiology.png",

      // Includes
      includesTitle: "What’s included in the package?",
      includesSubtitle:
        "Structured into investigations, imaging, cardiac care and specialist consultations.",
      includes: [
        {
          title: "Hematology",
          content: [
            "Complete Blood Count(CBC)",
            "Peripheral Smear",
            "ESR (Erythrocyte Sedimentation Rate)"
          ]
        },
        {
          title: "Biochemical Parameters",
          content: [
            "Iron Profile",
            "Random Blood Sugar",
            "Electrolytes (Sodium,Potassium, Chloride)",
            "Blood Urea",
            "Serum Creatinine",
            "Uric Acid",
            "Glycosylated Hemoglobin (HbA1C)",
            "Vitamin B12",
            "Total 25 OH Vitamin D",
            "CPK"
          ]
        },
        {
          title: "Lipid Profile Test",
          content: ["Lipid Profile"]
        },
        {
          title: "Cardiology",
          content: [
            "ECG",
            "2D Echo Cardiograph",
            "Tread Mill Test (TMT)",
          ]
        },
        {
          title: "Liver Function Test",
          content: [
            "Liver Function Test(LFT)",
            "Gamma-Glutamyl Transferase (GGT)",
          ]
        },
        {
          title: "Other Tests",
          content: [
            "Urine Routine",
            "TSH (Thyroid Stimulating Hormone)",
            "Chest PA View (X-Ray)",
            "Abdomen & Pelvis (USG)"
          ]
        },
        {
          title: "Consultations",
          content: [
            "Cardiologist Consultation",
            "Ophthalmologist Consultation",
            "Dietitian Consultation"
          ]
        }
      ],



      // Why Choose
      whyChooseTitle: "Why choose this cardiac package?",
      whyChooseSubtitle:
        "Specially curated for long-term heart health, early risk detection, and complete cardiovascular wellness.",
      whyChoose: [
        {
          icon: "fa-solid fa-check",
          content: "Comprehensive approach to cardiac care under one roof"
        },
        {
          icon: "fa-solid fa-check",
          content: "Designed by expert cardiologists & senior physicians"
        },
        {
          icon: "fa-solid fa-check",
          content: "Focus on prevention: detect heart risks early"
        },
        {
          icon: "fa-solid fa-check",
          content: "Ideal for heart patients, high-risk individuals & family history cases"
        }
      ],

      // Care With Us
      careTitle: "Your Care Journey With Us",
      careSubtitle:
        "Specially curated for long-term heart health, early detection, and complete cardiac wellness.",
      careWith: [
        {
          img: "/img/health-package/Ellipse 10.png",
          content: "Book your slot online or via call"
        },
        {
          img: "/img/health-package/Ellipse 11.png",
          content: " Visit the center as per fasting / test instructions"
        },
        {
          img: "/img/health-package/Ellipse 12.png",
          content: "Sample collection & cardiac scans as per package"
        },
        {
          img: "/img/health-package/Ellipse 13.png",
          content: "Consultation with our expert cardiologists"
        },
        {
          img: "/img/health-package/Ellipse 14.png",
          content: "Personalized lifestyle, cardiac risk & diet plan"
        }
      ],

      // Doctors Slide
      doctorSlide: [
      ],

      // CTA
      ctaTitle: "Ready to take charge of your heart health?",
      ctaSubtitle:
        "Book your Master Cardiac Health Package and start your journey towards better heart care, early risk detection, and a healthier life.",

      // FAQ
      faqs: [
        {
          title: "Who should opt for the Cardiac Health Package?",
          content:
            "Anyone with chest discomfort, breathlessness, high BP, high cholesterol, diabetes, a sedentary lifestyle, or a family history of heart disease."
        },
        {
          title: "How many visits are included in the package?",
          content:
            "The package includes one complete evaluation visit with tests, scans, and a specialist cardiology consultation."
        },
        {
          title: "Do I need to come fasting for the tests?",
          content:
            "Yes, fasting is recommended for accurate cholesterol and blood sugar-related tests. Our team will guide you before your visit."
        },
        {
          title: "Is this package suitable for elderly patients?",
          content:
            "Absolutely. The package is ideal for seniors, as it checks heart function, rhythm, cholesterol, and overall cardiac risk factors."
        }
      ],
    },
  ];


}
