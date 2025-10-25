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
  selector: 'app-haemorrhoidectomy',
  imports: [CallbackForm, CommonModule, DoctorsCard, Cta, PopUpFormAds],
  templateUrl: './haemorrhoidectomy.html',
  styleUrl: './haemorrhoidectomy.css'
})
export class Haemorrhoidectomy {

  constructor(private title:Title, private meta:Meta){}

  ngOnInit():void{
    this.title.setTitle('Laser & Conventional Piles Surgery in Bangalore | Vasavi')
    this.meta.updateTag({name:'description', content:'Pain-free piles surgery using laser & advanced techniques. Affordable, safe & covered by cashless insurance.'})
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
      name : "Dr. Ramesh T S",
      img : "img/Doctor-img/MINIMALLY INVASIVE SURGERY/Dr.Ramesh T S.jpg",
      alt : "Best General Surgeon in Bangalore | Dr. Ramesh T S",
      experience : "29+",
      department : "Robotic & Minimally Invasive Surgery",
      slug:''
    },
    {
      name : "Dr. Mutharaju K. R",
      img : "img/new-doctor-image/dr-mutharaju-k-r-sq.png",
      alt : "Best General Surgeon in Bangalore | Dr. Mutharaju K. R",
      experience : "23+",
      department : "Robotic & Minimally Invasive Surgery",
      slug:'/dr-mutharaju-k-r'
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
