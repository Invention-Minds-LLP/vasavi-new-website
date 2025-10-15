import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { RoboticTkrComponent } from "./surgery-packages/robotic-tkr/robotic-tkr.component";
import { RoboticHerniaComponent } from "./surgery-packages/robotic-hernia/robotic-hernia.component";
import { RoboticThrComponent } from "./surgery-packages/robotic-thr/robotic-thr.component";
import { Chatbot } from './chatbot/chatbot';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, RoboticTkrComponent, RoboticHerniaComponent, RoboticThrComponent, Chatbot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vasavi-new-website');
  dark = false;

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
    
}
