import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-homepage-trending-products',
  templateUrl: './homepage-trending-products.component.html',
  styleUrls: ['./homepage-trending-products.component.css']
})
export class HomepageTrendingProductsComponent implements OnInit {
  isVisibleOnMobile(){}
  constructor() { }


  ngOnInit() {
    new Splide( '#trending', {
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
          gap    : '10px',
        },
      }
    } ).mount();
}

}
