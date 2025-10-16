import { Component } from '@angular/core';
import { Cta } from "../cta/cta";
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-about',
  imports: [Cta, RouterModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('About Vasavi Hospitals Banashankari Bangalore | Trusted Healthcare');
    this.metaService.updateTag({ name: 'description', content: 'Learn about Vasavi Hospitals in Banashankari Bangalore. A trusted healthcare destination with advanced medical care and compassionate service.' })
  }
}
