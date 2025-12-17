import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast'
import { HealthPackageForm } from '../health-package-form/health-package-form';

type DayName = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
interface Availability {

  id: number;
  day: DayName;
  availableFrom: string; // Change here to use a single field
  slotDuration: number;
  updatedAt?: string;
  doctorId?: number;
  availableFromArray?: [''],

}
@Component({
  selector: 'app-doctor',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DatePickerModule, SelectModule, ToastModule, HealthPackageForm],
  templateUrl: './doctor.html',
  styleUrl: './doctor.css',
  providers: [MessageService]
})
export class Doctor {

  date: any
  minDate: any
  // disabledDays: any;
  expertiseCol1: string[] = [];
  expertiseCol2: string[] = [];
  availableTimes: { name: string }[] = [];
  filteredDoctor: any;
  unavailableSlotsForDate: any[] = [];
  contactForm: any = FormGroup;
  clicked: boolean = true;
  // apiUrl: string = 'http://localhost:3000/api'
  // apiUrl = "https://backend-812956739285.us-east4.run.app/api";
  apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';
  @ViewChild('formSection') formSection!: ElementRef;

  // scrollToForm() {
  //   this.formSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  // }

  isSpecialDoctor: boolean = false; 
  specialDoctorSlug: string = "dr-kumaresh-krishnamoorthy";

