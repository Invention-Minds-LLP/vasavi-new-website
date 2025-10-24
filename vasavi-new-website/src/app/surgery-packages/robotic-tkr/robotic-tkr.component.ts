import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsCard } from '../../doctors-card/doctors-card';
import { PopUpFormAds } from '../../pop-up-form-ads/pop-up-form-ads';
import { CallbackForm } from '../../ads-pages/callback-form/callback-form';
import { PackageForm } from "../../package-form/package-form";

interface HerniaType {
  cssClass: string;
  badgeText: string;
  title: string;
  description: string;
  tag?: string;
  location?: string;
  recoverytime?: string;
  hospitalStay?: string;
}

@Component({
  selector: 'app-robotic-tkr',
  imports: [CallbackForm, CommonModule, DoctorsCard, PopUpFormAds, PackageForm],
  templateUrl: './robotic-tkr.component.html',
  styleUrl: './robotic-tkr.component.css'
})
export class RoboticTkrComponent {
  doctorHeader: any = {
    title: 'Meet Our Surgery Specialist',
    description: '',
  };

  doctors: any = [
    {
      name: 'Dr. Ramesh T S',
      img: 'img/Doctor-img/MINIMALLY INVASIVE SURGERY/Dr.Ramesh T S.jpg',
      alt: 'Best General Surgeon in Bangalore | Dr. Ramesh T S',
      experience: '29+',
      department: 'Robotic & Minimally Invasive Surgery',
    },
    {
      name: 'Dr. Mutharaju K. R',
      img: 'img/new-doctor-image/dr-mutharaju-k-r-sq.png',
      alt: 'Best General Surgeon in Bangalore | Dr. Mutharaju K. R',
      experience: '23+',
      department: 'Robotic & Minimally Invasive Surgery',
    },
  ];

  herniaTypes: HerniaType[] = [
    {
      cssClass: 'inguinal',
      badgeText: 'Most Common',
      title: 'Inguinal Hernia',
      description:
        'Occurs in the groin when tissue pushes through a weak spot in the abdominal wall. Common in men.',
      location: 'Location: Groin',
      hospitalStay: 'Stay: 1 day',
      recoverytime: 'Recovery: 1–2 weeks',
    },
    {
      cssClass: 'femoral',
      badgeText: 'More Common in Women',
      title: 'Femoral Hernia',
      description:
        'Appears in the upper thigh or outer groin when fatty tissue or intestine bulges through the femoral canal.',
      location: 'Location: Upper Thigh',
      hospitalStay: 'Stay: 1 day',
      recoverytime: 'Recovery: 1–2 weeks',
    },
    {
      cssClass: 'umbilical',
      badgeText: 'Often in Adults',
      title: 'Umbilical Hernia',
      description:
        'Develops near the belly button when part of the intestine pushes through the abdominal wall.',
      location: 'Location: Navel',
      hospitalStay: 'Stay: 1 day',
      recoverytime: 'Recovery: 1 week',
    },
    {
      cssClass: 'ventral',
      badgeText: 'Abdominal Wall',
      title: 'Ventral Hernia',
      description:
        'Occurs when tissue bulges through a weak area in the abdominal wall, often visible while standing or straining.',
      location: 'Location: Abdomen',
      hospitalStay: 'Stay: 1–2 days',
      recoverytime: 'Recovery: 2 weeks',
    },
    {
      cssClass: 'incisional',
      badgeText: 'Post-Surgery Type',
      title: 'Incisional Hernia',
      description:
        'Forms at the site of a previous surgical incision due to weakened tissue from healing.',
      location: 'Location: Surgical Scar',
      hospitalStay: 'Stay: 2 days',
      recoverytime: 'Recovery: 2–3 weeks',
    },
    {
      cssClass: 'hiatal',
      badgeText: 'Internal Type',
      title: 'Hiatal Hernia',
      description:
        'Part of the stomach moves up through the diaphragm into the chest cavity, often linked to acid reflux.',
      location: 'Location: Upper Abdomen',
      hospitalStay: 'Stay: 1–2 days',
      recoverytime: 'Recovery: 2–3 weeks',
    },
    {
      cssClass: 'epigastric',
      badgeText: 'Upper Abdomen',
      title: 'Epigastric Hernia',
      description:
        'Small bulge between the navel and chest caused by fat pushing through the abdominal wall.',
      location: 'Location: Upper Abdomen',
      hospitalStay: 'Stay: 1 day',
      recoverytime: 'Recovery: 1 week',
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

  isPopupOpen = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  handleFormSubmit(data: { name: string; phoneNumber: string; otp: string }) {
    console.log('Form Data Received:', data);
    // ✅ You can send this data to backend or API here
    this.closePopup(); // close popup after success
  }

}
