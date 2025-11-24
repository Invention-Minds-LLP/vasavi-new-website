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
  selector: 'app-robotic-cholecystectomy',
  imports: [CallbackForm, CommonModule, DoctorsCard, Cta, PopUpFormAds],
  templateUrl: './robotic-cholecystectomy.component.html',
  styleUrl: './robotic-cholecystectomy.component.css'
})
export class RoboticCholecystectomyComponent {

  constructor(private title:Title, private meta:Meta){}

  ngOnInit():void{
    this.title.setTitle('Gallbladder Stone Removal Surgery in Bangalore | Vasavi Hospitals')
    this.meta.updateTag({name:'desctiption', content:'Safe laparoscopic & robotic gallbladder surgery for stone removal. Quick recovery & affordable all-inclusive packages.'})
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
      slug:'/dr-ramesh-t-s'
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
      cssClass: 'epigastric',
      badgeText: 'Intermittent Gallbladder Pain',
      title: 'Biliary Colic',
      description: `
        Caused by temporary blockage of bile flow due to <strong>gallstones</strong>. 
        Pain occurs in the upper right abdomen or under the ribs, often after fatty meals.
      `,
      location: 'Symptoms: Mild to moderate pain, nausea, and bloating.',
      hospitalStay: '',
      recoverytime: 'Treatment: Early diagnosis and elective <strong>Laparoscopic</strong> or <strong>Robotic Cholecystectomy</strong> prevent complications.'
    },
    {
      cssClass: 'inguinal',
      badgeText: 'Severe Inflammation',
      title: 'Acute Cholecystitis',
      description: `
        Caused by persistent blockage of the <strong>gallbladder duct</strong>. 
        This condition can quickly worsen without timely medical care.
      `,
      location: 'Symptoms: Severe pain, fever, vomiting, and tenderness in the upper abdomen.',
      hospitalStay: 'Requires urgent <strong>gallbladder surgery</strong> to prevent rupture or infection spread.',
      recoverytime: ''
    },
    {
      cssClass: 'umbilical',
      badgeText: 'Repeated Inflammation',
      title: 'Chronic Cholecystitis',
      description: `
        Recurrent gallbladder attacks over time can lead to thickening or scarring of the gallbladder wall.
        Often linked with long-term <strong>gallstone disease</strong>.
      `,
      location: 'Symptoms: Frequent mild pain, indigestion, and nausea after meals.',
      hospitalStay: 'Treatment: Planned <strong>Laparoscopic</strong> or <strong>Robotic Cholecystectomy</strong> provides permanent relief.',
      recoverytime: ''
    },
    {
      cssClass: 'ventral',
      badgeText: 'Severe Stages',
      title: 'Complicated Gallbladder Disease',
      description: `
        When untreated, gallstones can cause:
        <ul>
          <li><strong>Gallbladder Gangrene or Perforation</strong></li>
          <li><strong>Bile Duct Obstruction or Jaundice</strong></li>
          <li><strong>Pancreatitis</strong> (inflammation of the pancreas)</li>
        </ul>
      `,
      location: '',
      hospitalStay: '',
      recoverytime: ''
    }
  ];
  
}
