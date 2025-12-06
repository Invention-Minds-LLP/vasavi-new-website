import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsCard } from '../../doctors-card/doctors-card';
import { PopUpFormAds } from '../../pop-up-form-ads/pop-up-form-ads';
import { CallbackForm } from '../../ads-pages/callback-form/callback-form';
import { PackageForm } from "../../package-form/package-form";
import { Meta, Title } from '@angular/platform-browser';

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
  selector: 'app-robotic-thr',
  imports: [CallbackForm, CommonModule, DoctorsCard, PopUpFormAds, PackageForm],
  templateUrl: './robotic-thr.component.html',
  styleUrl: './robotic-thr.component.css'
})
export class RoboticThrComponent {

  constructor(private title:Title, private meta:Meta){}
  @ViewChild('carouselTrack', { static: false }) trackRef!: ElementRef<HTMLDivElement>;
  @ViewChild('prevBtn', { static: false }) prevBtnRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('nextBtn', { static: false }) nextBtnRef!: ElementRef<HTMLButtonElement>;

  currentIndex = 0;
  itemsPerView = 1;
  isCarouselMode = false;
  resizeTimeout: any;
  activeSection = 'overview';

  sections = [
   { name: 'Overview', id: 'overview' },
    { name: 'Symptoms', id: 'symptoms' },
    { name: 'Book an Appointment', id: 'appointment' },
    { name: 'Our Doctors', id: 'doctors' },
    { name: 'Surgery Options', id: 'surgery' },
    // { name: 'Types', id: 'types' },
    { name: 'Procedures', id: 'procedures' }
  ];

  doctorHeader: any = {
    title: 'Meet Our Surgery Specialist',
    description: '',
  };

  doctors: any = [
   {
      name: "Dr. Rupendu T",
      img: "img/Doctor-img/ORTHOPEDICS/dr-rupendu-t-sq.png",
      alt: "Best Orthopedic Surgeon in Bangalore | Dr. Srivatsa Subramanya",
      experience: "45+",
      department: "Sr. Consultant Orthopaedic Surgeon",
      // qualification: "MBBS, D.Ortho, MS(Ortho), Fellowship in Joint Replacement Surgery (Australia, Germany)",
      slug: "/dr-rupendu-t"
    },
    {
      name: 'Dr. Srivatsa Subramanya',
      img: 'img/new-doctor-image/dr-srivatsa-subramanya-spec.png',
      alt: 'Dr. Srivatsa Subramanya | Orthopedic Surgeon | Vasavi Hospitals Bangalore',
      experience: '17+',
      department: 'Consultant-Orthopedics',
      // qualification: 'MBBS, D.Ortho, MS(Ortho), Fellowship in Joint Replacement Surgery (Australia, Germany)',
      slug: "/dr-srivatsa-subramanya" 
    },
    {
      name: "Dr. Venkatesh Rathod R",
      img: "img/new-doctor-image/dr-venkatesh-rathod-spec.png",
      alt: "Best Orthopedic Surgeon in Bangalore | Dr. Venkatesh Rathod R",
      experience: "16+",
      department: 'Consultant-Orthopedics',
      // department: "Consultant - ENT",
      // qualification: "MBBS, Dortho, DNB ortho",
      slug: "/dr-venkatesh-rathod-r"
    }
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
      this.openImagePopup();
    }, 5000);

    this.title.setTitle('Total Hip Replacement Surgery in Bangalore | Regain Mobility & Comfort');
    this.meta.updateTag({name:'description', content:'Experience pain-free movement with advanced Hip Replacement surgery at Vasavi Hospitals. Safe, precise & affordable orthopedic care with fast recovery.'})

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


  
  // sub navbar
  ngAfterViewInit(): void {
    this.updateCarouselMode();
    this.setupEventListeners();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  // Carousel Items
  private get items(): NodeListOf<HTMLElement> {
    return this.trackRef.nativeElement.querySelectorAll('.section-item');
  }

  // Update carousel mode
  private updateCarouselMode(): void {
    const containerWidth = this.trackRef.nativeElement.parentElement!.clientWidth - 32;
    const itemsArray = Array.from(this.items);
    const itemsWidth = itemsArray.reduce((total, item) => total + item.offsetWidth + 16, 0) - 16;

    this.isCarouselMode = itemsWidth > containerWidth;

    if (this.isCarouselMode) {
      this.calculateItemsPerView();
      this.showCarouselControls();
      this.updateCarousel();
    } else {
      this.hideCarouselControls();
      this.trackRef.nativeElement.style.transform = 'translateX(0)';
    }
  }

  // Calculate visible items
  private calculateItemsPerView(): void {
    const containerWidth = this.trackRef.nativeElement.parentElement!.clientWidth - 32;
    let totalWidth = 0;
    let itemCount = 0;

    for (const item of Array.from(this.items)) {
      const itemWidth = item.offsetWidth + 16;
      if (totalWidth + itemWidth <= containerWidth) {
        totalWidth += itemWidth;
        itemCount++;
      } else break;
    }

    this.itemsPerView = Math.max(1, itemCount);
  }

  // Show/hide carousel buttons
  private showCarouselControls(): void {
    this.prevBtnRef.nativeElement.classList.remove('hide');
    this.prevBtnRef.nativeElement.classList.add('show');
    this.nextBtnRef.nativeElement.classList.remove('hide');
    this.nextBtnRef.nativeElement.classList.add('show');
  }

  private hideCarouselControls(): void {
    this.prevBtnRef.nativeElement.classList.remove('show');
    this.prevBtnRef.nativeElement.classList.add('hide');
    this.nextBtnRef.nativeElement.classList.remove('show');
    this.nextBtnRef.nativeElement.classList.add('hide');
  }

  // Update carousel position
  private updateCarousel(): void {
    if (!this.isCarouselMode) return;
    const itemWidth = this.items[0].offsetWidth + 16;
    const translateX = -this.currentIndex * itemWidth * this.itemsPerView;
    this.trackRef.nativeElement.style.transform = `translateX(${translateX}px)`;
    this.updateButtons();
  }

  private updateButtons(): void {
    const maxIndex = Math.ceil(this.items.length / this.itemsPerView) - 1;
    this.prevBtnRef.nativeElement.disabled = this.currentIndex <= 0;
    this.nextBtnRef.nativeElement.disabled = this.currentIndex >= maxIndex;
  }

  next(): void {
    const maxIndex = Math.ceil(this.items.length / this.itemsPerView) - 1;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }

  // Scroll to section
  scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }

  // Event listeners
  private setupEventListeners(): void {
    this.prevBtnRef.nativeElement.addEventListener('click', () => this.prev());
    this.nextBtnRef.nativeElement.addEventListener('click', () => this.next());

    // Touch support
    let startX: number | null = null;
    const track = this.trackRef.nativeElement;

    track.addEventListener('touchstart', (e: TouchEvent) => startX = e.touches[0].clientX);
    track.addEventListener('touchend', (e: TouchEvent) => {
      if (!startX || !this.isCarouselMode) return;
      const diffX = startX - e.changedTouches[0].clientX;
      if (Math.abs(diffX) > 50) diffX > 0 ? this.next() : this.prev();
      startX = null;
    });

    // Window resize
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  private handleResize(): void {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => this.updateCarouselMode(), 300);
  }



  isPopupImageOpen = false;
  // selectedImage: string | null = null;

  openImagePopup() {
    this.isPopupImageOpen = true;
  }

  closeImagePopup() {
    this.isPopupImageOpen = false;
  }

}
