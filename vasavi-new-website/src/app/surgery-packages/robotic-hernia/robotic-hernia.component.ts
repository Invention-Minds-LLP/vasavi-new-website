import { Component } from '@angular/core';
import { PackageForm } from "../../package-form/package-form";

@Component({
  selector: 'app-robotic-hernia',
  imports: [PackageForm],
  templateUrl: './robotic-hernia.component.html',
  styleUrl: './robotic-hernia.component.css'
})
export class RoboticHerniaComponent {

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
