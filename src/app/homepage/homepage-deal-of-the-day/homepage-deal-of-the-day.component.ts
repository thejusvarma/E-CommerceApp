import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';


@Component({
  selector: 'app-homepage-deal-of-the-day',
  templateUrl: './homepage-deal-of-the-day.component.html',
  styleUrls: ['./homepage-deal-of-the-day.component.css']
})
export class HomepageDealOfTheDayComponent implements OnInit {

  isVisibleOnMobile(){}
  constructor() { }

  ngOnInit() {
    new Splide( '#deal-day', {
      padding:'0px',
      drag: true,
      interval : 2000,
      perPage : 5,
      type    : 'loop',
      gap: '40px',
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
        '400': {
          padding:'0px',
          perPage: 2,
          gap    : '5px',
        },
      }
    } ).mount();
}
}

