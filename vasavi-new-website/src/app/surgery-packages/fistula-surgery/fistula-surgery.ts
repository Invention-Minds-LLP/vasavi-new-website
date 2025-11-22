import { Component } from '@angular/core';
import { CallbackForm } from '../../ads-pages/callback-form/callback-form';
import { CommonModule } from '@angular/common';
import { DoctorsCard } from "../../doctors-card/doctors-card";
import { PopUpFormAds } from '../../pop-up-form-ads/pop-up-form-ads';
import { Cta } from "../../cta/cta";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fistula-surgery',
  imports: [CallbackForm, CommonModule, DoctorsCard, Cta, PopUpFormAds],
  templateUrl: './fistula-surgery.html',
  styleUrl: './fistula-surgery.css'
})
export class FistulaSurgery {

  constructor(private title:Title, private meta:Meta){}

   doctorHeader : any = {
    title : "Meet Our Surgery Specialist",
    description : ""
  }

  doctors: any = [
    
    {
      name : "Dr. Mohan Ram. P",
      img : "/img/new-doctor-image/dummy-male.png",
      alt : "Best General Surgeon in Bangalore | Dr. Mohan Ram. P",
      experience : "15+",
      department : "General Surgery",
      slug:'/dr-mohan-ram-p'
    },
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

    this.title.setTitle('Fistula Surgery in Bangalore | Fistulectomy & Fistulotomy');
    this.meta.updateTag({name:'description', content:'Effective treatment for anal fistula with minimally invasive surgery. Quick recovery & low recurrence rates.'})
    

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
