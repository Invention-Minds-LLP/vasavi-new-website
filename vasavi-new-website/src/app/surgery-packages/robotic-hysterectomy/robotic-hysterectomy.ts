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

  herniaTypes: HerniaType[] = [
    {
      cssClass: 'inguinal',
      badgeText: 'Most Common',
      title: 'Total Hysterectomy',
      description:
        'Removes the entire uterus along with the cervix. It’s the most common type, often done for fibroids, heavy bleeding, or uterine growths.',
      location: '4–6 weeks',
      hospitalStay: '1–2 days',
      recoverytime: 'Laparoscopic / Robotic',
    },
    {
      cssClass: 'femoral',
      badgeText: 'More Common in Women',
      title: 'Supracervical Hysterectomy',
      description:
        'Removes the upper part of the uterus but keeps the cervix intact. This is usually recommended when there’s no cervical disease and the goal is to preserve pelvic support.',
      location: '3–5 weeks',
      hospitalStay: '1 day',
      recoverytime: 'Laparoscopic / Abdominal',
    },
    {
      cssClass: 'umbilical',
      badgeText: 'Often in Adults',
      title: 'Hysterectomy with Oophorectomy',
      description:
        'Involves removing the uterus along with one or both ovaries. It’s done when there’s a risk of ovarian cysts, endometriosis, or hormone-related problems.',
      location: '4–6 weeks',
      hospitalStay: '1–2 days',
      recoverytime: 'Laparoscopic / Robotic',
    },
    {
      cssClass: 'ventral',
      badgeText: 'Abdominal Wall',
      title: 'Radical Hysterectomy',
      description:
        'Removes the uterus, cervix, part of the vagina, and surrounding tissues. This is usually advised for early-stage cervical or uterine cancer.',
      location: '6–8 weeks',
      hospitalStay: '2–3 days',
      recoverytime: 'Robotic / Open',
    },
    
  ];

  
  private popupInterval: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.openPopup();
    }, 5000);

    // this.popupInterval = setInterval(() => {
    //   this.openPopup();
    // }, 25000);
  }

  handleFormSubmit(data: { name: string; phoneNumber: string; otp: string }) {
    console.log('Form Data Received:', data);
    // ✅ You can send this data to backend or API here
    this.closePopup(); // close popup after success
  }
  
}
