import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-awards',
  imports: [RouterModule, RouterLink],
  templateUrl: './awards.html',
  styleUrl: './awards.css'
})
export class Awards {

  constructor(private titleService:Title, private metaService: Meta){}

  ngOnInit():void{
    this.titleService.setTitle('Award Winning Hospital in Banashankari Bangalore | Vasavi Hospitals');
    this.metaService.updateTag({name:'description', content:'Vasavi Hospitals in Banashankari Bangalore is recognized for healthcare excellence, medical innovation, and patient safety achievements.'})
  }

}
