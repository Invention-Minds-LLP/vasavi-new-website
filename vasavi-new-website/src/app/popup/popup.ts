import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  templateUrl: './popup.html',
  styleUrls: ['./popup.css']
})
export class Popup {
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
