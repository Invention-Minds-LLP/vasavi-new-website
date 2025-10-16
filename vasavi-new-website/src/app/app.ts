import { Component, signal, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { RoboticTkrComponent } from './surgery-packages/robotic-tkr/robotic-tkr.component';
import { RoboticHerniaComponent } from './surgery-packages/robotic-hernia/robotic-hernia.component';
import { RoboticThrComponent } from './surgery-packages/robotic-thr/robotic-thr.component';
import { Chatbot } from './chatbot/chatbot';
import { Router, NavigationEnd } from '@angular/router';
import  WOW  from 'wowjs';
import AOS from 'aos';
import { Popup } from "./popup/popup";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    RoboticTkrComponent,
    RoboticHerniaComponent,
    RoboticThrComponent,
    Chatbot,
    Popup,
    CommonModule
],
  templateUrl: './app.html',
 styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('vasavi-new-website');
  dark = false;

  showGlobalPopup = false;
  currentRoute = '';


  constructor(private router: Router,private ngZone: NgZone) {}

  ngOnInit(): void {
    this.showPopup = true;
    // Initialize outside Angular to avoid DOM timing conflicts
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        AOS.init({
          duration: 800,
          once: false,
          mirror: false,
        });
      }, 100);
    });
  }

  ngAfterViewInit(): void {
    // Listen for navigation events safely
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngZone.runOutsideAngular(() => {
          setTimeout(() => {
            try {
              AOS.refresh();
            } catch (err) {
              console.warn('AOS refresh failed:', err);
            }
          }, 500);
        });
      }
    });
    
  }

  toggleTheme() {
    document.documentElement.classList.toggle('app-dark', this.dark);
  }
  openChat() {
    const chatbot = document.getElementById('chatbot');
    const bubble = document.getElementById('chatbot-bubble');
    if (chatbot && bubble) {
      chatbot.style.display = 'flex';
      bubble.style.display = 'none';
    }
  }

  closeChat() {
    const chatbot = document.getElementById('chatbot');
    const bubble = document.getElementById('chatbot-bubble');
    if (chatbot && bubble) {
      chatbot.style.display = 'none';
      bubble.style.display = 'flex';
    }
  }

  showPopupAfterFormClose() {
    if (this.currentRoute === '/home') {
      this.showGlobalPopup = true;
    }
  }

  onPopupClosed() {
    this.showGlobalPopup = false;
  }

  showPopup = false;



  closePopup() {
    this.showPopup = false;
  }

 
}
