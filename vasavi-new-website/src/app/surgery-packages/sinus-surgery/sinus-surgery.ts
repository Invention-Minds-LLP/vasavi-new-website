import { Component } from '@angular/core';
import { CallbackForm } from '../../ads-pages/callback-form/callback-form';
import { CommonModule } from '@angular/common';
import { DoctorsCard } from "../../doctors-card/doctors-card";
import { PopUpFormAds } from '../../pop-up-form-ads/pop-up-form-ads';
import { Cta } from "../../cta/cta";
import { Meta, Title } from '@angular/platform-browser';

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
  selector: 'app-sinus-surgery',
  imports: [CallbackForm, CommonModule, DoctorsCard, Cta, PopUpFormAds],
  templateUrl: './sinus-surgery.html',
  styleUrl: './sinus-surgery.css'
})
export class SinusSurgery {

  constructor(private title:Title, private meta:Meta){}


  doctorHeader : any = {
    title : "Meet Our Surgery Specialist",
    description : ""
  }

  doctors: any = [
    {
      name: "Dr. Yashaswi Srikakula",
      img: "img/new-doctor-image/dummy-female-sq.png",
      alt: "Best Gynecologic Oncologist and Robotic Hysterectomy Surgeon in Bangalore | Dr. Nisha Buchade",
      // experience: "15+",
      // department: "Gynecology, Robotic & Laparoscopic Surgery",
      qualification: "MBBS, DLO, Fellowship in Rhinology",
      // slug: "/dr-nisha-buchade"
    },
    {
      name: "Dr. Sphoorthy G Itigi",
      img: "img/Doctor-img/ENT/dr-spoorthi.png",
      alt: "Best Gynecologist and Laparoscopic Surgeon in Bangalore | Dr. Sowmya Sangmesh",
      experience: "8+",
      department: "Consultant - ENT",
      qualification: "MBBS, DLO, DNB (ENT)",
      slug: "/dr-sphoorthy-g-itigi"
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

    this.title.setTitle('Endoscopic Sinus Surgery in Bangalore | Vasavi Hospitals ENT');
    this.meta.updateTag({name:'description', content:'Relieve sinus infections & breathing issues with advanced endoscopic sinus surgery. Minimally invasive, faster healing.'})

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
