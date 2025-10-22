import { Component } from '@angular/core';
import { CallbackForm } from '../../ads-pages/callback-form/callback-form';
import { CommonModule } from '@angular/common';
import { DoctorsCard } from "../../doctors-card/doctors-card";
import { PopUpFormAds } from '../../pop-up-form-ads/pop-up-form-ads';
import { Cta } from "../../cta/cta";

interface HerniaType {
  cssClass: string;
  badgeText: string;
  title: string;
  description: string;
  tag?: string;
  location? : string;
  recoverytime? : string;
  hospitalStay?: string
}
@Component({
  selector: 'app-robotic-hysterectomy',
  imports: [CallbackForm, CommonModule, DoctorsCard, Cta, PopUpFormAds],
  templateUrl: './robotic-hysterectomy.html',
  styleUrl: './robotic-hysterectomy.css'
})
export class RoboticHysterectomy {

  doctorHeader : any = {
    title : "Meet Our Surgery Specialist",
    description : ""
  }

  doctors: any = [
    {
      name: "Dr. Nisha Buchade",
      img: "img/go/dr-nisha-buchade-sq.png",
      alt: "Best Gynecologic Oncologist and Robotic Hysterectomy Surgeon in Bangalore | Dr. Nisha Buchade",
      experience: "15+",
      department: "Gynecology, Robotic & Laparoscopic Surgery",
      qualification: "MBBS, MS, Fellowship in Gynec-Oncology, Fellowship in Advanced Infertility",
      slug: "/dr-nisha-buchade"
    },
    {
      name: "Dr. Sowmya Sangmesh",
      img: "img/new-doctor-image/dr-sowmya-sangmesh-sq.png",
      alt: "Best Gynecologist and Laparoscopic Surgeon in Bangalore | Dr. Sowmya Sangmesh",
      experience: "14+",
      department: "Obstetrics & Gynecology, Minimal Access & Reproductive Surgery",
      qualification: "MBBS, MS (OBG), Fellowship in Minimal Access Surgery, Advanced Diploma in Reproductive Medicine",
      slug: "/dr-sowmya-sangmesh"
    }
  ];

  isPopupOpen = false;

  openPopup(): void {
    this.isPopupOpen = true;
    document.body.style.overflow = 'hidden'; // disable background scroll
  }

  closePopup(): void {
    this.isPopupOpen = false;
    document.body.style.overflow = ''; // restore scroll
  }

  hysterectomyConditions: any = [
    {
      cssClass: 'common',
      badgeText: "Common",
      title: "Uterine Fibroids (Myomas)",
      description: "Benign tumors in the uterus that can cause <strong>heavy menstrual bleeding</strong>, <strong>pelvic pressure</strong>, and <strong>abdominal swelling</strong>. They’re one of the leading reasons for <strong>Hysterectomy Surgery</strong> in women aged 30–50.",
      symptoms: "<strong>Symptoms:</strong> Heavy periods, pelvic pain, urinary frequency, bloating.",
      recommendedTreatment: "<strong>Treatment:</strong> Robotic or Laparoscopic Hysterectomy for large or multiple fibroids.",
      recoveryTime: "<strong>Recovery:</strong> 1–2 weeks with minimal pain."
    },
    {
      cssClass: 'severe',
      badgeText: "Severe",
      title: "Endometriosis",
      description: "<strong>Endometriosis</strong> occurs when uterine tissue grows outside the uterus, leading to chronic pelvic pain and infertility. When severe and unresponsive to medication, <strong>Robotic Hysterectomy</strong> offers lasting relief.",
      symptoms: "<strong>Symptoms:</strong> Pelvic pain, painful periods, pain during intercourse, fatigue.",
      recommendedTreatment: "<strong>Treatment:</strong> Robotic Hysterectomy with precision excision of lesions.",
      recoveryTime: "<strong>Recovery:</strong> 1–2 weeks post-surgery."
    },
    {
      cssClass: 'chronic',
      badgeText: "Chronic",
      title: "Adenomyosis",
      description: "A condition where uterine tissue grows into the muscular wall of the uterus, causing <strong>enlargement and pain</strong>. <strong>Minimally invasive hysterectomy</strong> is the most effective treatment for advanced cases.",
      symptoms: "<strong>Symptoms:</strong> Heavy menstrual bleeding, pelvic cramps, bloating.",
      recommendedTreatment: "<strong>Treatment:</strong> Laparoscopic or Robotic Hysterectomy for complete relief.",
      recoveryTime: "<strong>Recovery:</strong> Back to routine in 7–10 days."
    },
    {
      cssClass: 'complex',
      badgeText: "Complex",
      title: "Uterine Prolapse",
      description: "<strong>Uterine prolapse</strong> happens when pelvic muscles weaken and the uterus slips into the vaginal canal. Surgery restores support and prevents discomfort.",
      symptoms: "<strong>Symptoms:</strong> Feeling of pelvic heaviness, difficulty urinating, tissue bulge from vagina.",
      recommendedTreatment: "<strong>Treatment:</strong> Robotic Hysterectomy with pelvic floor repair.",
      recoveryTime: "<strong>Recovery:</strong> 10–14 days with supportive physiotherapy."
    },
    {
      cssClass: 'risk',
      badgeText: "Risk",
      title: "Abnormal Uterine Bleeding (AUB)",
      description: "When heavy or irregular menstrual bleeding persists despite hormonal treatment, a <strong>Hysterectomy</strong> can permanently resolve the issue and restore quality of life.",
      symptoms: "<strong>Symptoms:</strong> Heavy or prolonged bleeding, anemia, fatigue.",
      recommendedTreatment: "<strong>Treatment:</strong> Laparoscopic Hysterectomy for safe and complete removal.",
      recoveryTime: "<strong>Recovery:</strong> Usually within 1 week."
    }
  ];
  
}