  constructor(private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private http: HttpClient,
    private fb: FormBuilder,
    private metaService: Meta,
    private titleService: Title,
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      console.log(slug)
      this.loadDoctorBySlug(slug);
    });
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/^[a-zA-Z.\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      time: ['', Validators.required],
      message: ['', Validators.required],
      date_appointment: ['', Validators.required],
    });
    this.minDate = new Date();
  }
  loadDoctorBySlug(slug: string) {
    // Replace with actual data source (e.g., service or static list)
    const doctor = this.allDoctors.find(doc =>
      doc.name
        .toLowerCase()
        .replace(/[().]/g, '')      // remove dots and parentheses
        .replace(/\s+/g, '-')       // replace spaces with hyphens
        .replace(/-+/g, '-')        // replace multiple hyphens with single
        .replace(/^-|-$/g, '')     // trim hyphens from start/end   // Replace spaces with hyphens
      === slug
    );
    console.log(doctor)

    if (doctor) {
      this.filteredDoctor = doctor;
      this.isSpecialDoctor = slug === this.specialDoctorSlug;

      if (!this.isSpecialDoctor) {
        this.contactForm;  // load default form
      }
      this.titleService.setTitle(this.filteredDoctor.title || this.filteredDoctor.name);
      this.metaService.updateTag({ name: 'description', content: this.filteredDoctor.description || this.filteredDoctor.about });
      this.getDoctorById(this.filteredDoctor.id).subscribe(
        (response) => {
          const allUpdatedAtNull = response.availability?.every(avail => !avail.updatedAt);
          let latestTimestamp: string | null = null;
          if (!allUpdatedAtNull) {
            const validUpdatedAts = response.availability
              .filter(avail => avail.updatedAt)
              .map(avail => new Date(avail.updatedAt!).getTime());

            // Find the maximum timestamp
            const maxTimestamp = Math.max(...validUpdatedAts);

            // Convert the max timestamp back to an ISO string
            latestTimestamp = new Date(maxTimestamp).toISOString();

          }

          const latestAvailability = allUpdatedAtNull
            ? response.availability
            : response.availability?.filter(avail => avail.updatedAt === latestTimestamp);

          const validatedAvailability: Availability[] = latestAvailability?.map(avail => ({
            ...avail,
            day: avail.day.toLowerCase() as DayName,
          })) || [];

          this.updateDisabledDays(validatedAvailability);
        },
        (error) => {
          console.error('Error fetching doctor availability:', error);
        }
      );
    }
  }



  allDoctors = [
    {
      id: 1,
      name: "Dr. Ashok M. V",
      image: "/img/new-doctor-image/dr-ashok-m-v.png",
      alt: "Dr. Ashok MV | Pediatrician & Neonatologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-baby", expertise: "Pediatrics and Neonatology" }
      ],
      title: "Dr. Ashok M. V | Pediatrician & Neonatologist at Vasavi Hospitals",
      description: "Dr. Ashok M. V is an experienced Pediatrician & Neonatologist at Vasavi Hospitals with 15+ years of experience. Expert in NICU care, managing premature babies as small as 24 weeks. Book appointments online.",
      briefProfile: "I have done my masters in paediatrics from KIMS and my fellowship in nematology in Indira Gandhi Institute of Child and I have worked in abroad for few few years and I continues my work in hospitals like Sagar Hospital and Fortis Hospital, right now, I am working as a Consultant Neonatologist in Vasavi Hospitals. I have more than 15 years of experience in paediatrics, and I have a teaching experience for DNB students. I have presented few papers in international conference. My area of interest is Neonatology. I take care level 3 NICU and able to manage smaller baby as small as 24 week and other complicated babies.",
      qualification: "MBBS, MD- Pediatrics, FIPM- Fellowship in Neonatology",
      department: "Pediatrics & Neonatology",
      experience: "15+",
      designation: "Consultant Neonatologist",
      awards: [],
      professionalAffilications: [
        {
          image: "/img/affiliations/IAP.jpg",
          icon: "fas fa-user-md card-icon",
          paHeading: "IAP",
          paDescription: "Indian Academy of Pediatrics"
        },
        {
          image: "/img/affiliations/NNF.png",
          icon: "fas fa-hospital card-icon",
          paHeading: "NNF",
          paDescription: "National Neonatology Forum"
        },
        {
          image: "/img/affiliations/IAP.jpg",
          icon: "fas fa-stethoscope card-icon",
          paHeading: "BPS",
          paDescription: "Bangalore Pediatric Society"
        }
      ],
      publications: ["Presentation in India and international conferences"]
    },
    {
      id: 2,
      name: "Dr. Sreenidhi H. C",
      image: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Sreenidhi Chandrashekar | Nephrologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-kidney", expertise: "Nephrology" },
        { icon: "fas fa-procedures", expertise: "Kidney Transplantation" }
      ],
      title: "Dr. Sreenidhi H. C | Nephrologist at Vasavi Hospitals",
      description: "Dr. Sreenidhi H. C is a renowned Nephrologist at Vasavi Hospitals specializing in kidney diseases and transplantation. DM Nephrology with multiple awards and international recognition. Book consultation today.",
      briefProfile: "",
      qualification: "MBBS MD (GENERAL MEDICINE) DM (NEPHROLOGY)",
      department: "Nephrology",
      experience: "3+",
      designation: "Consultant Nephrologist",
      awards: [
        {
          icon: "fas fa-medal",
          awardFor: "Best Poster Award",
          awardDescription: "Directly Acting Antiviral Agents (DAA) In The Treatment Of HCV Infected Haemodialysis Patients- 4 Years' Experience From A Tertiary Care Hospital- Poster presentation in ISNCON 2021",
          cardColorClass: "award-card blue",
          iconColorClass: "award-icon blue"
        },
        {
          icon: "fas fa-trophy",
          awardFor: "WCN Grant",
          awardDescription: "WCN GRANT 2022",
          cardColorClass: "award-card green",
          iconColorClass: "award-icon green"
        },
        {
          icon: "fas fa-award",
          awardFor: "DM Gold Medal",
          awardDescription: "DM nephrology gold medal",
          cardColorClass: "award-card yellow",
          iconColorClass: "award-icon yellow"
        }
      ],
      professionalAffilications: [
        {
          image: "/img/affiliations/ISN.jpg",
          icon: "fas fa-globe card-icon",
          paHeading: "ISN",
          paDescription: "International Society of Nephrology"
        },
        {
          image: "/img/affiliations/ISN.png",
          icon: "fas fa-hospital card-icon",
          paHeading: "Indian Society of Nephrology",
          paDescription: "Indian Society of Nephrology"
        },
        {
          image: "/img/affiliations/AVATAR.jpeg",
          icon: "fas fa-heartbeat card-icon",
          paHeading: "AVATAR",
          paDescription: "Association of Vascular Access & Interventional Renal Physician"
        },
        {
          image: "/img/affiliations/ISPD.jpg",
          icon: "fas fa-procedures card-icon",
          paHeading: "ISPD",
          paDescription: "International Society of Peritoneal Dialysis"
        },
        {
          image: "/img/affiliations/ISH.png",
          icon: "fas fa-tint card-icon",
          paHeading: "ISH",
          paDescription: "International Society of Hypertension"
        }
      ],
      publications: [
        "Study of left ventricular systolic dysfunction, left ventricular diastolic dysfunction and pulmonary hypertension in CKD 3b-5ND patients-A single centre cross-sectional study",
        "Renal outcomes in myeloma associated acute kidney injury; a single centre experience",
        "Prognostic value of modified National Institute of Health activity and chronicity scoring in determining complete renal response in newly diagnosed lupus nephritis: a retrospective single centre study",
        "Thyroid function in patients with idiopathic nephrotic syndrome",
        "Predicting the risk of progression in Indian ADPKD cohort using PROPKD score - A single-centre retrospective study"
      ]
    },
    {
      id: 3,
      name: "Dr. Nisha Buchade",
      image: "/img/new-doctor-image/dr-nisha-buchade.png",
      alt: "Dr. Nisha Buchade | Gynecologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-baby", expertise: "High risk pregnancy, painless normal deliveries" },
        { icon: "fas fa-robot", expertise: "Robotic/ laparoscopic surgeries for fibroids, endometriosis, removal of uterus, cancer surgeries, prolapse repairs" },
        { icon: "fas fa-ribbon", expertise: "Prevention and treatment of gynaecological cancers" },
        { icon: "fas fa-venus", expertise: "PCOD, Infertility, menopause, urinary incontinence" }
      ],
      title: "Dr. Nisha Buchade | Gynecologist at Vasavi Hospitals",
      description: "Dr. Nisha Buchade is a leading Gynecologist at Vasavi Hospitals with 14+ years of experience. Expert in robotic surgeries, high-risk pregnancy, infertility treatment and gynecological oncology. Schedule appointments online.",
      briefProfile: "Dedicated gynecologist providing compassionate, ethical, and evidence-based care with a focus on women's health.",
      qualification: "MBBS, MS OBG, Fellowship in Gynecological Oncology and minimal access surgery, Fellowship in advanced infertility",
      department: "Gynecology",
      experience: "15+",
      designation: "Consultant Gynecologist",
      awards: [
        { icon: "fas fa-baby-carriage", awardFor: "Excellence in Maternity Care", awardDescription: "Times health excellence award for best maternity and child care", cardColorClass: "award-card yellow", iconColorClass: "award-icon yellow" },
        { icon: "fas fa-file-alt", awardFor: "Best Paper Presentation", awardDescription: "Indumati Jhaveri award for best paper presentation in national conference", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" },
        { icon: "fas fa-robot", awardFor: "Robotic Scholar", awardDescription: "Robotic scholar for year 2015", cardColorClass: "award-card green", iconColorClass: "award-icon green" },
        { icon: "fas fa-image", awardFor: "Best Poster Presentation", awardDescription: "Best poster presentation in state conference", cardColorClass: "award-card purple", iconColorClass: "award-icon purple" },
        { icon: "fas fa-video", awardFor: "Best Video Presentation", awardDescription: "Best video presentation of Robotic lymphadenectomy in endometrial cancer in IAGE national conference", cardColorClass: "award-card red", iconColorClass: "award-icon red" }
      ],
      professionalAffilications: [
        { image: "/img/affiliations/IAGE.png", icon: "fas fa-user-md card-icon", paHeading: "IAGE", paDescription: "Indian association of Gynecological Endoscopists" },
        { image: "/img/affiliations/logobsog.png", icon: "fas fa-hospital card-icon", paHeading: "BSOG", paDescription: "Bangalore society of obstetrics and Gynecologist" },
        { image: "/img/affiliations/AGOI.png", icon: "fas fa-ribbon card-icon", paHeading: "AGOI", paDescription: "Association of Gynaecological Oncologists of India" },
        { image: "/img/affiliations/UPIA.jpg", icon: "fas fa-venus card-icon", paHeading: "UPIA", paDescription: "Urogynecology Pelvic Floor Dysfunction and Incontinence Association" }
      ],
      publications: [
        "Study Of Diagnostic Efficacy Of Visual Inspection With Acetic Acid (VIA) In Comparison With PAP Smear In Cervical Cancer Screening In indexed journal"
      ]
    },
    {
      id: 4,
      name: "Dr. Venkatesh Rathod R",
      image: "/img/new-doctor-image/dr-venkatesh-rathod.png",
      alt: "Dr. Venkatesh Rathod | Orthopedic Surgeon | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-bone card-icon", expertise: "Upper limb trauma" },
        { icon: "fas fa-robot card-icon", expertise: "MAKO robotic knee and hip arthroplasty" },
        { icon: "fas fa-procedures card-icon", expertise: "Knee and shoulder arthroscopy" }
      ],
      title: "Dr. Venkatesh Rathod R | Orthopedic Surgeon at Vasavi Hospitals",
      description: "Dr. Venkatesh Rathod R is an expert Orthopedic Surgeon at Vasavi Hospitals with 11+ years of experience. Specializes in robotic knee & hip arthroplasty, upper limb trauma and arthroscopic surgeries.",
      briefProfile: "Dr. Venkatesh Rathod - I am a highly competent and skilled surgeon with more than 11 years of experience in orthopedic surgery. I have expertise in upper limb trauma management, expert in minimally invasive surgery, complicated Periarticular Fractures, complex/multiple tendon injuries, local and free flap surgeries in hand and wrist. Have special interest in MAKO robotic Hip Knee & shoulders replacement and arthroscopic surgeries. I have been a member of the team of doctors for royal challengers Bangalore cricket team attending to sport injuries. I have several publications to my credit. I play pivotal role in execution and streamlining the operative plan of the team to ensure smooth running of the department for excellent patient care and rehabilitation. I have been an integral part of Vasavi institute of advanced orthopedics from the time it started. He has performed and assisted nearly 3000 surgeries till date. I have an accomplished medical professional adept at performing surgeries completing evaluations and developing successful treatment plans. Driven to communicate well and establish strong rapport with all patients.",
      qualification: "MBBS, Dortho, DNB ortho",
      department: "Orthopedics",
      experience: "16+",
      designation: "Consultant Orthopedic Surgeon",
      awards: [
        {
          icon: "fas fa-medal",
          awardFor: "Best Paper Award",
          awardDescription: "Best paper award for proximal humerus fracture with philos plate and screws 2014",
          cardColorClass: "award-card blue",
          iconColorClass: "award-icon blue"
        }
      ],
      professionalAffilications: [],
      publications: ["Proximal humerus fracture treated with philos plate - clinical outcome"]
    },
    {
      id: 13,
      name: "Dr. Vinay Hosadurga",
      image: "/img/new-doctor-image/dr-vinay-hosadurga.png",
      alt: "Dr. Vinay Hosadurga | General Physician | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-heartbeat", expertise: "Metabolic diseases" },
        { icon: "fas fa-virus", expertise: "Infectious diseases" }
      ],
      title: "Dr. Vinay Hosadurga | General Physician at Vasavi Hospitals",
      description: "Dr. Vinay Hosadurga is an experienced General Physician at Vasavi Hospitals with 14+ years of practice. Expert in metabolic diseases and infectious diseases with a patient-centered ethical approach.",
      briefProfile: "Patient centered evidence based ethical approach to achieve better quality of life to my patients.",
      qualification: "M.B.B.S, M.D (General Medicine)",
      department: "General Medicine",
      experience: "14+",
      designation: "Consultant Physician",
      awards: [
        {
          icon: "fas fa-medal",
          awardFor: "Academic Excellence",
          awardDescription: "M.D 2nd Rank to RGUHS Batch 2012",
          cardColorClass: "award-card yellow",
          iconColorClass: "award-icon yellow"
        }
      ],
      professionalAffilications: [],
      publications: []
    },
    {
      id: 5,
      name: "Dr. Sneha Sundaram",
      image: "/img/new-doctor-image/dummy-female.png",
      alt: "Dr. Sneha Sundaram | Endodontist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-tooth", expertise: "Endodontist (root canal specialist)" },
        { icon: "fas fa-teeth", expertise: "Conservative dentistry" }
      ],
      title: "Dr. Sneha Sundaram | Endodontist at Vasavi Hospitals",
      description: "Dr. Sneha Sundaram is a skilled Endodontist at Vasavi Hospitals with 13+ years of experience. Specializes in root canal therapy, conservative dentistry and comprehensive oral health care. Book dental appointments.",
      briefProfile: "Experienced endodontist with 8+ years of experience and dedication providing help to patients to achieve optimal oral health and overcome complex mouth and tooth problems. Skilled in Root canal therapy, Conservative dentistry and comprehensive patient oral care. Committed to achieve highest patient satisfaction level with expertise to accurately diagnose patient and provide effective treatment plans.",
      qualification: "BDS, MDS",
      department: "Dentistry",
      experience: "13+",
      designation: "Consultant Endodontist",
      awards: [
        {
          icon: "fas fa-medal",
          awardFor: "Best Paper Presentation",
          awardDescription: "Won 2 times best paper presentation award at dental Conference",
          cardColorClass: "award-card blue",
          iconColorClass: "award-icon blue"
        }
      ],
      professionalAffilications: [],
      publications: ["2 publications in dentistry field"]
    },
    {
      id: 6,
      name: "Dr. Abhiram R",
      image: "/img/new-doctor-image/dr-abhiram-r.png",
      alt: "Dr. Abhiram R | Dermatologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-user-md", expertise: "Consultant Dermatologist" },
        { icon: "fas fa-cut", expertise: "Dermatosurgeon" }
      ],
      title: "Dr. Abhiram R | Dermatologist at Vasavi Hospitals",
      description: "Dr. Abhiram R is an expert Dermatologist at Vasavi Hospitals with 10+ years of experience. Specializes in dermatosurgery, laser treatments, aesthetic procedures and hair transplantation. Schedule consultation online.",
      briefProfile: "Dr. Abhiram Rayapati is an experienced dermatologist with over 10 years of expertise in treating a wide range of skin, hair, and nail problems. He completed his MBBS and MD in Dermatology from PES Institute of Medical Sciences and Research and pursued advanced training in Dermatosurgery and Hair Transplantation at BMCRI, Bengaluru. He is skilled in laser treatments, aesthetic procedures, skin surgeries, and hair restoration, and has successfully treated thousands of patients. Known for his caring approach and clear communication, Dr. Abhiram ensures that every patient feels comfortable and receives the best possible care. He is also a member of the Indian Association of Dermatologists (IADVL).",
      qualification: "MBBS, MD-DVL, FRGUHS- Dermatosurgery",
      department: "Dermatology",
      experience: "10+",
      designation: "Consultant Dermatologist",
      awards: [],
      professionalAffilications: [
        {
          image: "/img/affiliations/IADVL.jpg",
          icon: "fas fa-user-md card-icon",
          paHeading: "IADVL",
          paDescription: "Indian Association of Dermatologists, Venereologists and Leprologists"
        },
        {
          image: "/img/affiliations/logo.png",
          icon: "fas fa-hospital card-icon",
          paHeading: "BDS",
          paDescription: "Bangalore Dermatological Society"
        }
      ],
      publications: []
    },
    {
      id: 7,
      name: "Dr. Sunil R",
      image: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Sunil R | Nephrologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-procedures", expertise: "Renal Transplantation" },
        { icon: "fas fa-kidney", expertise: "CKD Dialysis" }
      ],
      title: "Dr. Sunil R | Nephrologist at Vasavi Hospitals",
      description: "Dr. Sunil R is a highly skilled Nephrologist at Vasavi Hospitals with 15+ years of experience. Expert in renal transplantation, CKD dialysis and complex kidney disease management. Book appointment today.",
      briefProfile: "Dr Sunil R is a highly skilled Nephrologist and Transplant Physician with extensive experience in managing complex renal cases. His educational background includes MBBS from Kempegowda Institute of Medical Sciences, MD in General Medicine from JSS Medical College, and DM in Nephrology from Institute of NephroUrology, Victoria Hospital Campus. He has been contributing to the medical field through his clinical expertise and has presented research findings at various national conferences.",
      qualification: "MD DM NEPHROLOGY",
      department: "Nephrology",
      experience: "15+",
      designation: "Consultant Nephrologist",
      awards: [],
      professionalAffilications: [
        {
          image: "/img/affiliations/ISN.jpg",
          icon: "fas fa-globe card-icon",
          paHeading: "ISN",
          paDescription: "International Society of Nephrology"
        },
        {
          image: "/img/affiliations/ISOT.png",
          icon: "fas fa-procedures card-icon",
          paHeading: "ISOT",
          paDescription: "International Society for Organ Transplantation"
        }
      ],
      publications: ["DREAM D - CJASN", "DREAM ND - CJASN"]
    },
    {
      id: 8,
      name: "Dr. Pratham R Bysani",
      image: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Pratham R Bysani | Neurosurgeon | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-brain", expertise: "Brain Surgery" },
        { icon: "fas fa-spine", expertise: "Spine Surgery" }
      ],
      title: "Dr. Pratham R Bysani | Neurosurgeon at Vasavi Hospitals",
      description: "Dr. Pratham R Bysani is an accomplished Neurosurgeon at Vasavi Hospitals with 10+ years of experience. Expert in brain surgery, spine surgery with international fellowship training. Schedule neurosurgery consultation.",
      briefProfile: "",
      qualification: "MBBS., M.S. Gen Surgery, MCh. FRCS (Edin)., Neurosurgery, EDSI., MBA (BITS Pilani)",
      department: "Neurosurgery",
      experience: "10+",
      designation: "Consultant Neurosurgeon",
      awards: [],
      professionalAffilications: [
        { image: "/img/affiliations/NSI.jpg", icon: "fas fa-brain card-icon", paHeading: "NSI", paDescription: "Neurological Society of India" },
        { image: "/img/affiliations/CVSI.png", icon: "fas fa-heartbeat card-icon", paHeading: "CVSI", paDescription: "Cerebrovascular Society of India" },
        { image: "/img/affiliations/CNS.jpg", icon: "fas fa-users card-icon", paHeading: "CNS", paDescription: "Congress of Neurological Surgeons USA" },
        { image: "/img/affiliations/ESMINT.png", icon: "fas fa-globe card-icon", paHeading: "ESMINT", paDescription: "European Society of Minimally Invasive Neurological Therapy" },
        { image: "/img/affiliations/ASSI.jpg", icon: "fas fa-spine card-icon", paHeading: "ASSI", paDescription: "Association of Spine Surgeons India" },
        { image: "/img/affiliations/MISSAB.jpg", icon: "fas fa-compress card-icon", paHeading: "MISSAB", paDescription: "Minimally Invasive Spine Surgeons of Bharat" },
        { image: "/img/affiliations/RCS.png", icon: "fas fa-award card-icon", paHeading: "RCS", paDescription: "Royal College of Surgeons, Europe" }
      ],
      publications: []
    },
    {
      id: 14,
      name: "Dr. Karthik K",
      image: "/img/new-doctor-image/dr-karthik-k.png",
      alt: "Dr. Karthik K | Anesthesiologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-lungs", expertise: "Thoracic epidurals" },
        { icon: "fas fa-baby", expertise: "Labor epidurals" }
      ],
      title: "Dr. Karthik K | Anesthesiologist at Vasavi Hospitals",
      description: "Dr. Karthik K is an experienced Anesthesiologist at Vasavi Hospitals with 21+ years of expertise. Specializes in thoracic and labor epidurals and comprehensive anesthesia care.",
      briefProfile: "Efficient, experienced and compassionate doctor with leadership qualities.",
      qualification: "MBBS DA DNB Anaesthesiology",
      department: "Anesthesiology",
      experience: "21+",
      designation: "Consultant Anesthesiologist",
      awards: [],
      professionalAffilications: [
        { image: "/img/affiliations/ISA.jpg", icon: "fas fa-user-md card-icon", paHeading: "ISA", paDescription: "Indian Society of Anaesthesiology" },
        { image: "/img/affiliations/ICA.jpg", icon: "fas fa-graduation-cap card-icon", paHeading: "ICA", paDescription: "Indian College of Anaesthesiology" },
        { image: "/img/affiliations/IMA.png", icon: "fas fa-hospital card-icon", paHeading: "IMA", paDescription: "Indian Medical Association" }
      ],
      publications: ["Thoracic epidural anaesthesia for upper abdominal surgeries"]
    },
    {
      id: 15,
      name: "Dr. Pradeep A Dongare",
      image: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Pradeep A Dongare | Anesthesiologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-syringe", expertise: "Regional Anaesthesia" },
        { icon: "fas fa-wind", expertise: "Difficult Airway" },
        { icon: "fas fa-flask", expertise: "Research Methodology" }
      ],
      title: "Dr. Pradeep A Dongare | Anesthesiologist at Vasavi Hospitals",
      description: "Dr. Pradeep A Dongare is a dedicated Anesthesiologist with 12+ years of experience and 25+ research publications.",
      briefProfile: "I completed my undergraduate at VIMS Ballari and specialized in Anaesthesiology from Mysore Medical College; Diploma 2009, DNB Kidwai Institute. Passionate teacher and researcher with 25 publications.",
      qualification: "DA, DNB",
      department: "Anesthesiology",
      experience: "12+",
      designation: "Consultant Anesthesiologist",
      awards: [
        { icon: "fas fa-award", awardFor: "ISA President's Appreciation Award", awardDescription: "ISA Presidents Appreciation Award", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" }
      ],
      professionalAffilications: [
        { image: "/img/affiliations/ISA.jpg", icon: "fas fa-user-md card-icon", paHeading: "ISA", paDescription: "Indian Society of Anaesthesiologists" },
        { image: "/img/affiliations/AORA.png", icon: "fas fa-syringe card-icon", paHeading: "AORA", paDescription: "Academy of Regional Anaesthesia" },
        { image: "/img/affiliations/AIDAA.png", icon: "fas fa-wind card-icon", paHeading: "AIDAA", paDescription: "All India Difficult Airway Association" },
        { image: "/img/affiliations/AOA.png", icon: "fas fa-baby card-icon", paHeading: "AOA", paDescription: "Association of Obstetric Anaesthetists" },
        { image: "/img/affiliations/APSF.png", icon: "fas fa-shield-alt card-icon", paHeading: "APSF", paDescription: "Anaesthesia Patient Safety Forum" }
      ],
      publications: ["25 publications in anesthesiology"]
    },
    {
      id: 16,
      name: "Dr. Abhirami Ravindran",
      image: "/img/new-doctor-image/dummy-female.png",
      alt: "Dr. Abhirami Ravindran | Anesthesiologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-ribbon", expertise: "Oncoanesthesia" },
        { icon: "fas fa-procedures", expertise: "Transplant anesthesia" },
        { icon: "fas fa-robot", expertise: "Robotic anesthesia" },
        { icon: "fas fa-brain", expertise: "Neuro anesthesia" }
      ],
      title: "Dr. Abhirami Ravindran | Anesthesiologist at Vasavi Hospitals",
      description: "Dr. Abhirami Ravindran is a specialist Anesthesiologist with 13+ years of experience in onco-, transplant and robotic anesthesia.",
      briefProfile: "Well experienced from a high volume centre in oncoanesthesia, liver transplant (350 cases), HIPEC (500 cases), neuro and robotic cases (5000 DaVinci/CMR, 500 MAKO). Faculty for segmental spinal anesthesia with ERAS protocol focus.",
      qualification: "MBBS DNB anesthesia",
      department: "Anesthesiology",
      experience: "13+",
      designation: "Consultant Anesthesiologist",
      awards: [],
      professionalAffilications: [
        { image: "/img/affiliations/IMA.png", icon: "fas fa-user-md card-icon", paHeading: "IMA", paDescription: "Indian Medical Association" },
        { image: "/img/affiliations/ISA.jpg", icon: "fas fa-syringe card-icon", paHeading: "ISA", paDescription: "Indian Society of Anaesthesiologists" },
        { image: "/img/affiliations/ISSP.png", icon: "fas fa-exclamation-triangle card-icon", paHeading: "ISSP", paDescription: "Indian Society for Study of Pain" }
      ],
      publications: [
        "Segmental spinal anesthesia in morbidly obese patient with lung disorder",
        "Segmental spinal in Whipple’s patient with enhanced recovery"
      ]
    },
    {
      id: 17,
      name: "Dr. Raveendra Reddy",
      image: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Raveendra Reddy | Critical Care Specialist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-bacteria", expertise: "Sepsis" },
        { icon: "fas fa-lungs", expertise: "ARDS" },
        { icon: "fas fa-first-aid", expertise: "Critical care illnesses" }
      ],
      title: "Dr. Raveendra Reddy | Critical Care Specialist at Vasavi Hospitals",
      description: "Dr. Raveendra Reddy is an expert Critical Care Specialist with 16+ years of experience, trained at King’s College Hospital London.",
      briefProfile: "Work as a team, enthusiastic and motivated, good communication skills, confident and competent doctor aware of limitations and safe practice.",
      qualification: "MBBS, FcARCSI, FCCS, Fellowship in Critical Care at King's College Hospital London",
      department: "Critical Care",
      experience: "16+",
      designation: "Consultant Critical Care Specialist",
      awards: [],
      professionalAffilications: [
        { image: "/img/affiliations/KMC.jpg", icon: "fas fa-stethoscope card-icon", paHeading: "KMC", paDescription: "Karnataka Medical Council" },
        { image: "/img/affiliations/GMC.png", icon: "fas fa-award card-icon", paHeading: "GMC", paDescription: "General Medical Council" },
        { image: "/img/affiliations/ISCCM.png", icon: "fas fa-hospital card-icon", paHeading: "ISCCM", paDescription: "Indian Society of Critical Care Medicine" }
      ],
      publications: [
        "Acknowledgement by Cancyte team in Immunologic Research",
        "Correspondence published in Anaesthesia journal (UK)",
        "Poster presentation at 15th Annual Scientific Meeting of British Society of Orthopaedic Anaesthetists"
      ]
    },
    {
      id: 9,
      name: "Dr. Ramesh Hanumegowda",
      image: "/img/new-doctor-image/dr-ramesh-hanumegowda.png",
      alt: "Dr. Ramesh Hanumegowda | Urologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-microscope", expertise: "Endourology" },
        { icon: "fas fa-robot", expertise: "Robotic urology" },
        { icon: "fas fa-ribbon", expertise: "Uro oncology" },
        { icon: "fas fa-kidney", expertise: "Kidney transplant" },
        { icon: "fas fa-tools", expertise: "Reconstructive urology" }
      ],
      title: "Dr. Ramesh Hanumegowda | Urologist at Vasavi Hospitals",
      description: "Dr. Ramesh Hanumegowda is an eminent Urologist with 15+ years of surgical experience in endourology and robotic urology.",
      briefProfile: "Dr Ramesh Hanumegowda is an eminent urologist with over 15 years of surgical experience. MBBS, MS (Gen Surgery), MCH Urology from Institute of Nephrourology Bengaluru. Special interest in urethral reconstruction and certified Da Vinci robotic surgeon.",
      qualification: "MBBS, MS, MCH UROLOGY",
      department: "Urology",
      experience: "15+",
      designation: "Consultant Urologist",
      awards: [],
      professionalAffilications: [
        { image: "/img/affiliations/USI.png", icon: "fas fa-procedures card-icon", paHeading: "USI", paDescription: "Urology Society of India" },
        { image: "/img/affiliations/KUA.png", icon: "fas fa-hospital card-icon", paHeading: "KUA", paDescription: "Karnataka Urology Association" },
        { image: "/img/affiliations/ASU.webp", icon: "fas fa-users card-icon", paHeading: "ASU", paDescription: "Association of Southern Urology" },
        { image: "/img/affiliations/BUS.png", icon: "fas fa-clinic-medical card-icon", paHeading: "BUS", paDescription: "Bangalore Urology Society" }
      ],
      publications: []
    },
    {
      id: 10,
      name: "Dr. Sudeep Putta Manohar",
      image: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Sudeep Putta Manohar | Endocrinologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-syringe", expertise: "Diabetes" },
        { icon: "fas fa-microscope", expertise: "Thyroid disorders" },
        { icon: "fas fa-venus", expertise: "PCOS" },
        { icon: "fas fa-bone", expertise: "Osteoporosis" },
        { icon: "fas fa-kidneys", expertise: "Adrenal diseases" },
        { icon: "fas fa-brain", expertise: "Pituitary disorders" },
        { icon: "fas fa-venus-mars", expertise: "Gonadal disorders" }
      ],
      title: "Dr. Sudeep Putta Manohar | Endocrinologist at Vasavi Hospitals",
      description: "Dr. Sudeep Putta Manohar is a qualified Endocrinologist with 15+ years of experience. Expert in diabetes, thyroid, PCOS, osteoporosis, adrenal and pituitary disorders.",
      briefProfile: "",
      qualification: "MBBS, MRCP (UK), MRCP (Endocrinology), CCT",
      department: "Endocrinology",
      experience: "15+",
      designation: "Consultant Endocrinologist",
      awards: [],
      professionalAffilications: [],
      publications: []
    },
    {
      id: 15,
      name: "Dr. Sowmya Sangmesh",
      image: "/img/new-doctor-image/dr-sowmya-sangmesh.png",
      alt: "Dr. Sowmya Sangmesh | Gynecologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-cut", expertise: "Laparoscopic and Minimally Invasive Gynecologic Surgery" },
        { icon: "fas fa-cut", expertise: "Reproductive Medicine and Infertility Management" },
        { icon: "fas fa-cut", expertise: "Robotic-Assisted Gynecologic Surgery" },
        { icon: "fas fa-cut", expertise: "Maternal-Fetal Medicine & High-Risk Obstetrics" },
        { icon: "fas fa-cut", expertise: "Comprehensive Gynecologic Care" }
      ],
      title: "Dr. Sowmya Sangmesh | Gynecologist at Vasavi Hospitals",
      description: "Dr. Sowmya Sangmesh is a skilled Gynecologist with 14+ years of experience in laparoscopic and robotic surgery and fertility care.",
      briefProfile: "Highly skilled Obstetrician and Gynecologist with over 14 years experience, specializing in fertility care, laparoscopic and robotic surgeries. MS (OBG), Fellowship in Minimal Access Surgery, Advanced Diploma Reproductive Medicine (Germany).",
      qualification: "MBBS, MS (OBG), Fellowship Minimal Access Surgery, Advanced Diploma Reproductive Medicine",
      department: "Gynecology",
      experience: "14+",
      designation: "Consultant Gynaec Laparoscopic Surgeon",
      awards: [
        { icon: "fas fa-medal", awardFor: "Best Paper Award", awardDescription: "FIRST Prize Best Paper [C.S DAWN] Placenta Accreta Spectrum Disorders AICOG 2023 (Kolkata)", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" }
      ],
      professionalAffilications: [
        { image: "/img/affiliations/logobsog.png", icon: "fas fa-hospital card-icon", paHeading: "BSOG", paDescription: "Bangalore Society of Obstetrics and Gynecology" },
        { image: "/img/affiliations/MOGS.png", icon: "fas fa-baby card-icon", paHeading: "MOGS", paDescription: "Mysore Obstetric and Gynecological Society" },
        { image: "/img/affiliations/FOGSI.jpg", icon: "fas fa-venus card-icon", paHeading: "FOGSI", paDescription: "Federation of Obstetric and Gynecological Societies of India" },
        { image: "/img/affiliations/IAGE.png", icon: "fas fa-user-md card-icon", paHeading: "IAGE", paDescription: "Indian Association of Gynaecological Endoscopists" },
        { image: "/img/affiliations/AMASI.png", icon: "fas fa-stethoscope card-icon", paHeading: "AMASI", paDescription: "Association of Minimal Access Surgeons of India" }
      ],
      publications: [
        "Article - To Compare and Analyze the Clinical Outcome and Complications of Total Abdominal Hysterectomy and Total Laparoscopic Hysterectomy",
        "Superoxide Solution [Oxum] Vs Povidone Iodine Dressing in Diabetic Foot Ulcers - Prospective Study",
        "Publication on Amniotic Fluid Index and Perinatal Outcome - Thesis",
        "Poster - Gastroschisis and Neonatal Outcome"
      ]
    },
    {
      id: 11,
      name: "Dr. Madhu B Jagalasar",
      image: "/img/new-doctor-image/dummy-female.png",
      alt: "Dr. Madhu B Jagalasar | Neonatologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-baby", expertise: "Neonatology" }
      ],
      title: "Dr. Madhu B Jagalasar | Neonatologist at Vasavi Hospitals",
      description: "Dr. Madhu B Jagalasar is an expert Neonatologist with 13+ years of experience in newborn intensive care and MBA (HCM).",
      briefProfile: "",
      qualification: "MD Paediatrics, DM Neonatology, MBA (HCM)",
      department: "Neonatology",
      experience: "13+",
      designation: "Consultant Neonatologist",
      awards: [],
      professionalAffilications: [
        { image: "/img/affiliations/IAP.jpg", icon: "fas fa-user-md card-icon", paHeading: "IAP", paDescription: "Indian Academy of Pediatrics" },
        { image: "/img/affiliations/NNF.png", icon: "fas fa-hospital card-icon", paHeading: "NNF", paDescription: "National Neonatology Forum" },
        { image: "/img/affiliations/IMA.png", icon: "fas fa-stethoscope card-icon", paHeading: "IMA", paDescription: "Indian Medical Association" }
      ],
      publications: ["3 publications in neonatology"]
    },
    {
      id: 12,
      name: "Dr. Srivatsa Subramanya",
      image: "/img/new-doctor-image/dr-srivatsa-subramanya.png",
      alt: "Dr. Srivatsa Subramanya | Orthopedic Surgeon | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "fas fa-bone", expertise: "Orthopaedic Trauma" },
        { icon: "fas fa-procedures", expertise: "Shoulder and knee joint preservation, reconstruction, arthroscopy and replacement" },
        { icon: "fas fa-running", expertise: "Sports injuries, ligament reconstruction" }
      ],
      title: "Dr. Srivatsa Subramanya | Orthopedic Surgeon at Vasavi Hospitals",
      description: "Renowned Orthopedic Surgeon with 17+ years of global experience in shoulder and knee surgery, sports injuries and replacements.",
      briefProfile: "Orthopaedic surgeon and shoulder & knee specialist with global training (Australia, Italy, Japan, Korea). Expert in joint preservation, reconstructive and replacement surgeries; faculty in international meetings and published author.",
      qualification: "MBBS, MS (Ortho), DNB (Ortho), Fellowship in Knee (Australia), Fellowship in Shoulder (Australia, Italy), Fellowship in Trauma (S. Korea)",
      department: "Orthopedics",
      experience: "17+",
      designation: "Consultant Orthopedic Surgeon",
      awards: [
        { icon: "fas fa-medal", awardFor: "Prof. M. Natarajan Gold Medal", awardDescription: "Outcome after acetabular fractures - mid-term analysis of 84 cases - TNOACON 2011", cardColorClass: "award-card yellow", iconColorClass: "award-icon yellow" },
        { icon: "fas fa-trophy", awardFor: "Best Post Graduate Paper", awardDescription: "Outcome of surgically treated acetabular fractures - OASISCON 2010", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" },
        { icon: "fas fa-award", awardFor: "Best Paper of the Session", awardDescription: "Intricacies of proximal femoral deformity correction - MOS 2010", cardColorClass: "award-card green", iconColorClass: "award-icon green" },
        { icon: "fas fa-star", awardFor: "Best Paper of the Session", awardDescription: "Role of S-ROM prosthesis in dysplastic Hip - MOS 2009", cardColorClass: "award-card purple", iconColorClass: "award-icon purple" }
      ],
      professionalAffilications: [
        { image: "/img/affiliations/IAS.png", icon: "fas fa-user-md card-icon", paHeading: "IAS", paDescription: "Indian Arthroscopy Society" }
      ],
      publications: [
        "Reverse shoulder arthroplasty with patient-specific glenoid guides - Techniques in Shoulder and Elbow Surgery, 2014",
        "Sport Specific ACL Reconstruction - KSSTA Review",
        "UNIX Unicompartment Knee Replacement - 15-year Survivorship Analysis",
        "Patient Specific Instrumentation in Reverse Shoulder Arthroplasty - AOA 2014",
        "Management of Chondral Injuries in Athletes - AFL Meeting",
        "Effect of Rotational Alignment of Femoral Component in TKA - JOASIS 2010",
        "Vanishing Bone Disease - JTNOA 2011"
      ]
    },
    {
      id: 18,
      name: "Dr. Mutharaju K. R",
      image: "/img/new-doctor-image/dr-mutharaju-k-r.png",
      alt: "Dr. Mutharaju K R | Bariatric Surgeon | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "", expertise: "Robotic Bariatric surgery" },
        { icon: "", expertise: "Advanced Robotic surgeries" },
        { icon: "", expertise: "Laparoscopic Bariatric surgery" },
        { icon: "", expertise: "Colorectal surgeries" },
        { icon: "", expertise: "Hiatus Hernia surgery" },
        { icon: "", expertise: "Hernia surgeries" },
        { icon: "", expertise: "Appendix surgery" }
      ],
      title: "Dr. Mutharaju K. R | Bariatric Surgeon at Vasavi Hospitals",
      description: "Dr. Mutharaju K R is a senior GI, Bariatric and Robotic Surgeon with 23+ years of experience.",
      briefProfile: "Highly skilled GI, Bariatric, Metabolic and Advanced Laparoscopic Surgeon trained at BMCRI and AFMC Pune; Fellow in Bariatric & Metabolic Surgery (Ahmedabad). Expert in laparoscopic and robotic bypass and revisional surgery for obesity and metabolic disorders.",
      qualification: "MBBS, MS, FMBS (Fellow in Bariatric & Metabolic Surgery)",
      department: "Bariatric Surgery",
      experience: "23+",
      designation: "Sr. Consultant - Bariatric, Minimal Invasive and Robotic Surgeon",
      awards: [],
      professionalAffilications: [],
      publications: []
    },
    {
      id: 18,
      name: "Dr. Gargi Das",
      image: "/img/new-doctor-image/Dr Gargi Das.png",
      alt: "Dr Gargi Das - Consultant Ophthalmologist | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "", expertise: "Ophthalmology" },
        { icon: "", expertise: "Refractive Surgery" },
        { icon: "", expertise: "Glaucoma" },
        { icon: "", expertise: "Diabetic Retinopathy Screening & Management" },
        { icon: "", expertise: "Preventive Eye Care" },
        { icon: "", expertise: "Corneal Disorders" },
        { icon: "", expertise: "Eye Trauma Management" }
      ],
      title: "Dr. Gargi Das - Consultant Ophthalmologist | Vasavi Hospitals Bangalore",
      description: "Dr. Gargi Das specializes in ophthalmology, refractive surgery, glaucoma and diabetic retinopathy management at Vasavi Hospitals, Bangalore.",
      briefProfile: "",
      qualification: "MBBS, MD, FPRS",
      department: "Ophthalmology",
      experience: "6+",
      designation: "Consultant - Ophthalmology",
      awards: [],
      professionalAffilications: [],
      publications: []
    },
    {
      id: 18,
      name: "Dr. Sphoorthy G Itigi",
      image: "/img/new-doctor-image/Dr Sphoorthy G Itigi.png",
      alt: "Dr. Sphoorthy G Itigi - Consultant ENT Surgeon | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "", expertise: "Micro Ear surgeries" },
        { icon: "", expertise: "Endoscopic Sinus Surgery" },
        { icon: "", expertise: "Vertigo management" },
        { icon: "", expertise: "Vocal cord surgery" },
        { icon: "", expertise: "Thyroid surgery" },
        { icon: "", expertise: "Tonsillectomy and Adenoidectomy" },
        { icon: "", expertise: "Snoring and Sleep Apnea Management" }
      ],
      title: "Dr. Sphoorthy G Itigi - Consultant ENT Surgeon | Vasavi Hospitals Bangalore",
      description: "Dr Sphoorthy G Itigi is an ENT specialist in micro ear surgery, sinus surgery, thyroid and voice disorders at Vasavi Hospitals, Bangalore.",
      briefProfile: "",
      qualification: "MBBS, DLO, DNB (ENT)",
      department: "ENT",
      experience: "8+",
      designation: "Consultant - ENT",
      awards: [],
      professionalAffilications: [],
      publications: []
    },
    {
      id: 18,
      name: "Dr. Naneboena Sunitha",
      image: "/img/new-doctor-image/dr-naneboena-sunitha.png",
      alt: "Dr Naneboena Sunitha - Consultant Nutritionist & Dietitian | Vasavi Hospitals Bangalore",
      areasOfExpertise: [
        { icon: "", expertise: "Clinical nutrition and diet therapy" },
        { icon: "", expertise: "Obesity and weight management" },
        { icon: "", expertise: "Diabetes and lifestyle disorder nutrition" },
        { icon: "", expertise: "Oncology nutrition and cancer care diets" },
        { icon: "", expertise: "Preventive and therapeutic nutrition planning" },
        { icon: "", expertise: "Corporate and community nutrition education" }
      ],
      title: "Dr. Naneboena Sunitha - Consultant Nutritionist & Dietitian | Vasavi Hospitals Bangalore",
      description: "Dr. Naneboena Sunitha, Nutritionist & Dietitian with 26 years of experience in clinical nutrition, diabetes, weight management and oncology care at Vasavi Hospitals, Bangalore.",
      briefProfile: "Dr. Naneboena Sunitha is a highly accomplished Nutritionist and Dietitian with over 26 years of experience in clinical and academic nutrition. She has served as a Professor of Nutrition at reputed institutions including MvJ Medical College and East Point Medical College. Her expertise spans across weight management, diabetes reversal, and oncology nutrition, with a focus on achieving healthy results without nutritional deficiencies. Dr. Sunitha has successfully guided over 3000 patients in sustainable weight reduction programs and has worked extensively in cancer nutrition care at Mega Hospital. Beyond clinical practice, she has led numerous corporate wellness and nutrition awareness programs for leading organizations such as Infosys, Wipro, and Accenture. Her evidence-based, holistic approach integrates lifestyle modification with preventive nutrition, empowering individuals to make long-term, healthy choices for improved well-being.",
      qualification: "Ph.D. (Food & Nutrition) | M.Sc. | M.Ed. | MBA (Marketing) | Diploma in Catering | DCA",
      department: "",
      experience: "26+",
      designation: "Consultant - Nutritionist & Dietitian",
      awards: [
        { icon: "fas fa-baby-carriage", awardFor: "Community Health Leadership", awardDescription: "Recognized for outstanding contribution to public health initiatives and community nutrition awareness", cardColorClass: "award-card yellow", iconColorClass: "award-icon yellow" },
        { icon: "fas fa-file-alt", awardFor: "Invited Expert Speaker", awardDescription: "Invited speaker at leading corporate wellness programs and academic medical conferences", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" },
      ],
      professionalAffilications: [
        { image: "/img/affiliations/IDA.jpg", icon: "fas fa-user-md card-icon", paHeading: "IDA", paDescription: "Indian Dietetic Association" },
        { image: "/img/affiliations/NSI3.png", icon: "fas fa-user-md card-icon", paHeading: "NSI", paDescription: "Nutrition Society of India" },
        { image: "/img/affiliations/AFF.png", icon: "fas fa-user-md card-icon", paHeading: "SCNM", paDescription: "Society for Clinical Nutrition and Metabolism " }
      ],
      publications: [
        'Authored research papers on nutrition-based interventions for obesity and diabetes management',
        'Contributed articles on preventive health, balanced diets, and corporate wellness nutrition'
      ]
    },
    {
      id: 16,
      name: "Dr. Kumaresh Krishnamoorthy",
      image: "/img/new-doctor-image/dr-kumaresh-krishnamoorthy.png",
      alt: "Dr. Kumaresh Krishnamoorthy | Best ENT Doctor",
      areasOfExpertise: [
        { icon: "", expertise: "General ENT" },
        { icon: "", expertise: "Paediatric ENT" },
        { icon: "", expertise: "Head & Neck" },
        { icon: "", expertise: "Vertigo" },
        { icon: "", expertise: "Thyroid" },
        { icon: "", expertise: "Hearing Loss" },
        { icon: "", expertise: "Implantation Otology" },
      ],
      title: "Dr. Kumaresh Krishnamoorthy Itigi - Consultant ENT Surgeon | Vasavi Hospitals Bangalore",
      description: "Dr. Kumaresh Krishnamoorthy is a leading ENT specialist at Vasavi Hospitals, Bangalore, with 25 years of expertise in General ENT, Paediatric ENT, Head & Neck care, vertigo treatment, thyroid disorders, hearing loss and implantation otology.",
      briefProfile: "I am an ENT, Head & Neck, and Neurotology specialist with over two decades of experience dedicated to restoring hearing, balance, voice, and breathing. After completing my basic surgical training in India, I pursued dual fellowships in the USA - one in Head & Neck Surgery and another in Otology & Neurotology - which helped me refine my expertise in managing complex skull-base and otological conditions. My practice focuses on advanced ENT surgeries, including cochlear implantation, bone-anchored hearing reconstruction, voice and sinus surgeries, and head & neck cancer care. Over the years, I’ve had the privilege of treating patients from across India and abroad, and each case reinforces my belief in a patient-centric, compassionate approach to care. Beyond clinical practice, I am deeply passionate about healthcare innovation and frugal medical technology. I mentor startups, guide young innovators, and have been part of several national initiatives to promote healthcare entrepreneurship. I train specialists in resource limited countries like Iraq and Tanzannia and have been profiled in almost all leading news media and tele media",
      qualification: "MS (ENT), Fellow – Head & Neck Surgery (USA) Fellow – Otology & Neurotology (USA)",
      department: "ENT",
      experience: "25+",
      designation: "Consultant - ENT, Head & Neck and Neurotologist",
      awards: [
        { icon: "fas fa-medal", awardFor: "Distinguished Alumnus - PSG Institutions", awardDescription: "Honored by PSG Institutions for professional excellence.", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" },
        { icon: "fas fa-medal", awardFor: "Top 25 HealthTech Entrepreneurs of India (2023)", awardDescription: "Recognized by Indian Innovators Association.", cardColorClass: "award-card purple", iconColorClass: "award-icon purple" },
        { icon: "fas fa-medal", awardFor: "Healthcare Disruptor Award", awardDescription: "Awarded by Delhi Management Association for impactful healthcare innovation.", cardColorClass: "award-card green", iconColorClass: "award-icon green" },
        { icon: "fas fa-medal", awardFor: "National Innovation Mentor - NITI Aayog", awardDescription: "Mentor under Atal Innovation Mission for national innovation programs.", cardColorClass: "award-card yellow", iconColorClass: "award-icon yellow" },
        { icon: "fas fa-medal", awardFor: "Healthcare Innovation Recognition", awardDescription: "Acknowledged for advancing affordable and scalable medical solutions.", cardColorClass: "award-card soft-grey", iconColorClass: "award-icon soft-grey" },
        { icon: "fas fa-medal", awardFor: "Innovation Council Board Member", awardDescription: "Serving on innovation boards of leading institutions.", cardColorClass: "award-card apricot", iconColorClass: "award-icon apricot" },
        { icon: "fas fa-medal", awardFor: "Best ENT Specialist - NDTV", awardDescription: "Recognized by NDTV for excellence in ENT care.", cardColorClass: "award-card sand", iconColorClass: "award-icon sand" },
        { icon: "fas fa-medal", awardFor: "12+ IPRs & FDA-Cleared Devices", awardDescription: "Holds multiple IPRs, including FDA-approved medical devices.", cardColorClass: "award-card mauve", iconColorClass: "award-icon mauve" },
        { icon: "fas fa-medal", awardFor: "Cochlear Implant Program Initiator", awardDescription: "Started programs in day-care centers and government teaching hospitals.", cardColorClass: "award-card soft-purple", iconColorClass: "award-icon soft-purple" },

      ],
      professionalAffilications: [
        { image: "/img/affiliations/AOI.jpg", icon: "fas fa-user-md card-icon", paHeading: "AOI", paDescription: "Association of Otolaryngologists of India" },
        { image: "/img/affiliations/FHNO.jpg", icon: "fas fa-user-md card-icon", paHeading: "FHNO", paDescription: "Foundation for Head and Neck Oncology" },
        // { image: "/img/affiliations/AFF.png", icon: "fas fa-user-md card-icon", paHeading: "S  CNM", paDescription: "Society for Clinical Nutrition and Metabolism " }
      ],
      publications: [
        "Delayed Extrusion of Hydroxyapatite Following Transpetrosal Reconstruction - Krishnamoorthy K, Samy RN, Pensak ML. Laryngoscope. 2006 Oct;116(10):1817-1819.",
        "DuraSeal: A Novel Agent to Prevent CSF Leak - Presented at the Triological Society Meeting, Chicago, 2006.",
        "Use of a Novel Ultrasonic Surgical System for Decompression of the Facial Nerve - Triological Society Meeting, Chicago, 2006.",
        "Intraoperative Nerve Monitoring in Skull Base Surgery - Annual Academy of Otolaryngologists, Toronto, September 2006.",
        "Esthesioneuroblastoma - Review of 25 Cases - Thesis submitted to Roswell Park Cancer Institute, USA.",
        "Bilateral Choanal Atresia - A Rare Presentation - Presented at the Indian Pediatric Otolaryngology Conference, Cochin, 2000.",
        "Comprehensive Study of Penetrating Neck Injuries - Thesis submitted to Dr. M.G.R Medical University, Chennai.",
        "Aggressive Fibromatosis in Children - Grand Rounds, AIMS, Cochin.",

        `
            <b>Book Chapters</b><br>
            <p>I. Sarcoidosis - In Encyclopedia of Otolaryngology, Head and Neck Surgery - Springer Publications.</p>
            <p>II. Cancer of the Skull Base - In Essentials of Head and Neck Cancer - Byword Books.</p>
          `,
        `
          <b>Over the years, authored 100+ published features, including:</b>
          <ul>
          <li>Expert medical columns</li>
          <li>Educational clinical articles</li>
          <li>Editorial board contributions</li>
          <li>Papers in national & international medical platforms</li>
          </ul>
          `
      ]
    },
    {
      id: 20,
      name: "Dr. Mohan Ram. P",
      image: "/img/new-doctor-image/dr-mohan-ram-p.png",
      alt: "Dr. Mohan Ram. P | Laparoscopic General Surgeon at Vasavi Hospital Bangalore",
      areasOfExpertise: [
        { icon: "", expertise: "Hernia Repairs & GI Endoscopies" },
        { icon: "", expertise: "Laparoscopic & Open General Surgeries" },
        { icon: "", expertise: "Varicose Vein & Colorectal Surgeries" },
        { icon: "", expertise: "Laser Proctology (Piles, Fissures, Fistula)" },
        { icon: "", expertise: "Emergency Trauma & Critical Care Surgeries" },
      ],
      title: "Dr. Mohan Ram. P Consultant General Surgeon | Vasavi Hospitals Bangalore",
      description: "Consult Dr. Mohan Ram, an expert Laparoscopic & General Surgeon in Bangalore with 15+ years’ experience in laser proctology, hernia repairs, varicose veins and emergency surgeries.",
      briefProfile: "Dr. Mohan Ram is a General Surgeon, Laparoscopic Surgeon, Vascular Surgeon, Proctologist and a Laser Specialist in Bangalore. He practices at Pristyn Care Clinic, Bangalore. He completed MBBS from Raja Rajeshwari Medical College & Hospital, Bangalore, Karnataka in 2011, MS (General Surgery) from PES Institute of Medical Sciences and Research, Kuppam, Andhra Pradesh in 2017. Being an accomplished surgeon, and having over 14 Years of experience, Dr. Mohan Ram makes sure his patients get quality and timely treatment. Patient comfort, quick recovery and state of the art surgical practices are the corner stones at Pristyn Care.",
      qualification: "MBBS, MS (General Surgery), Fellowship - FIAGES, FALS (Advanced Laparoscopy)",
      department: "General Surgery",
      experience: "15+",
      designation: "Consultant Laparoscopic & General Surgeon | Laser Proctologist",
      awards: [
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card purple", iconColorClass: "award-icon purple" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: ".", cardColorClass: "award-card green", iconColorClass: "award-icon green" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card yellow", iconColorClass: "award-icon yellow" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card soft-grey", iconColorClass: "award-icon soft-grey" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card apricot", iconColorClass: "award-icon apricot" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card sand", iconColorClass: "award-icon sand" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card mauve", iconColorClass: "award-icon mauve" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card soft-purple", iconColorClass: "award-icon soft-purple" },
      ],
      professionalAffilications: [
        // { image: "/img/affiliations/AOI.jpg", icon: "fas fa-user-md card-icon", paHeading: "AOI", paDescription: "Association of Otolaryngologists of India" },
        // { image: "/img/affiliations/FHNO.jpg", icon: "fas fa-user-md card-icon", paHeading: "FHNO", paDescription: "Foundation for Head and Neck Oncology" },
        // { image: "/img/affiliations/AFF.png", icon: "fas fa-user-md card-icon", paHeading: "S  CNM", paDescription: "Society for Clinical Nutrition and Metabolism " }
      ],
      publications: [

      ]
    },
    {
      "id": 21,
      "name": "Dr. Revathi Natesan",
      "image": "/img/new-doctor-image/dr-revathi-natesan.png",
      "alt": "Dr. Revathi Natesan | Endodontist | Vasavi Hospitals Bangalore",
      "areasOfExpertise": [
        { "icon": "fas fa-tooth", "expertise": "Preventive Dentistry" },
        { "icon": "fas fa-teeth", "expertise": "Caries Management" },
        { "icon": "fas fa-tooth", "expertise": "Dental Fillings" },
        { "icon": "fas fa-teeth", "expertise": "Inlays" },
        { "icon": "fas fa-syringe", "expertise": "Pulpectomy" },
        { "icon": "fas fa-syringe", "expertise": "Pulpotomy" },
        { "icon": "fas fa-tooth", "expertise": "Root Canal Treatment" },
        { "icon": "fas fa-smile", "expertise": "Esthetic Dentistry" },
        { "icon": "fas fa-crown", "expertise": "Dental Crowns" },
        { "icon": "fas fa-bridge", "expertise": "Bridges" },
        { "icon": "fas fa-tooth", "expertise": "Post & Core" },
        { "icon": "fas fa-stethoscope", "expertise": "Minimally Invasive Dentistry" },
        { "icon": "fas fa-user-md", "expertise": "General Dentistry" }
      ],
      "title": "Dr. Revathi Natesan | Endodontist at Vasavi Hospitals",
      "description": "Dr. Revathi Natesan is an experienced Endodontist at Vasavi Hospitals with 15+ years of expertise in preventive dentistry, root canal treatment, and aesthetic dentistry. Specialist in minimally invasive dental procedures and comprehensive oral care.",
      "briefProfile": "An Endodontist that believes in the preventive, minimally invasive and integrated approaches for treating conditions of the oral cavity. Dedicated to providing comprehensive dental care with a focus on patient comfort and long-term oral health.",
      "qualification": "Masters in Conservative Dentistry and Endodontics",
      "department": "Dentistry",
      "experience": "15+",
      "designation": "Consultant Endodontist",
      "awards": [],
      "professionalAffilications": [],
      "publications": []
    },
    // {
    //   id: 20,
    //   name: "",
    //   image: "",
    //   alt: "",
    //   areasOfExpertise: [
    //     { icon: "", expertise: "" },
    //   ],
    //   title: "",
    //   description: "",
    //   briefProfile: "",
    //   qualification: "",
    //   department: "",
    //   experience: "",
    //   designation: "",
    //   awards: [
    //     { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" },
    //     { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card purple", iconColorClass: "award-icon purple" },
    //     { icon: "fas fa-medal", awardFor: "", awardDescription: ".", cardColorClass: "award-card green", iconColorClass: "award-icon green" },
    //     { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card yellow", iconColorClass: "award-icon yellow" },
    //     { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card soft-grey", iconColorClass: "award-icon soft-grey" },
    //     { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card apricot", iconColorClass: "award-icon apricot" },
    //     { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card sand", iconColorClass: "award-icon sand" },
    //     { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card mauve", iconColorClass: "award-icon mauve" },
    //     { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card soft-purple", iconColorClass: "award-icon soft-purple" },

    //   ],
    //   professionalAffilications: [
    //     // { image: "/img/affiliations/AOI.jpg", icon: "fas fa-user-md card-icon", paHeading: "AOI", paDescription: "Association of Otolaryngologists of India" },
    //     // { image: "/img/affiliations/FHNO.jpg", icon: "fas fa-user-md card-icon", paHeading: "FHNO", paDescription: "Foundation for Head and Neck Oncology" },
    //     // { image: "/img/affiliations/AFF.png", icon: "fas fa-user-md card-icon", paHeading: "S  CNM", paDescription: "Society for Clinical Nutrition and Metabolism " }
    //   ],
    //   publications: [

    //   ]
    // },
    {
      id: 22,
      name: "Dr. Ramesh T. S",
      image: "/img/new-doctor-image/dr-ramesh-t-s.png",
      alt: "Dr. Ramesh T. S | General Surgeon at Vasavi Hospital Bangalore",
      areasOfExpertise: [
        { icon: "", expertise: "Robotic & Minimally Invasive Surgery" },
        { icon: "", expertise: "General & Laparoscopic Surgery" },
        { icon: "", expertise: "Advanced Laparoscopic Procedures" },
        { icon: "", expertise: "Laparoscopic Gynecology Surgeries" },
        { icon: "", expertise: "Endoscopy (Upper GI & related procedures)" },
        { icon: "", expertise: "Gastrointestinal & Colorectal Surgeries" },
        { icon: "", expertise: "Hernia Repairs, Gallbladder & Appendectomy" },
        { icon: "", expertise: "Trauma and Emergency Surgeries" },
      ],
      title: "Dr. Ramesh T. S | General Surgeon at Vasavi Hospital Bangalore",
      description: "Consult Dr. Ramesh T. S, an accredited General & Minimally Invasive Surgeon (29+ years clinical, 25+ surgery) and Robotic Surgeon of Edinburgh at Vasavi Hospitals Bangalore.",
      briefProfile: "Dr. Ramesh T. S is a highly skilled and experienced Consultant in Minimal Access Surgery at Vasavi Hospitals. With a strong academic background and extensive surgical experience, he is recognized for his expertise in laparoscopic procedures involving the abdomen and non-cardiac thoracic region, with a special focus on laser anorectal surgeries. Dr. Ramesh completed his MBBS from Jagadguru Jayadeva Murugarajendra Medical College (JJMMC) in 1996, followed by DNB in General Surgery from the National Board of Examinations, New Delhi, in 2005. In the same year, he earned his MRCS (UK) from the University of Edinburgh. To further strengthen his proficiency in minimally invasive techniques, he has also obtained FMAS (Fellowship in Minimal Access Surgery) and FICS (Fellowship of the International College of Surgeons).",
      qualification: "MBBS, DNB (General Surgery), MRCS (Edinburgh, U.K.), FMAS,  FAIS",
      department: "Accredited Robotic Surgeon of Edinburgh",
      experience: "30+",
      designation: "Sr. Consultant - General & Minimally Invasive Surgery",
      awards: [
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card purple", iconColorClass: "award-icon purple" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: ".", cardColorClass: "award-card green", iconColorClass: "award-icon green" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card yellow", iconColorClass: "award-icon yellow" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card soft-grey", iconColorClass: "award-icon soft-grey" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card apricot", iconColorClass: "award-icon apricot" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card sand", iconColorClass: "award-icon sand" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card mauve", iconColorClass: "award-icon mauve" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card soft-purple", iconColorClass: "award-icon soft-purple" },
      ],
      professionalAffilications: [
        // { image: "/img/affiliations/AOI.jpg", icon: "fas fa-user-md card-icon", paHeading: "AOI", paDescription: "Association of Otolaryngologists of India" },
        // { image: "/img/affiliations/FHNO.jpg", icon: "fas fa-user-md card-icon", paHeading: "FHNO", paDescription: "Foundation for Head and Neck Oncology" },
        // { image: "/img/affiliations/AFF.png", icon: "fas fa-user-md card-icon", paHeading: "S  CNM", paDescription: "Society for Clinical Nutrition and Metabolism " }
      ],
      publications: [

      ]
    },
    {
      id: 23,
      name: "Dr. Yashaswi Srikakula",
      image: "/img/new-doctor-image/dr-yashasvi.png",
      alt: "Dr. Yashaswi Srikakula | Consultant ENT at Vasavi Hospital Bangalore",
      areasOfExpertise: [
        { icon: "", expertise: "Chronic Rhinosinusitis & Sinus Surgery (FESS)" },
        { icon: "", expertise: "Nasal Obstruction & Deviated Septum" },
        { icon: "", expertise: "Allergic Rhinitis & Seasonal Allergies" },
        { icon: "", expertise: "Immunotherapy for Allergies" },
        { icon: "", expertise: "Nasal Polyps Treatment" },
        { icon: "", expertise: "Autoimmune & Inflammatory Disorders (affecting ENT)" },
        { icon: "", expertise: "Allergy Testing & Management" },
        { icon: "", expertise: "Pediatric Rhinology & Allergy Care" },
      ],
      title: "Dr. Yashaswi Srikakula | Consultant ENT at Vasavi Hospital Bangalore",
      description: "Dr. Yashaswi is one of the best ENT specialist in Bangalore with 15 years of experience. She is an expert for treating children with ear, nose, and throat conditions.",
      briefProfile: "Dr. Yashaswi Srikakula is a highly experienced ENT specialist with over 15 years of expertise in treating complex ear, nose, and throat conditions. She completed her MBBS at JSS Medical College, Mysore, and her post-graduate training at KIMS, Bangalore. Dr. Yashaswi specializes in microscopic ear surgery, functional endoscopic sinus surgery (FESS) and allergy treatments. She has received advanced training in anterior skull base surgery at MCV ENT Trust Hospital, Coimbatore and in allergy and immunology at the Bangalore Allergy Centre. With a focus on personalized care, Dr. Yashaswi provides comprehensive treatment for a wide range of ENT and allergy-related conditions.",
      qualification: "MBBS, DLO, Fellowship in Rhinology and Anterior Skull Base",
      // department: "Accredited Robotic Surgeon of Edinburgh",
      experience: "15+",
      designation: "Consultant - ENT",
      awards: [
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card purple", iconColorClass: "award-icon purple" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: ".", cardColorClass: "award-card green", iconColorClass: "award-icon green" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card yellow", iconColorClass: "award-icon yellow" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card soft-grey", iconColorClass: "award-icon soft-grey" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card apricot", iconColorClass: "award-icon apricot" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card sand", iconColorClass: "award-icon sand" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card mauve", iconColorClass: "award-icon mauve" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card soft-purple", iconColorClass: "award-icon soft-purple" },
      ],
      professionalAffilications: [
        // { image: "/img/affiliations/Apollo_Hospitals_Logo.svg", icon: "fas fa-user-md card-icon", paHeading: "Apollo hospital", paDescription: "Apollo hospital" },
        // { image: "/img/affiliations/Trustwell-hospital.png", icon: "fas fa-user-md card-icon", paHeading: "Trustwell hospital", paDescription: "Trustwell hospital" },
        // { image: "/img/affiliations/AFF.png", icon: "fas fa-user-md card-icon", paHeading: "S  CNM", paDescription: "Society for Clinical Nutrition and Metabolism " }
      ],
      publications: [
        "All India journal publications"
      ]
    },

    {
      id: 24,
      name: "Dr. Rupendu T",
      image: "/img/new-doctor-image/dr-rupendu-t.png",
      alt: "Dr. Rupendu T | Senior Consultant Orthopaedic Surgeon at Vasavi Hospital Bangalore",
      areasOfExpertise: [
        { icon: "", expertise: "Joint Replacement Surgery (Hip, Knee)" },
        { icon: "", expertise: "ACL & PCL Reconstruction" },
        { icon: "", expertise: "Hip Resurfacing" },
        { icon: "", expertise: "Fracture Management" },
        { icon: "", expertise: "Spine Disorders" },
        { icon: "", expertise: "Arthritis Treatment" },
        { icon: "", expertise: "Sports Injuries" },
        { icon: "", expertise: "Shoulder Dislocation" },
        { icon: "", expertise: "Bone Tumors" },
        { icon: "", expertise: "Knee Braces & Pain Management" },
        { icon: "", expertise: "Nerve and Muscle Disorders" },
      ],
      title: "Dr. Rupendu T | Senior Consultant Orthopaedic Surgeon at Vasavi Hospital Bangalore",
      description: "Dr. Rupendu T is an experienced orthopaedic surgeon specializing in advanced bone, joint, and musculoskeletal treatments. His expertise includes fracture management, joint replacement surgeries, sports injuries, and minimally invasive orthopaedic procedures.",
      briefProfile: "Dr. Rupendu Thongavalen is a highly experienced Orthopedic Surgeon with over 45 years of overall experience, including 38 years as a specialist. He completed his MBBS from Bangalore Medical College and Research Institute in 1979 and his MS in Orthopedics from Bangalore University in 1987. Known for his expertise, compassion, and patient-centric approach, Dr. Thongavalen currently practices at Shanti Hospital and Research Clinic & Trauma & Joint Clinic in Jayanagar, Bangalore. He specializes in advanced orthopedic care, including joint replacements, spine surgeries, fracture management, arthritis treatment, and sports injury management. Patients can trust him for comprehensive and personalized orthopedic care, backed by decades of experience and a commitment to improving mobility and quality of life.",
      qualification: "MBBS, D.Ortho, MS(Ortho), Fellowship in Joint Replacement Surgery (Australia, Germany)",
      // department: "Accredited Robotic Surgeon of Edinburgh",
      experience: "45+",
      designation: "Sr. Consultant Orthopaedic Surgeon",
      awards: [
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card blue", iconColorClass: "award-icon blue" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card purple", iconColorClass: "award-icon purple" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: ".", cardColorClass: "award-card green", iconColorClass: "award-icon green" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card yellow", iconColorClass: "award-icon yellow" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card soft-grey", iconColorClass: "award-icon soft-grey" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card apricot", iconColorClass: "award-icon apricot" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card sand", iconColorClass: "award-icon sand" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card mauve", iconColorClass: "award-icon mauve" },
        // { icon: "fas fa-medal", awardFor: "", awardDescription: "", cardColorClass: "award-card soft-purple", iconColorClass: "award-icon soft-purple" },
      ],
      professionalAffilications: [
        { image: "/img/affiliations/KMC (2).jpg", icon: "fas fa-user-md card-icon", paHeading: "KMC", paDescription: "Karnataka Medical Council" },
        { image: "/img/affiliations/IMA.png", icon: "fas fa-user-md card-icon", paHeading: "IMA", paDescription: "Indian Medical Association" },
        // { image: "/img/affiliations/AFF.png", icon: "fas fa-user-md card-icon", paHeading: "S  CNM", paDescription: "Society for Clinical Nutrition and Metabolism " }
      ],
      publications: []
    },
  ];




  onDateChange(event: any) {
    const selectedDate = new Date(event);
    const formattedDate = this.formatDate(selectedDate);

    this.getAvailableSlots(this.filteredDoctor.id, formattedDate).subscribe({

      next: (availability) => {
        if (availability && availability.availableFrom) {
          const [start, end] = availability.availableFrom.split('-');
          const slotDuration = availability.slotDuration;
          this.availableTimes = this.generateTimeSlots(start, end, slotDuration);

          // Enable only if slots exist
          if (this.availableTimes.length > 0) {
            this.contactForm.get('time')?.enable();
          } else {
            this.contactForm.get('time')?.disable();
          }
        } else {
          this.availableTimes = [];
          this.contactForm.get('time')?.disable();
        }
      },
      error: () => {
        this.availableTimes = [];
        this.contactForm.get('time')?.disable();
      },
    });

    // Fetch unavailable dates using the doctor ID
    this.getUnavailableDates(this.filteredDoctor.id).subscribe({
      next: (unavailableDates) => {
        const unavailableDatesList = unavailableDates.map((entry) => {
          return this.formatDate(new Date(entry.date));
        });

        // Check if the selected date is in the unavailable dates list
        if (unavailableDatesList.includes(formattedDate)) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Doctor Unavailable',
            detail: 'The doctor is not available on the selected date. Please choose another date.',
          });
          this.availableTimes = []; // Clear available times since the doctor is unavailable
          return;
        }

        // If the doctor is available on the selected date, fetch booked slots
        this.getBookedSlots(this.filteredDoctor.id, formattedDate).subscribe({
          // next: (bookedSlots) => {

          //   this.filterAvailableTimes(bookedSlots, selectedDate);
          next: (bookedSlots: { time: string; complete: boolean }[]) => {
            // Define the function before using it
            const formatSlotIfNeeded = (slot: string): string => {
              // Determine if the slot is in 12-hour format
              return slot.includes('AM') || slot.includes('PM') ? slot : this.convertTo12HourFormat(slot);
            };

            // Filter out the incomplete slots and convert them if needed
            const nonCompleteBookedSlots = bookedSlots.filter(slot => !slot.complete).map(slot => slot.time);
            const formattedBookedSlots = nonCompleteBookedSlots.map((bookedSlot) => formatSlotIfNeeded(bookedSlot.split('-')[0]));

            // Use the formatted slots in your filter function
            this.filterAvailableTimes(formattedBookedSlots, selectedDate);
          },
          error: (error) => {
            console.error('Error fetching booked slots:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to fetch booked slots.',
            });
          },
        });
      },
      error: (error) => {
        console.error('Error fetching unavailable dates:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to fetch unavailable dates. Please try again later.',
        });
      },
    });
    const date = this.formatDate(selectedDate);
    this.getUnavailableSlots(this.filteredDoctor.id).subscribe({
      next: (unavailableSlots: { [date: string]: string[] }) => {
        this.unavailableSlotsForDate = unavailableSlots[date] || [];
        const formatSlotIfNeeded = (slot: string): string => {
          // Determine if the slot is already in 12-hour format
          return slot.includes('AM') || slot.includes('PM') ? slot : this.convertTo12HourFormat(slot);
        };
        // console.log('Unavailable slots:', unavailableSlots);
        this.unavailableSlotsForDate = this.unavailableSlotsForDate.map(slot => formatSlotIfNeeded(slot));

        console.log('Unavailable slots for date:', formattedDate, this.unavailableSlotsForDate);

      },
      error: (error) => {
        console.error('Error fetching unavailable slots:', error);
      },
    });
  }



  filterAvailableTimes(bookedSlots: string[], selectedDate: Date) {
    // let allTimes = this.filteredDoctor.time.split(',').map((time: string) => ({ name: time }));

    if (selectedDate.toDateString() === new Date().toDateString()) {
      console.log('availableTime', this.availableTimes)
      // Filter past times if the date is today
      this.availableTimes = this.filterPastTimes(this.availableTimes, selectedDate);
      console.log('availableTime', this.availableTimes)
    }
    // console.log('All times:', allTimes);
    // Filter out the booked times
    console.log('bookedSlots', bookedSlots)
    this.availableTimes = this.availableTimes.filter(
      (timeObj: any) => ((!bookedSlots.includes(timeObj.name) && !this.unavailableSlotsForDate.includes(timeObj.name)))
    );




    console.log('Available times:', this.availableTimes);

  }
  getBookedSlots(doctorId: number, date: string): Observable<{ time: string; complete: boolean }[]> {
    const bookedSlotsUrl = `${this.apiUrl}/doctors/booked-slots?doctorId=${doctorId}&date=${date}`;
    return this.http.get<{ time: string; complete: boolean }[]>(bookedSlotsUrl);
  }
  getUnavailableDates(doctorId: number): Observable<{ date: string }[]> {
    return this.http.get<{ date: string }[]>(`${this.apiUrl}/doctors/unavailable-dates?doctorId=${doctorId}`);
  }
  getUnavailableSlots(doctorId: number): Observable<{ [date: string]: string[] }> {
    return this.http.get<{ [date: string]: string[] }>(`${this.apiUrl}/doctors/${doctorId}/unavailableSlots`);
  }
  getAvailableSlots(doctorId: number, date: string): Observable<any> {
    const availabilityUrl = `${this.apiUrl}/doctors/availability?doctorId=${doctorId}&date=${date}`;
    return this.http.get<any>(availabilityUrl);
  }
  getDoctorById(id: number): Observable<{ availability: { day: string; id: number; availableFrom: string; slotDuration: number; updatedAt?: string }[] }> {
    return this.http.get<{ availability: { day: string; id: number; availableFrom: string; slotDuration: number; updatedAt?: string }[] }>(`${this.apiUrl}/doctors/${id}`);
  }

  generateTimeSlots(startTime: string, endTime: string, slotDuration: number): { name: string }[] {
    const slots: { name: string }[] = [];
    let current = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);

    while (current < end) {
      const slotStart = this.convertTo12HourFormat(current.toTimeString().substring(0, 5));
      slots.push({ name: slotStart }); // Only add the start time in 12-hour format
      current = new Date(current.getTime() + slotDuration * 60000);
    }
    console.log(slots)
    return slots;
  }

  convertTo12HourFormat(time: string): string {
    let [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, set to 12 (for 12 AM/PM)

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
  }
  filterPastTimes(times: { name: string }[], selectedDate: Date): { name: string }[] {
    const today = new Date();

    if (selectedDate.toDateString() === today.toDateString()) {
      const currentTimeInMinutes = today.getHours() * 60 + today.getMinutes();

      return times.filter(timeObj => {
        const [time, period] = timeObj.name.split(' ');
        let [startHour, startMinute] = time.split(':').map(Number);

        // Convert 12-hour time to 24-hour equivalent in minutes
        if (period === 'PM' && startHour !== 12) {
          startHour += 12;
        } else if (period === 'AM' && startHour === 12) {
          startHour = 0; // Handle 12 AM as midnight
        }

        const timeInMinutes = startHour * 60 + startMinute;

        return timeInMinutes > currentTimeInMinutes;
      });
    }

    return times;
  }


  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
  disabledDays: number[] = [0, 6]; // Indices of disabled days

  private updateDisabledDays(availability: Availability[]): void {
    // Map short day names to their respective indices
    const dayNameToIndex: Record<DayName, number> = {
      sun: 0,
      mon: 1,
      tue: 2,
      wed: 3,
      thu: 4,
      fri: 5,
      sat: 6,
    };

    // Convert available days to indices
    const availableDays = availability.map((avail) => dayNameToIndex[avail.day]);

    // Determine disabled days by excluding available days
    this.disabledDays = Object.values(dayNameToIndex).filter(
      (index) => !availableDays.includes(index)
    );


    console.log('Disabled Days (by index):', this.disabledDays);
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.clicked = false;
      const dateObj = this.contactForm.value.date_appointment;
      const appointmentDate = dateObj ? this.formatDate(new Date(dateObj)) : '';
      const firstName = this.contactForm.value.firstName;
      const lastName = this.contactForm.value.lastName;
      this.contactForm.value.contactNumber.startsWith('91') ? this.contactForm.value.contactNumber : '91' + this.contactForm.value.contactNumber;
      // Combine first and last names
      const patientName = `${firstName} ${lastName}`;
      const emailParams = {
        doctorName: this.filteredDoctor.name,
        doctorDesignation: this.filteredDoctor.designation,
        patientName: patientName,
        patientEmail: this.contactForm.value.email,
        patientContact: this.contactForm.value.contactNumber,
        appointmentTime: this.contactForm.value.time.name,
        appointmentDate: appointmentDate,
        message: this.contactForm.value.message
      };
      // const emailRequest = {
      //   to: 'patientservices@rashtrotthanahospital.com',
      //   // to: 'keerthanasaminathan0805@gmail.com',
      //   status: 'frontoffice',
      //   appointmentDetails: emailParams,
      // };

      const emailRequest = {
        to: ['digital@vasavihospitals.com', 'Vinay.d@vasavihospitals.com'], // Add any other recipients here
        whatsappNumber: ['918884466000'],
        // to: ['inventionmindsblr@gmail.com'],
        // whatsappNumber: ['919342287945'],
        status: 'frontoffice',
        appointmentDetails: emailParams
      };

      // Fetch the doctor ID by name
      this.http.post(`${this.apiUrl}/email/send-email`, emailRequest)
        .subscribe({
          next: (emailResponse) => {
            console.log('Email sent successfully:', emailResponse);
          },
          error: (emailError) => {
            console.error('Error sending email:', emailError);
          },
        });
      const appointmentData = {
        patientName: patientName,
        phoneNumber: this.contactForm.value.contactNumber,
        email: this.contactForm.value.email,
        doctorName: this.filteredDoctor.name,
        department: Array.isArray(this.filteredDoctor.department)
          ? this.filteredDoctor.department.join(', ')
          : this.filteredDoctor.department, // Convert array to string if necessary, // Assuming `speciality` is the department
        date: appointmentDate,
        time: this.contactForm.value.time.name,
        requestVia: 'Online',
        status: 'pending',
        smsSent: false,
        emailSent: false,
        doctorId: this.filteredDoctor.id,
      };
      // Reset the form and close dialog after the appointment has been successfully saved
      this.contactForm.reset();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Thank you, we have received your request and will get back to you shortly.',
      });
      this.router.navigate(['/thank-you'])
      this.http.post<any>(`${this.apiUrl}/appointments`, appointmentData)
        .subscribe({
          next: (appointmentResult) => {
            console.log('Appointment successfully created:', appointmentResult);
          },
          error: (appointmentError) => {
            console.error('Error creating appointment:', appointmentError);
          }
        });

      const appointmentDetails = {
        ...appointmentData,
        patientPhoneNumber: '91' + appointmentData.phoneNumber,
        status: 'received'
      }

    }





  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
  getExpertiseRows(expertiseList: any[]) {
    const half = Math.ceil(expertiseList.length / 2);
    const left = expertiseList.slice(0, half);
    const right = expertiseList.slice(half);
    const rows = [];

    for (let i = 0; i < Math.max(left.length, right.length); i++) {
      rows.push({ left: left[i], right: right[i] });
    }
    return rows;
  }
  scrollToForm(): void {
    if (this.formSection && this.formSection.nativeElement) {
      const element = this.formSection.nativeElement;
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}

