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
 @Input()  doctorProfileData:any;

  

}
