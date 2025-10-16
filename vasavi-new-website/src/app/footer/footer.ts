import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  constructor(public router: Router) { }

   showDesigner(): boolean {
    const inventionRoutes = ['/bariatric-surgery', '/cardiology', '/ent','/nephrology','/obstetrics-gynaecology','/oncology','/orthopedic','/pulmonology','/urology'];
    return inventionRoutes.includes(this.router.url);
  }
}
