import { Component } from '@angular/core';
import { PackageForm } from "../../package-form/package-form";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-robotic-cholecystectomy',
  imports: [PackageForm, RouterModule],
  templateUrl: './robotic-cholecystectomy.component.html',
  styleUrl: './robotic-cholecystectomy.component.css'
})
export class RoboticCholecystectomyComponent {
  showPopup = false;
  selectedPlan = '';

  openPopup(plan: string) {
    this.selectedPlan = plan;
    this.showPopup = true;
  }

  onModalClosed() {
    this.showPopup = false; // resets for next click
  }

}
