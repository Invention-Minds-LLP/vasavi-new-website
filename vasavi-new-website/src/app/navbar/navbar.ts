import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FacebookPixel } from '../facebook-pixel';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  constructor(private pixel: FacebookPixel){}

  closeNavbar() {
    const navbar = this.navbarCollapse?.nativeElement;
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }

  onNavClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('dropdown-toggle') || target.closest('.dropdown-toggle')) {
      return;
    }
    if (target.tagName === 'A' || target.closest('a')) {
      this.closeNavbar();
    }
  }

  trackCall() {
    this.pixel.trackCustomEvent('CallInitiated', {
      phone: '08071500500',
    });
  }
}
