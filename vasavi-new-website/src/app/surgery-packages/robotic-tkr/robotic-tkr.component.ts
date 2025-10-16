import { Component } from '@angular/core';
import { PackageForm } from "../../package-form/package-form";

@Component({
  selector: 'app-robotic-tkr',
  imports: [PackageForm],
  templateUrl: './robotic-tkr.component.html',
  styleUrl: './robotic-tkr.component.css'
})
export class RoboticTkrComponent {
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
