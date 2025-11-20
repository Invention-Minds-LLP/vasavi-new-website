import { Component } from '@angular/core';
import { CallbackForm } from '../../ads-pages/callback-form/callback-form';
import { CommonModule } from '@angular/common';
import { DoctorsCard } from '../../doctors-card/doctors-card';
import { PopUpFormAds } from '../../pop-up-form-ads/pop-up-form-ads';
import { Cta } from '../../cta/cta';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-acl-reconstructio',
  imports: [CallbackForm, CommonModule, DoctorsCard, Cta, PopUpFormAds],
  templateUrl: './acl-reconstructio.html',
  styleUrl: './acl-reconstructio.css',
})
export class ACLReconstructio {
  constructor(private title: Title, private meta: Meta) {}

  doctorHeader: any = {
    title: 'Meet Our Surgery Specialist',
    description: '',
  };

  doctors: any = [
    {
      name: 'Dr. Rupendu T',
      img: 'img/Doctor-img/ORTHOPEDICS/dr-rupendu-t-sq.png',
      alt: 'Best Orthopedic Surgeon in Bangalore | Dr. Rupendu T',
      experience: '40+',
      department: 'Sr. Consultant Orthopaedic Surgeon',
      // qualification: 'MBBS, D.Ortho, MS(Ortho), Fellowship in Joint Replacement Surgery (Australia, Germany)',
      // slug: "/dr-srivatsa-subramanya"
    },
    {
      name: 'Dr. Srivatsa Subramanya',
      img: 'img/new-doctor-image/dr-srivatsa-subramanya.png',
      alt: 'Dr. Srivatsa Subramanya | Orthopedic Surgeon | Vasavi Hospitals Bangalore',
      experience: '17+',
      department: 'Consultant-Orthopedics',
      // qualification: 'MBBS, D.Ortho, MS(Ortho), Fellowship in Joint Replacement Surgery (Australia, Germany)',
      slug: "/dr-srivatsa-subramanya" 
    },
    {
      name: 'Dr. Venkatesh Rathod R',
      img: 'img/new-doctor-image/dr-venkatesh-rathod-spec.png',
      alt: 'Best Orthopedic Surgeon in Bangalore | Dr. Venkatesh Rathod R',
      experience: '16+',
      department: 'Consultant-Orthopedics',
      // department: "Consultant - ENT",
      // qualification: "MBBS, Dortho, DNB ortho",
      slug: '/dr-venkatesh-rathod-r',
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

    this.title.setTitle('ACL Reconstruction Surgery in Bangalore | Orthopedic Experts');
    this.meta.updateTag({
      name: 'description',
      content:
        'Restore knee stability with arthroscopic ACL reconstruction. Sports injury recovery made faster & pain-free.',
    });

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
