import { Component } from '@angular/core';

@Component({
  selector: 'app-robotic-hysterectomy',
  imports: [],
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
