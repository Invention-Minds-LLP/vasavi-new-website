import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FacebookPixel } from '../facebook-pixel';

@Component({
  selector: 'app-thankyou-page',
  imports: [RouterModule, RouterLink],
  templateUrl: './thankyou-page.html',
  styleUrl: './thankyou-page.css'
})
export class ThankyouPage {

    constructor(private pixel: FacebookPixel) {}

    ngOnInit(){
            this.pixel.trackStandardEvent('Lead', {
      content_name: 'Appointment Form',
      status: 'Success'
    });
    }
}
