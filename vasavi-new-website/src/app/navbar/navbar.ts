import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;


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

}
