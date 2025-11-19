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
  location?: string;
  recoverytime?: string;
  hospitalStay?: string
}

@Component({
  selector: 'app-tonsillectomy',
  imports: [CallbackForm, CommonModule, DoctorsCard, Cta, PopUpFormAds],
  templateUrl: './tonsillectomy.html',
  styleUrl: './tonsillectomy.css'
})
export class Tonsillectomy {

  constructor(private title: Title, private meta: Meta) { }


  ngOnInit(): void {
    this.title.setTitle('Tonsil Removal Surgery in Bangalore | ENT Specialists');
    this.meta.updateTag({ name: 'description', content: 'Safe tonsillectomy for chronic throat infections & snoring. Gentle care & fast healing for children & adults.' })
  }
  doctorHeader: any = {
    title: "Meet Our Surgery Specialist",
    description: ""
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
      name: "Dr. Kumaresh Krishnamoorthy",
      img: "img/new-doctor-image/dr-kumaresh-Kkrishnamoorthy-sq.png",
      alt: "Dr. Kumaresh Krishnamoorthy | Best ENT Doctor",
      experience: "25+",
      department: "Consultant - ENT, Head & Neck Surgeon",
      qualification: "MS(ENT), Fellow, Head & Neck Surgery (USA), Fellow, Otology & Neurotology (USA)",
      slug: "/dr-kumaresh-krishnamoorthy"
    },
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
    },

  ];


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
