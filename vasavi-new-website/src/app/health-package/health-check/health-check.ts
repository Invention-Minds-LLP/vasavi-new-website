import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DoctorsSlide } from "../../doctors-slide/doctors-slide";

@Component({
  selector: 'app-health-check',
  imports: [CommonModule, FormsModule, DoctorsSlide, ReactiveFormsModule],
  templateUrl: './health-check.html',
  styleUrl: './health-check.css'
})
export class HealthCheck {

  whyChoose = [
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
    },
  ]

  careWith = [
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
    },
  ]

  faqs = [
    {
      title: "Who should opt for the Annual Master Diabetes Care Package?",
      content: "Anyone with diabetes, prediabetes, family history of diabetes, obesity, or lifestyle risk factors will benefit from this annual package."
    },
    {
      title: "How many visits are covered in a year?",
      content: "The package covers multiple lab visits, cardiac evaluations twice a year, radiology once a year and up to four specialist consultations depending on the service."
    },
    {
      title: "Do I need to come fasting?",
      content: "Yes, for accurate blood sugar and lipid profile results, you will be advised to come fasting for specific visits. Our team will guide you when you book."
    },
    {
      title: "Is this package suitable for elderly patients?",
      content: "Yes. In fact, regular monitoring through this package is highly recommended for elderly patients with diabetes or multiple risk factors."
    }
  ];


  includes = [
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
      content: [
        "ECG (Resting)",
      ]
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
      content: [
        "Chest X-Ray",
        "Ultrasound - Abdomen",
        "Foot Scan"
      ]
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
    },

  ]

  doctorSlide = [
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
      slug: '/dr-ramesh-hanumegowda'
    },
    {
      name: "Dr. Nisha Buchade",
      img: "img/go/dr-nisha-buchade-sq.png",
      alt: "Best Gynecologic Oncologist and Robotic Hysterectomy Surgeon in Bangalore | Dr. Nisha Buchade",
      experience: "15+",
      department: "Obstetrics and Gynaecology",
      // qualification: "MBBS, MS Fellowship in gynec-oncology, Fellowship in Advanced infertility",
      slug: "/dr-nisha-buchade"
    },

    {
      name: "Dr. Naneboena Sunitha",
      img: "/img/new-doctor-image/dr-naneboena-sunitha-sq.png",
      alt: "Dr Naneboena Sunitha - Consultant Nutritionist & Dietitian | Vasavi Hospitals Bangalore",
      experience: "26+",
      department: "Nutrition & Dietetics",
      slug: "/dr-naneboena-sunitha"
    },

  ]

  openedIndex: number | null = null;

  toggle(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }

  scrollToForm() {
    document.getElementById('appointmentFormSection')?.scrollIntoView({
      behavior: 'smooth'
    });
  }



  appointmentForm!: FormGroup;
  otpSent = false;
  otpVerified = false;
  otpInvalid = false;
  otpExpired = false;
  generatedOtp!: string;
  timeLeft = 0;
  interval: any;
  canSendOtp = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      date: ['', Validators.required],
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      otp: ['']
    });

    // Enable Send OTP button only when 3 fields are valid
    this.appointmentForm.valueChanges.subscribe(() => {
      const dateValid = this.appointmentForm.get('date')?.valid;
      const nameValid = this.appointmentForm.get('name')?.valid;
      const mobileValid = this.appointmentForm.get('mobile')?.valid;

      this.canSendOtp = !!(dateValid && nameValid && mobileValid);
    });
  }

  sendOtp() {
    if (!this.canSendOtp) return;

    this.generateOtp();
    this.startOtpTimer();
  }

  generateOtp() {
    this.otpSent = true;
    this.otpVerified = false;
    this.otpInvalid = false;
    this.otpExpired = false;

    this.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("OTP:", this.generatedOtp);

    alert("OTP Sent!");
  }

  startOtpTimer() {
    this.timeLeft = 120;
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.timeLeft--;

      if (this.timeLeft === 0) {
        clearInterval(this.interval);
        this.otpExpired = true;
        this.otpVerified = false;
        this.otpInvalid = false;
      }
    }, 1000);
  }

  resendOtp() {
    this.generateOtp();
    this.startOtpTimer();
  }

  verifyOtp() {
    if (this.otpExpired) return;

    const enteredOtp = String(this.appointmentForm.value.otp);

    if (enteredOtp === this.generatedOtp) {
      this.otpVerified = true;
      this.otpInvalid = false;
      this.otpExpired = false;
    } else {
      this.otpVerified = false;
      this.otpInvalid = true;
    }
  }

  bookAppointment() {
    if (!this.otpVerified) return;

    alert("Appointment Booked Successfully!");
    console.log("Form Data:", this.appointmentForm.value);

    this.appointmentForm.reset();
    this.otpSent = false;
    this.otpVerified = false;
    this.otpInvalid = false;
    this.otpExpired = false;
    clearInterval(this.interval);
  }

}
