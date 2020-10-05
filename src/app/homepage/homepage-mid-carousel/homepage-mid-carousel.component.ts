import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-homepage-mid-carousel',
  templateUrl: './homepage-mid-carousel.component.html',
  styleUrls: ['./homepage-mid-carousel.component.css']
})
export class HomepageMidCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    new Splide( '#image-slider', {
      drag: true,
      height: '300px',
      interval : 2000,
      perPage : 2,
      type    : 'loop',

      arrows: false,
      gap: '20px',
      autoplay: true,
      breakpoints: {
        '640': {
          perPage: 1,
          height: '150px',
          gap    : '12px',
        },
      }
    } ).mount();
  }

}
