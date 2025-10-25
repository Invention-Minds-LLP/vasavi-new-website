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
  selector: 'app-prostate-removal',
  imports: [CallbackForm, CommonModule, DoctorsCard, Cta, PopUpFormAds],
  templateUrl: './prostate-removal.html',
  styleUrl: './prostate-removal.css'
})
export class ProstateRemoval {

  constructor(private title:Title, private meta:Meta){}

  ngOnInit():void{
    this.title.setTitle('TURP Prostate Removal Surgery in Bangalore | Vasavi Urology');
    this.meta.updateTag({name:'description', content:'Treat enlarged prostate safely with advanced TURP. No external cuts, quick recovery & insurance-covered packages.'})
  }

  doctorHeader : any = {
    title : "Meet Our Surgery Specialist",
    description : ""
  }
  isPopupOpen = false;

  openPopup(): void {
    this.isPopupOpen = true;
    document.body.style.overflow = 'hidden'; // disable background scroll
  }

  closePopup(): void {
    this.isPopupOpen = false;
    document.body.style.overflow = ''; // restore scroll
  }

  doctors: any = [
    {
      name : "Dr. Ramesh Hanumegowda",
      img : "img/new-doctor-image/dr-ramesh-hanumegowda-urologist-transparent.png",
      alt : "Best General Surgeon in Bangalore | Dr. Ramesh T S",
      experience : "15+",
      department : "Urology",
      slug:'dr-ramesh-hanumegowda'
    },
    {
      name : "Dr. Supreeth Nagaraju",
      img : "img/new-doctor-image/dummy-male-sq.png",
      alt : "Best General Surgeon in Bangalore | Dr. Mutharaju K. R",
      experience : "",
      department : "Urology",
      slug:''
    },
  ]


herniaTypes: HerniaType[] = [
  {
    cssClass: 'inguinal',
    badgeText: 'Classic Presentation',
    title: 'Recognizing Appendicitis',
    description: 'Abdominal Pain: Usually begins as mild discomfort around the navel and shifts to the lower right side of the abdomen. It often increases in intensity and is accompanied by tenderness and sensitivity in the area.',
    location: 'Location: Lower Right',
    hospitalStay: '',
    recoverytime: 'Recovery: Same Day Surgery'
  },
  {
    cssClass: 'umbilical',
    badgeText: 'General Signs',
    title: 'Common Symptoms of Appendicitis',
    description: `Watch for these general symptoms that may indicate appendix inflammation:<br />
    • Loss of appetite <br />
    • Nausea or vomiting <br />
    • Mild fever <br />
    • Diarrhea or constipation <br />
    • Abdominal bloating <br />
    • Pain during urination`,
    location: 'Urgency: Seek medical evaluation immediately for proper diagnosis',
    hospitalStay: 'Treatment: Laparoscopic or Robotic Appendectomy under expert surgical care.',
    recoverytime: 'Stay: 1-2 Days'
  },
  {
    cssClass: 'ventral',
    badgeText: 'High Risk Alert',
    title: 'Warning Signs (Burst Appendix)',
    description: `Severe Symptoms: <br />
    • A high fever <br />
    • Severe, sudden pain throughout the abdominal area`,
    location: 'Immediate Action: Visit the emergency department immediately.',
    hospitalStay: 'Treatment: Emergency Laparoscopic or Robotic Appendectomy, ensuring safe and thorough removal with minimal tissue trauma.',
    recoverytime: ''
  }
];

}
