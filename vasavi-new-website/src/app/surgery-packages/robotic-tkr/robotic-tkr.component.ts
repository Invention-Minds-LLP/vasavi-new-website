import { Component } from '@angular/core';
import { PackageForm } from "../../package-form/package-form";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-robotic-tkr',
  imports: [PackageForm, RouterModule],
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
