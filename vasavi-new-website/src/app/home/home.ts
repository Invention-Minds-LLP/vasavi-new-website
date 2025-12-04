import { CommonModule } from '@angular/common';
import { Component, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Cta } from "../cta/cta";
import * as bootstrap from 'bootstrap';
import { Popup } from "../popup/popup";
import { DoctorsSlide } from "../doctors-slide/doctors-slide";


@Component({
  selector: 'app-home',
  imports: [CarouselModule, CommonModule, RouterLink, RouterModule, Cta, Popup, DoctorsSlide],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  @ViewChild('owlCar', { static: false }) owlCar!: CarouselComponent;
  @ViewChild('owlCar2', { static: false }) owlCar2!: CarouselComponent;

  direction: 'forward' | 'backward' = 'forward';
  autoplayInterval: any;
  autoplayInterval2: any;


  treatments = [
    { img: 'img/Home/Orthopedic.jpg', alt: 'Orthopedics Treatment', title: 'Orthopedics', link: '/orthopedic-hospital-in-bangalore' },
    { img: 'img/Home/Neurology.jpg', alt: 'Neurology Treatment', title: 'Neurology', link: '/neurology-hospital-in-bangalore' },
    { img: 'img/Home/PEDIATRICS.jpeg', alt: 'Pediatrics Treatment', title: 'Pediatrics', link: '/pediatric-hospital-in-bangalore' },
    { img: 'img/Home/Laser Skin Treatment at Vasavi Hospitals.jpg', alt: 'Dermatology Treatment', title: 'Dermatology', link: '/dermatology-skin-clinic-in-bangalore' },
    { img: 'img/Home/CARDIOLOGY1.jpg', alt: 'Cardiology Treatment', title: 'Cardiology', link: '/cardiology-hospital-in-bangalore' },
    { img: 'img/Home/ent6.jpg', alt: 'ENT Treatment', title: 'ENT', link: '/ent-hospital-in-bangalore' },
    { img: 'img/Home/Hematology.webp', alt: 'Hematology And BMT Treatment', title: 'Hematology And BMT', link: '/oncology-hospital-in-bangalore' },
    { img: 'img/Home/Medical-Oncology.jpg', alt: 'Medical Oncology Treatment', title: 'Medical Oncology', link: '/medical-oncology-cancer-treatment-in-bangalore' },
    { img: 'img/Home/Ophthalmology.jpg', alt: 'Ophthalmology Treatment', title: 'Ophthalmology', link: '/eye-hospital-in-bangalore' },
    { img: 'img/Home/radiology8.webp', alt: 'Radiology Treatment', title: 'Radiology', link: '/radiology-and-imaging-services-in-bangalore' },
    { img: 'img/Home/Vascular.webp', alt: 'Vascular Sciences Treatment', title: 'Vascular Sciences', link: '/vascular-surgery-in-bangalore' },
    { img: 'img/Home/Bariatric.jpg', alt: 'Bariatric Surgery Treatment', title: 'Bariatric Surgery', link: '/bariatric-surgery-in-bangalore' },
    { img: 'img/Home/diabetes-glucometer-test.jpg', alt: 'Diabetes & Endocrinology Treatment', title: 'Diabetes & Endocrinology', link: '/diabetes-and-endocrinology-center-in-bangalore' },
    { img: 'img/Home/vasavi-hospitals-internal-medicine-organs-overview.jpg', alt: 'Internal Medicine Treatment', title: 'Internal Medicine', link: '/internal-medicine-hospital-in-bangalore' },
    { img: 'img/Home/Neurosurgery.jpg', alt: 'Neurosurgery Treatment', title: 'Neurosurgery', link: '/neurosurgery-specialist-in-bangalore' },
    { img: 'img/Home/Minimally.jpg', alt: 'Minimally Invasive Surgery Treatment', title: 'Minimally Invasive Surgery', link: '/minimally-invasive-surgery-in-bangalore' },
    { img: 'img/Home/vasavi-hospitals-bangalore-oral-maxillofacial-surgery.png', alt: 'Oral & Maxillofacial Surgery Treatment', title: 'Oral & Maxillofacial Surgery', link: '/oral-and-maxillofacial-surgery-in-bangalore' },
    { img: 'img/Home/vasavi-hospitals-bangalore-gastroenterology-stomach-model.webp', alt: 'Surgical Gastroenterology Treatment', title: 'Surgical Gastroenterology', link: '/surgical-gastroenterology-in-bangalore' },
    { img: 'img/Home/Emergency2.webp', alt: 'Emergency & Critical Care Treatment', title: 'Emergency & Critical Care', link: '/emergency-and-critical-care-in-bangalore' },
    { img: 'img/Home/liver-hpb-doctor-hologram.png', alt: 'Liver And HPB Care Treatment', title: 'Liver And HPB Care', link: '/liver-hpb-care-center-in-bangalore' },
    { img: 'img/Home/nicu-premature-baby-care-vasavi-hospitals.jpg', alt: 'Neonatology - (Level – 3 NICU) Treatment', title: 'Neonatology - (Level – 3 NICU)', link: '/neonatology-and-nicu-care-in-bangalore' },
    { img: 'img/Home/doctor-nutrition-diet-consultation.jpg', alt: 'Nutrition & Dietetics Treatment', title: 'Nutrition & Dietetics', link: '/nutrition-and-dietetics-consultation-in-bangalore' },
    { img: 'img/Home/psychiatry1.jpg', alt: 'Psychiatry Treatment', title: 'Psychiatry', link: '/psychiatry-and-mental-health-in-bangalore' },
    { img: 'img/Home/vasavi-hospitals-bangalore-surgical-oncology-blue-ribbon.png', alt: 'Surgical Oncology Treatment', title: 'Surgical Oncology', link: '/surgical-oncology-cancer-hospital-in-bangalore' },
    { img: 'img/Home/vasavi-dentistry-digital-care.jpg', alt: 'Dentistry Treatment', title: 'Dentistry', link: '/dental-clinic-in-bangalore' },
    { img: 'img/Home/Medical Gastroenterology.webp', alt: 'Medical Gastroenterology Treatment', title: 'Medical Gastroenterology', link: '/gastroenterology-hospital-in-bangalore' },
    { img: 'img/Home/Nephrology1.jpg', alt: 'Nephrology Treatment', title: 'Nephrology', link: '/nephrology-hospital-in-bangalore' },
    { img: 'img/Home/Obstetrics1.jpg', alt: 'Obstetrics & Gynaecology Treatment', title: 'Obstetrics & Gynaecology', link: '/obstetrics-and-gynaecology-hospital-in-bangalore' },
    { img: 'img/Home/Pulmonology2.jpg', alt: 'Pulmonology Treatment', title: 'Pulmonology', link: '/lung-specialist-in-bangalore' },
    { img: 'img/Home/Urology1.jpeg', alt: 'Urology Treatment', title: 'Urology', link: '/urology-hospital-in-bangalore' },
  ];



  testimonials = [
    {
      name: 'Arun Kanti Chakraborty',
      img: 'img/icon/boy-person.png',
      text: `Excellent experience from doctors, nurses, front office staff, admission and insurance desk and ward staff.
                            Experienced doctors who are very confident and efficient in their work and answer all queries satisfactorily and in detail.
                            Nurses and ward members are very caring and sweet spoken.
                            

                            Admission coordinators, especially Sneha and Madhuri are very supportive and helpful. 
                            Overall much better experience than the other big names in the area like Fortis and Apollo hospitals.`,
    },
    {
      name: 'Raghunandan D',
      img: 'img/icon/boy-person.png',
      text: ` I recently visited Vasavi Hospitals for my dad as he had frequent urinary infection and had 
                            prostate issue.so he underwent Cystoscopy with TURP and was very impressed with the care I 
                            received. Dr Ramesh Hanumegowda was knowledgeable and attentive, taking the time to explain 
                            my diagnosis and treatment options clearly. The hospital was clean and well-maintained, and 
                            the staff were friendly and helpful. Overall, I had a positive experience at Vasavi Hospitals 
                            and would recommend it to others.`,
    },
    {
      name: 'Gurudatta Prasad',
      img: 'img/icon/boy-person.png',
      text: `Nice hospital, we have visited 14 days continuously for an injection for my mother. 
                            In the emergency unit all the nurses were helpful and took care of my mother. Also, 
                            Mahantesh took good care of my mother.`,
    },
    {
      name: 'Natam Pavan Kumar',
      img: 'img/icon/boy-person.png',
      text: `Underwent piles surgery through hexa health at Vasavi hospital. The staff was supportive and friendly. The room was so clean and the bathroom and other facilities were maintained well. The best part is the food they provide to patients.  I personally felt the food there was similar to home food.`,
    },
    {
      name: 'Shreevathsa Chilkunda',
      img: 'img/icon/boy-person.png',
      text: ` I had two core decompression surgeries done here for my Avascular Necrosis of bilateral femoral  capital epiphysis by Dr Srivatsa Subramanya and have been consulting him for other ailments too for the last three years. He is an excellent surgeon and people's person and very conservative in approach and only does what's exactly needed. He will be my Healer for my lifetime. Thank you very much.`,
    },
    {
      name: 'Raghumaani S',
      img: 'img/icon/boy-person.png',
      text: `Dr.Nisha was Professionally very sound and handled my wife's ( Deepa R Shetty) surgery in a 
                            skilled manner and taking the patient into confidence.Her way of handling things was very 
                            hospitable and thorough Professional way, which was very much needed for us. We were assured of a 
                            safe and successful procedure at the beginning and are satisfied with her services. We heartily 
                            thank Dr.Nisha and the concerned staff of M/s Vasavi hospital for their hospitality and 
                            professional services provided during our stay.`,
    },
    {
      name: 'Sindhu NPG',
      img: 'img/icon/boy-person.png',
      text: `Good hospital in and around the location. Service is reachable and doctors also guide us 
                            in a proper way, where a common man can understand the medical issue and the staff are very 
                            supportive.`,
    },
    {
      name: 'Murali K G',
      img: 'img/icon/boy-person.png',
      text: ` Very Good hospital with human touch. We are really satisfied with the way Dr. BALARAJ -CARDIOLOGIST 
                         handled our treatment. Thank you so much!!`,
    },
    {
      name: 'Rekha Chandramurthy',
      img: 'img/icon/boy-person.png',
      text: `I have no words to express towards Dr. Pratham Bysani Neuro surgeon his greatness and friendly behavior. This doctor is truly exceptional!
                            He’s very understanding and listens to your concerns. He explained everything in detail about the problem, procedure of surgery, its recovery and its after effects. He saved my husband's life.
                            Thank you Dr.Pratham Bysani.`,
    },
    {
      name: 'Vikrant Vij',
      img: 'img/icon/boy-person.png',
      text: `Great service by the hospital staff. They have taken care of my mother for about 25 days and helped her recover throughout. Special thanks to Prakash Naik  for constantly motivating her. Very satisfied overall.`,
    },

  ];

  doctorSlide = [
    {
      name: "Dr. Nisha Buchade",
      img: "img/go/dr-nisha-buchade-sq.png",
      alt: "Best Gynecologic Oncologist and Robotic Hysterectomy Surgeon in Bangalore | Dr. Nisha Buchade",
      experience: "15+",
      department: "Obstetrics and Gynaecology",
      // qualification: "MBBS, MS Fellowship in gynec-oncology, Fellowship in Advanced infertility",
      slug: "/dr-nisha-buchade"
    },
    {
      name: 'Dr. Srivatsa Subramanya',
      img: 'img/new-doctor-image/dr-srivatsa-subramanya-spec.png',
      alt: 'Dr. Srivatsa Subramanya | Orthopedic Surgeon | Vasavi Hospitals Bangalore',
      experience: '17+',
      department: 'Orthopedics',
      // qualification: 'MBBS, D.Ortho, MS(Ortho), Fellowship in Joint Replacement Surgery (Australia, Germany)',
      slug: "/dr-srivatsa-subramanya"
    },
    {
      name: "Dr. Ramesh Hanumegowda",
      img: "img/new-doctor-image/dr-ramesh-hanumegowda-urologist-transparent.png",
      alt: "Best General Surgeon in Bangalore | Dr. Ramesh T S",
      experience: "15+",
      department: "Urology",
      slug: '/dr-ramesh-hanumegowda'
    },
    {
      name: "Dr. Ramesh T S",
      img: "/img/new-doctor-image/dr-ramesh-t-s-sq.png",
      alt: "Best General Surgeon in Bangalore | Dr. Ramesh T S",
      experience: "30+",
      department: "General Surgery",
      slug:'/dr-ramesh-t-s'
    },


    {
      name: "Dr. Mohan Ram. P",
      img: "/img/new-doctor-image/dr-mohan-ram- p-sq.png",
      alt: "Best General Surgeon in Bangalore | Dr. Mohan Ram. P",
      experience: "15+",
      department: "General Surgery and Proctology",
      slug: '/dr-mohan-ram-p'
    },

    {
      name: "Dr. Kumaresh Krishnamoorthy",
      img: "img/new-doctor-image/dr-kumaresh-Kkrishnamoorthy-sq.png",
      alt: "Dr. Kumaresh Krishnamoorthy | Best ENT Doctor",
      experience: "25+",
      department: "ENT",
      qualification: "MS(ENT), Fellow, Head & Neck Surgery (USA), Fellow, Otology & Neurotology (USA)",
      slug: "/dr-kumaresh-krishnamoorthy"
    },
  ]




  customOptions: OwlOptions = {
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    smartSpeed: 600,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };

  customOptions2: OwlOptions = {
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 800,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };


  ngOnInit() {
    setTimeout(() => {
      this.startManualAutoplay();
      this.startManualAutoplay2();
    }, 800);
  }

  startManualAutoplay() {
    this.runDirectionBasedAutoplay(this.owlCar, 'main');
  }

  startManualAutoplay2() {
    this.runDirectionBasedAutoplay(this.owlCar2, 'second');
  }


  runDirectionBasedAutoplay(owl: any, key: 'main' | 'second') {
    if (!owl) return;

    // clear existing intervals
    const intervalRef = key === 'main' ? 'autoplayInterval' : 'autoplayInterval2';
    if (this[intervalRef]) clearInterval(this[intervalRef]);

    // speeds
    const fastSpeed = 2000; // faster when going forward
    const slowSpeed = 10; // slower when going backward
    const interval = this.direction === 'forward' ? fastSpeed : slowSpeed;

    this[intervalRef] = setInterval(() => {
      if (!owl) return;

      const slides = owl.slidesData();
      const total = slides.length;
      const activeIndex = slides.findIndex((s: any) => s.isActive);
      const visible = this.getVisibleCount();

      // reverse direction at edges
      if (this.direction === 'forward' && activeIndex + visible >= total) {
        this.direction = 'backward';
        this.runDirectionBasedAutoplay(owl, key); // restart with slow speed
        return;
      } else if (this.direction === 'backward' && activeIndex <= 0) {
        this.direction = 'forward';
        this.runDirectionBasedAutoplay(owl, key); // restart with fast speed
        return;
      }

      // Move carousel
      if (this.direction === 'forward') owl.next();
      else owl.prev();
    }, interval);
  }

  getVisibleCount(): number {
    const width = window.innerWidth;
    if (width < 600) return 1;
    if (width < 1000) return 2;
    return 4;
  }


  ngOnDestroy() {
    if (this.autoplayInterval) clearInterval(this.autoplayInterval);
    if (this.autoplayInterval2) clearInterval(this.autoplayInterval2);
  }

  // Customize your delay time here (in milliseconds)
  private modalDelay = 1000; // 3 seconds

  ngAfterViewInit() {
    // Wait for the view to render, then show the modal after custom delay
    // setTimeout(() => {
    //   const modalElement = document.getElementById('enquire');
    //   if (modalElement) {
    //     const modal = new bootstrap.Modal(modalElement);
    //     modal.show();
    //   }
    // }, this.modalDelay);
  }

  bookAppointment() {
    window.open("http://115.243.85.241:650/", "_blank");
  }
  

}
