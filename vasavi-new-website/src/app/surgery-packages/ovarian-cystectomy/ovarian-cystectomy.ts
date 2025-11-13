import { Component } from '@angular/core';
import { CallbackForm } from '../../ads-pages/callback-form/callback-form';
import { CommonModule } from '@angular/common';
import { DoctorsCard } from "../../doctors-card/doctors-card";
import { PopUpFormAds } from '../../pop-up-form-ads/pop-up-form-ads';
import { Cta } from "../../cta/cta";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ovarian-cystectomy',
  imports: [CallbackForm, CommonModule, DoctorsCard, Cta, PopUpFormAds],
  templateUrl: './ovarian-cystectomy.html',
  styleUrl: './ovarian-cystectomy.css'
})
export class OvarianCystectomy {

  constructor(private title:Title, private meta:Meta){}

  doctorHeader : any = {
    title : "Meet Our Surgery Specialist",
    description : ""
  }

  doctors: any = [
     {
      name: "Dr.Nisha Buchade",
      img: "img/go/dr-nisha-buchade-sq.png",
      alt: "Best Gynecologic Oncologist and Robotic Hysterectomy Surgeon in Bangalore | Dr. Nisha Buchade",
      experience: "15+",
      // department: "Gynecology, Robotic & Laparoscopic Surgery",
      qualification: "MBBS, MS (OBG), Fellowship in gynec-oncology, Fellowship in Advanced infertility,  Fellowship Minimal Access Surgery (Laparoscopic and Robotic Surgery)",
      slug: "/dr-nisha-buchade"
    },
    {
      name: "Dr. Sowmya Sangmesh",
      img: "img/new-doctor-image/dr-sowmya-sangmesh-sq.png",
      alt: "Best Gynecologist and Laparoscopic Surgeon in Bangalore | Dr. Sowmya Sangmesh",
      experience: "14+",
      // department: "Consultant - ENT",
      qualification: "MBBS, MS (OBG), Fellowship Minimal Access Surgery, Advanced Diploma Repoductive Medicine",
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

  
  
  private popupInterval: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.openPopup();
    }, 5000);

    this.title.setTitle('Ovarian Cyst Removal Surgery in Bangalore | Laparoscopic Care');
    this.meta.updateTag({name:'description', content:'Minimally invasive ovarian cyst removal preserving fertility. Expert gynecologists, affordable packages & fast recovery.'})

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
