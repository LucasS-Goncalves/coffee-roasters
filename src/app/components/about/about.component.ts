import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    './styles/about-us-section.component.css',
    './styles/commitment-section.component.css',
    './styles/quality-section.component.css',
    './styles/headquarters-section.component.css'
  ]
})

export class AboutComponent {

  headquarters = [
    {
      img: '../../../assets/about/desktop/illustration-uk.svg',
      location: 'United Kingdom',
      info: `68 Asfordby Rd <br>
             Alcaston <br>
             SY6 1YA <br>
             +44 1241 918425
            `
    },
    {
      img: '../../../assets/about/desktop/illustration-canada.svg',
      location: 'Canada',
      info: `1528 Eglinton Avenue <br>
             Toronto <br>
             Ontario M4P 1A6 <br>
             +1 416 485 2997
            `
    },
    {
      img: '../../../assets/about/desktop/illustration-australia.svg',
      location: 'Australia',
      info: `36 Swanston Street <br>
             Kewell <br>
             Victoria <br>
             +61 4 9928 3629
            `
    }
  ]
}
