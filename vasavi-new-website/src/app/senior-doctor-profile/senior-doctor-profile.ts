import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-senior-doctor-profile',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './senior-doctor-profile.html',
  styleUrl: './senior-doctor-profile.css'
})
export class SeniorDoctorProfile {
 

  boxDetails=[
  {  
    img:"img/senior-doctor/kneepad.png",
    count:"45+ Years",
   department:"of Orthopedic Excellence"
  },
  {  
    img:"img/senior-doctor/surgery.png",
    count:"5000+",
   department:"Surgeries Performed"
  },
  {  
    img:"img/senior-doctor/Vector.png",
    count:"10,000+",
   department:"Patients Treated Successfully"
  },


  ]

}
