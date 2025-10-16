import { Component } from '@angular/core';
import { PackageForm } from "../../package-form/package-form";

@Component({
  selector: 'app-robotic-thr',
  imports: [PackageForm],
  templateUrl: './robotic-thr.component.html',
  styleUrl: './robotic-thr.component.css'
})
export class RoboticThrComponent {

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
