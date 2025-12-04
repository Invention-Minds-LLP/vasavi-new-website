import { Component, ElementRef, ViewChild } from '@angular/core';
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
  constructor(private title: Title, private meta: Meta) { }
  @ViewChild('carouselTrack', { static: false }) trackRef!: ElementRef<HTMLDivElement>;
  @ViewChild('prevBtn', { static: false }) prevBtnRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('nextBtn', { static: false }) nextBtnRef!: ElementRef<HTMLButtonElement>;

  currentIndex = 0;
  itemsPerView = 1;
  isCarouselMode = false;
  resizeTimeout: any;
  activeSection = 'overview';

  doctorHeader: any = {
    title: 'Meet Our Surgery Specialist',
    description: '',
  };

  sections = [
      { name: 'Overview', id: 'overview' },
    { name: 'Symptoms', id: 'symptoms' },
    { name: 'Book an Appointment', id: 'appointment' },
    { name: 'Our Doctors', id: 'doctors' },
    // { name: 'Surgery Options', id: 'surgery' },
    // { name: 'Types', id: 'types' },
    { name: 'Procedures', id: 'procedures' }
  ];

  doctors: any = [
    {
      name: 'Dr. Rupendu T',
      img: 'img/Doctor-img/ORTHOPEDICS/dr-rupendu-t-sq.png',
      alt: 'Best Orthopedic Surgeon in Bangalore | Dr. Rupendu T',
      experience: '45+',
      department: 'Sr. Consultant Orthopaedic Surgeon',
      // qualification: 'MBBS, D.Ortho, MS(Ortho), Fellowship in Joint Replacement Surgery (Australia, Germany)',
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
    // setTimeout(() => {
    //   this.openPopup();
    // }, 5000);

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
