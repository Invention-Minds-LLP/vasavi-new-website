import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FacebookPixel } from '../facebook-pixel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  constructor(private pixel: FacebookPixel) { }

  ngAfterViewInit() {
    this.enableMobileDropdowns();
  }


  enableMobileDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', (event: any) => {
        if (window.innerWidth < 992) {
          event.preventDefault();

          const menu = dropdown.querySelector('.dropdown-menu');

          dropdown.classList.toggle('show');
          menu?.classList.toggle('show');

        }
      });
    });
  }

  isMenuOpen = false;

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const navbar = this.navbarCollapse?.nativeElement;
    if (this.isMenuOpen) {
      navbar.classList.add('show');
      document.body.style.overflow = 'hidden';
    } else {
      navbar.classList.remove('show');
      document.body.style.overflow = '';

    }
  }


  closeNavbar() {
    const navbar = this.navbarCollapse?.nativeElement;
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  onNavClick(event: Event) {
    const target = event.target as HTMLElement;

    // Do NOT close when clicking dropdown-toggle
    if (target.classList.contains('dropdown-toggle') || target.closest('.dropdown-toggle')) {
      return;
    }

    // Close navbar on menu item click
    if (target.tagName === 'A' || target.closest('a')) {
      this.closeNavbar();
    }
  }

  trackCall() {
    this.pixel.trackCustomEvent('CallInitiated', {
      phone: '08071500500',
    }
    );
  }


}
