import { Component, ElementRef, ViewChild } from '@angular/core';
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
      img : "img/new-doctor-image/dr-ramesh-t-s-sq.png",
      alt : "Best General Surgeon in Bangalore | Dr. Ramesh T S",
      experience : "30+",
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
  
}
