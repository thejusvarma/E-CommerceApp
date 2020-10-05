import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-homepage-image-carousel',
  templateUrl: './homepage-image-carousel.component.html',
  styleUrls: ['./homepage-image-carousel.component.css']
})
export class HomepageImageCarouselComponent implements OnInit {
  subscription: Subscription;

  slider1 : any;
  slider2: any;
  ngOnInit() {

         this.slider1= new Splide( '#vert-left', {
          type: 'loop',
          direction: 'ttb',
          heightRatio: 1,
              pagination: false,
              arrows: false,
            drag: false,
            perPage : 1,
          } );
          this.slider1.mount();

          this.slider2= new Splide( '#vert-right', {
            type: 'loop',
              direction: 'ttb',
              heightRatio: 1,
              start: 3,
              pagination: false,
              arrows: false,
            drag: false,
            perPage : 1,
          } );
          this.slider2.mount();
        }

  constructor(){
  this.subscription= interval(2000).subscribe((x =>{
        this.changeSlides();
                  }));

          }

    changeSlides() {

        this.slider1.go('+');
        this.slider2.go('-');
    }

}
