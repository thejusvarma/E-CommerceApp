import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-homepage-deal-of-the-day',
  templateUrl: './homepage-deal-of-the-day.component.html',
  styleUrls: ['./homepage-deal-of-the-day.component.css']
})
export class HomepageDealOfTheDayComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    new Splide( '#deal-day', {
      padding:'50px',
      drag: true,
      // interval : 2000,
      perPage : 4,
      gap: '32px',
      focus    : 'center',
      // autoplay: true,
      pagination: false,
      breakpoints: {
        '800': {
          perPage: 3,
          gap    : '12px',
        },
        '640': {
          perPage: 2,
          gap    : '12px',
        },
      }
    } ).mount();
}
}
