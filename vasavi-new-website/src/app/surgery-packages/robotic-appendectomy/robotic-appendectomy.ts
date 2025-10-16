import { Component } from '@angular/core';
import { PackageForm } from "../../package-form/package-form";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-robotic-appendectomy',
  imports: [PackageForm, RouterModule],
  templateUrl: './robotic-appendectomy.html',
  styleUrl: './robotic-appendectomy.css',
})
export class RoboticAppendectomy {
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
