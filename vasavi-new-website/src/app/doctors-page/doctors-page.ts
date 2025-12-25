import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { Animation } from "../animation/animation";



@Component({
  selector: 'app-doctors-page',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, Animation],
  templateUrl: './doctors-page.html',
  styleUrl: './doctors-page.css'
})
export class DoctorsPage {
  @ViewChild('deptScroll', { static: false })
  deptScroll!: ElementRef<HTMLDivElement>;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }
  searchText: string = "";
  selectedDepartment: string = "";
  activeDoctorIndex: number | null = null;

  appointmentForm!: FormGroup;

  deptOpen: boolean = false;

  filterDoctors() {
    return this.doctors.filter(d => {

      const searchMatch =
        this.searchText.trim() === "" ||
        d.name.toLowerCase().includes(this.searchText.toLowerCase());

      const depMatch =
        this.selectedDepartment === "" ||
        d.department === this.selectedDepartment;

      return searchMatch && depMatch;
    });
  }

  openForm(index: number) {
    this.activeDoctorIndex = index;
  }

  clearAll() {
    this.searchText = "";
    this.selectedDepartment = "";
    this.filterDoctors()
  }
  departments = [
    // 🔹 Core / High-traffic departments (first row feel)
    { name: 'General Surgery (MIS)', icon: '/img/departments/general-surgery.png' },
    { name: 'Obstetrics & Gynecology', icon: '/img/departments/gynecology.png' },
    { name: 'Cardiology', icon: '/img/departments/cardiology.png' },
    { name: 'Orthopedics', icon: '/img/departments/orthopedics.png' },
    { name: 'Urology', icon: '/img/departments/urology.png' },

    // 🔹 Medical specialties
    { name: 'Nephrology', icon: '/img/departments/nephrology.png' },
    { name: 'Neurology', icon: '/img/departments/neurology.png' },
    { name: 'Pediatrics & Neonatology', icon: '/img/departments/pediatrics.png' },
    { name: 'Endocrinology', icon: '/img/departments/endocrinology.png' },
    { name: 'Pulmonology', icon: '/img/departments/pulmonology.png' },
    { name: 'Gastroenterology', icon: '/img/departments/gastroenterology.png' },
    { name: 'Dermatology', icon: '/img/departments/dermatology.png' },

    // 🔹 Surgical & procedural

    { name: 'Neurosurgery', icon: '/img/departments/neurosurgery.png' },
    { name: 'Bariatric Surgery', icon: '/img/departments/bariatric.png' },
    { name: 'Anesthesiology', icon: '/img/departments/anesthesiology.png' },

    // 🔹 Diagnostics & care
    { name: 'Critical Care', icon: '/img/departments/critical-care.png' },
    { name: 'Emergency Medicine', icon: '/img/departments/emergency.png' },
    { name: 'General Medicine', icon: '/img/departments/general-medicine.png' },

    // 🔹 Allied health
    { name: 'ENT', icon: '/img/departments/ent.png' },
    { name: 'Ophthalmology', icon: '/img/departments/ophthalmology.png' },
    { name: 'Dentistry', icon: '/img/departments/dentistry.png' },
    { name: 'Nutrition & Dietetics', icon: '/img/departments/nutrition.png' }
  ];



  scrollLeft() {
    this.deptScroll.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.deptScroll.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  }

  toggleDept() {
    this.deptOpen = !this.deptOpen;
  }

  selectDept(dept: string) {
    this.selectedDepartment = dept;
    this.deptOpen = false;
  }


  goToDoctorForm(slug: string) {
    this.router.navigate(['/doctors' + slug], {
      queryParams: { book: 'true' }
    });
  }





  doctors = [
    {
      name: "Dr. Ashok M. V",
      img: "/img/doctor-page/dr-ashok-m-v.png",
      alt: "Dr. Ashok MV | Pediatrician & Neonatologist | Vasavi Hospitals Bangalore",
      experience: "15+",
      qualification: "MBBS, MD (Pediatrics), Fellowship in Neonatology",
      department: "Pediatrics & Neonatology",
      consultant: "Consultant - Neonatologist",
      slug: "/dr-ashok-m-v"
    },
    {
      name: "Dr. Sreenidhi H. C",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Sreenidhi Chandrashekar | Nephrologist | Vasavi Hospitals Bangalore",
      experience: "3+",
      qualification: "MBBS, MD (General Medicine), DM (Nephrology)",
      department: "Nephrology",
      consultant: "Consultant - Nephrologist",
      slug: "/dr-sreenidhi-h-c"
    },
    {
      name: "Dr. Nisha Buchade",
      img: "/img/doctor-page/dr-nisha-buchade.png",
      alt: "Dr. Nisha Buchade | Gynecologist | Vasavi Hospitals Bangalore",
      experience: "15+",
      qualification: "MBBS, MS (OBG), Fellowship in Gynecological Oncology, Fellowship in Advanced Infertility",
      department: "Gynecology",
      consultant: "Consultant - Gynecologist",
      slug: "/dr-nisha-buchade"
    },
    {
      name: "Dr. Venkatesh Rathod R",
      img: "/img/doctor-page/dr-venkatesh-rathod-r.png",
      alt: "Dr. Venkatesh Rathod | Orthopedic Surgeon | Vasavi Hospitals Bangalore",
      experience: "16+",
      qualification: "MBBS, D.Ortho, DNB (Orthopedics)",
      department: "Orthopedics",
      consultant: "Consultant - Orthopedic Surgeon",
      slug: "/dr-venkatesh-rathod-r"
    },
    {
      name: "Dr. Vinay Hosadurga",
      img: "/img/doctor-page/dr-vinay-hosadurga.png",
      alt: "Dr. Vinay Hosadurga | General Physician | Vasavi Hospitals Bangalore",
      experience: "14+",
      qualification: "MBBS, MD (General Medicine)",
      department: "General Medicine",
      consultant: "Consultant - Physician",
      slug: "/dr-vinay-hosadurga"
    },
    {
      name: "Dr. Sneha Sundaram",
      img: "/img/new-doctor-image/dummy-female.png",
      alt: "Dr. Sneha Sundaram | Endodontist | Vasavi Hospitals Bangalore",
      experience: "13+",
      qualification: "BDS, MDS",
      department: "Dentistry",
      consultant: "Consultant - Endodontist",
      slug: "/dr-sneha-sundaram"
    },
    {
      name: "Dr. Abhiram R",
      img: "/img/new-doctor-image/dr-abhiram-r.png",
      alt: "Dr. Abhiram R | Dermatologist | Vasavi Hospitals Bangalore",
      experience: "10+",
      qualification: "MBBS, MD (Dermatology), FRGUHS (Dermatosurgery)",
      department: "Dermatology",
      consultant: "Consultant - Dermatologist",
      slug: "/dr-abhiram-r"
    },
    {
      name: "Dr. Sunil R",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Sunil R | Nephrologist | Vasavi Hospitals Bangalore",
      experience: "15+",
      qualification: "MBBS, MD (General Medicine), DM (Nephrology)",
      department: "Nephrology",
      consultant: "Consultant - Nephrologist",
      slug: "/dr-sunil-r"
    },
    {
      name: "Dr. Pratham R Bysani",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Pratham R Bysani | Neurosurgeon | Vasavi Hospitals Bangalore",
      experience: "10+",
      qualification: "MBBS, MS (General Surgery), MCh (Neurosurgery), FRCS (Edinburgh)",
      department: "Neurosurgery",
      consultant: "Consultant - Neurosurgeon",
      slug: "/dr-pratham-r-bysani"
    },
    {
      name: "Dr. Karthik K",
      img: "/img/doctor-page/dr-karthik-k.png",
      alt: "Dr. Karthik K | Anesthesiologist | Vasavi Hospitals Bangalore",
      experience: "21+",
      qualification: "MBBS, DA, DNB (Anaesthesiology)",
      department: "Anesthesiology",
      consultant: "Consultant - Anesthesiologist",
      slug: "/dr-karthik-k"
    },
    {
      name: "Dr. Pradeep A Dongare",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Pradeep A Dongare | Anesthesiologist | Vasavi Hospitals Bangalore",
      experience: "12+",
      qualification: "DA, DNB (Anaesthesiology)",
      department: "Anesthesiology",
      consultant: "Consultant - Anesthesiologist",
      slug: "/dr-pradeep-a-dongare"
    },
    {
      name: "Dr. Abhirami Ravindran",
      img: "/img/new-doctor-image/dummy-female.png",
      alt: "Dr. Abhirami Ravindran | Anesthesiologist | Vasavi Hospitals Bangalore",
      experience: "13+",
      qualification: "MBBS, DNB (Anaesthesiology)",
      department: "Anesthesiology",
      consultant: "Consultant - Anesthesiologist",
      slug: "/dr-abhirami-ravindran"
    },
    {
      name: "Dr. Raveendra Reddy",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Raveendra Reddy | Critical Care Specialist | Vasavi Hospitals Bangalore",
      experience: "16+",
      qualification: "MBBS, FcARCSI, FCCS, Fellowship in Critical Care",
      department: "Critical Care",
      consultant: "Consultant - Critical Care Specialist",
      slug: "/dr-raveendra-reddy"
    },
    {
      name: "Dr. Sudeep Putta Manohar",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Sudeep Putta Manohar | Endocrinologist | Vasavi Hospitals Bangalore",
      experience: "15+",
      qualification: "MBBS, MRCP (UK), MRCP (Endocrinology), CCT",
      department: "Endocrinology",
      consultant: "Consultant - Endocrinologist",
      slug: "/dr-sudeep-putta-manohar"
    },
    {
      name: "Dr. Sowmya Sangmesh",
      img: "/img/new-doctor-image/dr-sowmya-sangmesh.png",
      alt: "Dr. Sowmya Sangmesh | Gynecologist | Vasavi Hospitals Bangalore",
      experience: "14+",
      qualification: "MBBS, MS (OBG), Fellowship in Minimal Access Surgery",
      department: "Gynecology",
      consultant: "Consultant - Gynecologist",
      slug: "/dr-sowmya-sangmesh"
    },
    {
      name: "Dr. Madhu B Jagalasar",
      img: "/img/new-doctor-image/dummy-female.png",
      alt: "Dr. Madhu B Jagalasar | Neonatologist | Vasavi Hospitals Bangalore",
      experience: "13+",
      qualification: "MD (Pediatrics), DM (Neonatology), MBA (HCM)",
      department: "Neonatology",
      consultant: "Consultant - Neonatologist",
      slug: "/dr-madhu-b-jagalasar"
    },
    {
      name: "Dr. Mutharaju K. R",
      img: "/img/new-doctor-image/dr-mutharaju-k-r.png",
      alt: "Dr. Mutharaju K R | Bariatric Surgeon | Vasavi Hospitals Bangalore",
      experience: "23+",
      qualification: "MBBS, MS, FMBS (Bariatric & Metabolic Surgery)",
      department: "Bariatric Surgery",
      consultant: "Senior Consultant - Bariatric Surgeon",
      slug: "/dr-mutharaju-k-r"
    },
    {
      name: "Dr. Gargi Das",
      img: "/img/new-doctor-image/Dr Gargi Das.png",
      alt: "Dr Gargi Das | Ophthalmologist | Vasavi Hospitals Bangalore",
      experience: "6+",
      qualification: "MBBS, MD, FPRS",
      department: "Ophthalmology",
      consultant: "Consultant - Ophthalmologist",
      slug: "/dr-gargi-das"
    },
    {
      name: "Dr. Sphoorthy G Itigi",
      img: "/img/new-doctor-image/Dr Sphoorthy G Itigi.png",
      alt: "Dr. Sphoorthy G Itigi | ENT Surgeon | Vasavi Hospitals Bangalore",
      experience: "8+",
      qualification: "MBBS, DLO, DNB (ENT)",
      department: "ENT",
      consultant: "Consultant - ENT Surgeon",
      slug: "/dr-sphoorthy-g-itigi"
    },
    {
      name: "Dr. Naneboena Sunitha",
      img: "/img/new-doctor-image/dr-naneboena-sunitha-sq.png",
      alt: "Dr Naneboena Sunitha | Nutritionist & Dietitian | Vasavi Hospitals Bangalore",
      experience: "26+",
      qualification: "PhD (Food & Nutrition), MSc, MBA",
      department: "Nutrition & Dietetics",
      consultant: "Consultant - Nutritionist & Dietitian",
      slug: "/dr-naneboena-sunitha"
    },
    {
      name: "Dr. Revathi Natesan",
      img: "/img/new-doctor-image/dr-revathi-natesan.png",
      alt: "Dr. Revathi Natesan | Endodontist | Vasavi Hospitals Bangalore",
      experience: "15+",
      qualification: "MDS (Conservative Dentistry & Endodontics)",
      department: "Dentistry",
      consultant: "Consultant - Endodontist",
      slug: "/dr-revathi-natesan"
    },
    {
      name: "Dr. Yashaswi Srikakula",
      img: "/img/new-doctor-image/dr-yashasvi-sq.png",
      alt: "Dr. Yashaswi Srikakula | ENT Specialist | Vasavi Hospitals Bangalore",
      experience: "15+",
      qualification: "MBBS, DLO, Fellowship in Rhinology & Anterior Skull Base",
      department: "ENT",
      consultant: "Consultant - ENT Surgeon",
      slug: "/dr-yashaswi-srikakula"
    },
    {
      name: "Dr. Krishna Kumar B R",
      img: "/img/new-doctor-image/dr-krishna-kumar-b-r-sq.png",
      alt: "Dr. Krishna Kumar B R | Cardiologist | Vasavi Hospitals Bangalore",
      experience: "17+",
      qualification: "MBBS, Diploma in Clinical Cardiology",
      department: "Cardiology",
      consultant: "Consultant - Cardiologist",
      slug: "/dr-krishna-kumar-b-r"
    },
    {
      name: "Dr. Sruthi Bhaskaran",
      img: "/img/new-doctor-image/dr-sruthi-bhaskaran-sq.png",
      alt: "Dr. Sruthi Bhaskaran | Emergency Medicine Specialist | Vasavi Hospitals Bangalore",
      experience: "10+",
      qualification: "MBBS, DNB (Emergency Medicine), FICM, CPCDM",
      department: "Emergency Medicine",
      consultant: "Consultant - Emergency Medicine Specialist",
      slug: "/dr-sruthi-bhaskaran"
    },
    {
      name: "Dr. Manjunath P H",
      img: "/img/new-doctor-image/dr-manjunath-p-h-sq.png",
      alt: "Dr. Manjunath P H | Pulmonologist | Vasavi Hospitals Bangalore",
      experience: "8+",
      qualification: "MBBS, DTCD, DNB",
      department: "Pulmonology",
      consultant: "Consultant - Pulmonologist",
      slug: "/dr-manjunath-p-h"
    },
    {
      name: "Dr. Akshay Masur",
      img: "img/new-doctor-image/dr-akshay-masur.png",
      alt: "Dr. Akshay Masur | Internal Medicine & Endoscopy Specialist | Vasavi Hospitals Bangalore",
      experience: "9+",
      qualification: "MBBS, MD (General Medicine), DNB, Fellowship in GI Endoscopy",
      department: "Internal Medicine",
      consultant: "Consultant - Internal Medicine & Endoscopy Specialist",
      slug: "/dr-akshay-masur"
    }
  ];



}





