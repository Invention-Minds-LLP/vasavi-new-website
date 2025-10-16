import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [RouterModule, RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  constructor(private titleService: Title, private metaService: Meta){}

  ngOnInit():void{
    this.titleService.setTitle('Hospital Gallery in Banashankari Bangalore | Vasavi Hospitals');
    this.metaService.updateTag({name:'description', content:'Explore advanced facilities, modern infrastructure, and patient care environment at Vasavi Hospitals in Banashankari Bangalore.'})
  }

}
