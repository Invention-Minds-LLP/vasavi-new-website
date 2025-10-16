import { Component } from '@angular/core';
import { PackageForm } from "../../package-form/package-form";


@Component({
  selector: 'app-robotic-hysterectomy',
  imports: [PackageForm],
  templateUrl: './robotic-hysterectomy.html',
  styleUrl: './robotic-hysterectomy.css'
})
export class RoboticHysterectomy {

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
