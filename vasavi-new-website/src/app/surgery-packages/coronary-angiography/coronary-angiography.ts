import { Component } from '@angular/core';
import { CallbackForm } from '../../ads-pages/callback-form/callback-form';
import { CommonModule } from '@angular/common';
import { DoctorsCard } from "../../doctors-card/doctors-card";
import { PopUpFormAds } from '../../pop-up-form-ads/pop-up-form-ads';
import { Cta } from "../../cta/cta";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-coronary-angiography',
  imports: [CallbackForm, CommonModule, DoctorsCard, Cta, PopUpFormAds],
  templateUrl: './coronary-angiography.html',
  styleUrl: './coronary-angiography.css'
})
export class CoronaryAngiography {

  constructor(private title:Title, private meta:Meta){}

  doctorHeader : any = {
    title : "Meet Our Surgery Specialist",
    description : ""
  }

  doctors: any = [
    {
      name: "Dr. Krishna Kumar B. R",
      img: "img/new-doctor-image/dummy-male-sq.png",
      alt: "Best Gynecologic Oncologist and Robotic Hysterectomy Surgeon in Bangalore | Dr. Nisha Buchade",
      // experience: "15+",
      // department: "Gynecology, Robotic & Laparoscopic Surgery",
      qualification: "MBBS, PGD Cardiology",
      // slug: "/dr-nisha-buchade"
    },
    {
      name: "Dr. Girish Navasundi",
      img: "img/new-doctor-image/dr-girish-b-navasundi.png",
      alt: "Best Gynecologist and Laparoscopic Surgeon in Bangalore | Dr. Sowmya Sangmesh",
      // experience: "14+",
      // department: "Consultant - ENT",
      qualification: "MBBS MD DNB",
      // slug: "/dr-sowmya-sangmesh"
    },
    {
      name: "Dr. Praneeth",
      img: "img/new-doctor-image/dr-praneeth-s.png",
      alt: "Best Gynecologic Oncologist and Robotic Hysterectomy Surgeon in Bangalore | Dr. Nisha Buchade",
      // experience: "15+",
      // department: "Gynecology, Robotic & Laparoscopic Surgery",
      qualification: "MBBS MD DM",
      // slug: "/dr-nisha-buchade"
    },
    {
      name: "Dr. Balaraj",
      img: "img/new-doctor-image/dr-balaraj.png",
      alt: "Best Gynecologist and Laparoscopic Surgeon in Bangalore | Dr. Sowmya Sangmesh",
      // experience: "14+",
      // department: "Consultant - ENT",
      qualification: "MBBS MD DNB DM Cardiology",
      // slug: "/dr-sowmya-sangmesh"
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

    this.title.setTitle('Coronary Angiography in Bangalore | Heart Blockage Test');
    this.meta.updateTag({name:'description', content:'Accurate coronary angiography to detect heart blockages early. Trusted cardiologists & advanced cardiac lab at Vasavi Hospitals.'})

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
