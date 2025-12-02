import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctors-page',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './doctors-page.html',
  styleUrl: './doctors-page.css'
})
export class DoctorsPage {


  searchText: string = "";
  selectedDepartment: string = "";

  filterDoctors() {
    return this.doctors.filter(d => {

      const searchMatch =
        this.searchText.trim() === "" ||
        d.name.toLowerCase().includes(this.searchText.toLowerCase());

      const depMatch =
        this.selectedDepartment === "" ||
        d.department === this.selectedDepartment;

      return searchMatch && depMatch;
    });
  }

  clearAll() {
    this.searchText = "";
    this.selectedDepartment = "";
    this.filterDoctors()
  }
  get departments() {
    return [...new Set(this.doctors.map(d => d.department))];
  }


  doctors = [
    {
      name: "Dr. Nisha Buchade",
      img: "/img/new-doctor-image/dr-nisha-buchade.png",
      alt: "Dr. Nisha Buchade | Gynecologist | Vasavi Hospitals Bangalore",
      experience: "14+",
      department: "Gynecology",
      slug: "/dr-nisha-buchade"
    },
    {
      name: "Dr. Kumaresh Krishnamoorthy",
      img: "/img/new-doctor-image/dr-kumaresh-krishnamoorthy.png",
      alt: "Dr. Kumaresh Krishnamoorthy | Best ENT Doctor",
      experience: "25+",
      department: "ENT",
      slug: "/dr-kumaresh-krishnamoorthy"
    },

    {
      name: "Dr. Ramesh T. S",
      img: "/img/new-doctor-image/dr-ramesh-t-s.png",
      alt: "Dr. Ramesh T. S | General Surgeon at Vasavi Hospital Bangalore",
      experience: "29+",
      department: "Accredited Robotic Surgeon of Edinburgh",
      slug: "/dr-ramesh-t-s"
    },


    {
      name: "Dr. Ashok M. V",
      img: "/img/new-doctor-image/dr-ashok-m-v.png",
      alt: "Dr. Ashok MV | Pediatrician & Neonatologist | Vasavi Hospitals Bangalore",
      experience: "15+",
      department: "Pediatrics & Neonatology",
      slug: "/dr-ashok-m-v"
    },

    {
      name: "Dr. Mohan Ram. P",
      img: "/img/new-doctor-image/dr-mohan-ram- p-sq.png",
      alt: "Dr. Mohan Ram. P | Laparoscopic General Surgeon at Vasavi Hospital Bangalore",
      experience: "15+",
      department: "General Surgery",
      slug: "/dr-mohan-ram-p"
    },
    {
      name: "Dr. Ramesh Hanumegowda",
      img: "/img/new-doctor-image/dr-ramesh-hanumegowda.png",
      alt: "Dr. Ramesh Hanumegowda | Urologist | Vasavi Hospitals Bangalore",
      experience: "15+",
      department: "Urology",
      slug: "/dr-ramesh-hanumegowda"
    },
    {
      name: "Dr. Srivatsa Subramanya",
      img: "/img/new-doctor-image/dr-srivatsa-subramanya.png",
      alt: "Dr. Srivatsa Subramanya | Orthopedic Surgeon | Vasavi Hospitals Bangalore",
      experience: "17+",
      department: "Orthopedics",
      slug: "/dr-srivatsa-subramanya"
    },
    {
      name: "Dr. Sreenidhi H. C",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Sreenidhi Chandrashekar | Nephrologist | Vasavi Hospitals Bangalore",
      experience: "3+",
      department: "Nephrology",
      slug: "/dr-sreenidhi-h-c"
    },


    {
      name: "Dr. Vinay Hosadurga",
      img: "/img/new-doctor-image/dr-vinay-hosadurga.png",
      alt: "Dr. Vinay Hosadurga | General Physician | Vasavi Hospitals Bangalore",
      experience: "14+",
      department: "General Medicine",
      slug: "/dr-vinay-hosadurga"
    },

    {
      name: "Dr. Venkatesh Rathod R",
      img: "/img/new-doctor-image/dr-venkatesh-rathod.png",
      alt: "Dr. Venkatesh Rathod | Orthopedic Surgeon | Vasavi Hospitals Bangalore",
      experience: "16+",
      department: "Orthopedics",
      slug: "/dr-venkatesh-rathod-r"
    },

    {
      name: "Dr. Sneha Sundaram",
      img: "/img/new-doctor-image/dummy-female.png",
      alt: "Dr. Sneha Sundaram | Endodontist | Vasavi Hospitals Bangalore",
      experience: "13+",
      department: "Dentistry",
      slug: "/dr-sneha-sundaram"
    },
    {
      name: "Dr. Abhiram R",
      img: "/img/new-doctor-image/dr-abhiram-r.png",
      alt: "Dr. Abhiram R | Dermatologist | Vasavi Hospitals Bangalore",
      experience: "10+",
      department: "Dermatology",
      slug: "/dr-abhiram-r"
    },
    {
      name: "Dr. Sunil R",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Sunil R | Nephrologist | Vasavi Hospitals Bangalore",
      experience: "15+",
      department: "Nephrology",
      slug: "/dr-sunil-r"
    },
    {
      name: "Dr. Pratham R Bysani",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Pratham R Bysani | Neurosurgeon | Vasavi Hospitals Bangalore",
      experience: "10+",
      department: "Neurosurgery",
      slug: "/dr-pratham-r-bysani"
    },
    {
      name: "Dr. Karthik K",
      img: "/img/new-doctor-image/dr-karthik-k.png",
      alt: "Dr. Karthik K | Anesthesiologist | Vasavi Hospitals Bangalore",
      experience: "21+",
      department: "Anesthesiology",
      slug: "/dr-karthik-k"
    },
    {
      name: "Dr. Pradeep A Dongare",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Pradeep A Dongare | Anesthesiologist | Vasavi Hospitals Bangalore",
      experience: "12+",
      department: "Anesthesiology",
      slug: "/dr-pradeep-a-dongare"
    },
    {
      name: "Dr. Abhirami Ravindran",
      img: "/img/new-doctor-image/dummy-female.png",
      alt: "Dr. Abhirami Ravindran | Anesthesiologist | Vasavi Hospitals Bangalore",
      experience: "13+",
      department: "Anesthesiology",
      slug: "/dr-abhirami-ravindran"
    },
    {
      name: "Dr. Raveendra Reddy",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Raveendra Reddy | Critical Care Specialist | Vasavi Hospitals Bangalore",
      experience: "16+",
      department: "Critical Care",
      slug: "/dr-raveendra-reddy"
    },
    {
      name: "Dr. Sudeep Putta Manohar",
      img: "/img/new-doctor-image/dummy-male.png",
      alt: "Dr. Sudeep Putta Manohar | Endocrinologist | Vasavi Hospitals Bangalore",
      experience: "15+",
      department: "Endocrinology",
      slug: "/dr-sudeep-putta-manohar"
    },
    {
      name: "Dr. Sowmya Sangmesh",
      img: "/img/new-doctor-image/dr-sowmya-sangmesh.png",
      alt: "Dr. Sowmya Sangmesh | Gynecologist | Vasavi Hospitals Bangalore",
      experience: "14+",
      department: "Gynecology",
      slug: "/dr-sowmya-sangmesh"
    },
    {
      name: "Dr. Madhu B Jagalasar",
      img: "/img/new-doctor-image/dummy-female.png",
      alt: "Dr. Madhu B Jagalasar | Neonatologist | Vasavi Hospitals Bangalore",
      experience: "13+",
      department: "Neonatology",
      slug: "/dr-madhu-b-jagalasar"
    },


    {
      name: "Dr. Mutharaju K. R",
      img: "/img/new-doctor-image/dr-mutharaju-k-r.png",
      alt: "Dr. Mutharaju K R | Bariatric Surgeon | Vasavi Hospitals Bangalore",
      experience: "23+",
      department: "Bariatric Surgery",
      slug: "/dr-mutharaju-k-r"
    },
    {
      name: "Dr. Gargi Das",
      img: "/img/new-doctor-image/Dr Gargi Das.png",
      alt: "Dr Gargi Das - Consultant Ophthalmologist | Vasavi Hospitals Bangalore",
      experience: "6+",
      department: "Ophthalmology",
      slug: "/dr-gargi-das"
    },
    {
      name: "Dr. Sphoorthy G Itigi",
      img: "/img/new-doctor-image/Dr Sphoorthy G Itigi.png",
      alt: "Dr. Sphoorthy G Itigi - Consultant ENT Surgeon | Vasavi Hospitals Bangalore",
      experience: "8+",
      department: "ENT",
      slug: "/dr-sphoorthy-g-itigi"
    },
    {
      name: "Dr. Naneboena Sunitha",
      img: "/img/new-doctor-image/dr-naneboena-sunitha-sq.png",
      alt: "Dr Naneboena Sunitha - Consultant Nutritionist & Dietitian | Vasavi Hospitals Bangalore",
      experience: "26+",
      department: "Nutrition & Dietetics",
      slug: "/dr-naneboena-sunitha"
    },


    {
      name: "Dr. Revathi Natesan",
      img: "/img/new-doctor-image/dr-revathi-natesan.png",
      alt: "Dr. Revathi Natesan | Endodontist | Vasavi Hospitals Bangalore",
      experience: "15+",
      department: "Dentistry",
      slug: "/dr-revathi-natesan"
    },

    {
      name: "Dr. Yashaswi Srikakula",
      img: "/img/new-doctor-image/dr-yashasvi.png",
      alt: "Dr. Yashaswi Srikakula | Consultant ENT at Vasavi Hospital Bangalore",
      experience: "15+",
      department: "ENT",
      slug: "/dr-yashaswi-srikakula"
    }


  ]
}





