import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { RoboticTkrComponent } from "./surgery-packages/robotic-tkr/robotic-tkr.component";
import { RoboticHerniaComponent } from "./surgery-packages/robotic-hernia/robotic-hernia.component";
import { RoboticThrComponent } from "./surgery-packages/robotic-thr/robotic-thr.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, RoboticTkrComponent, RoboticHerniaComponent, RoboticThrComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vasavi-new-website');
  
}
