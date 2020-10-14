import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-homepage-deal-of-the-day',
  templateUrl: './homepage-deal-of-the-day.component.html',
  styleUrls: ['./homepage-deal-of-the-day.component.css']
})
export class HomepageDealOfTheDayComponent implements OnInit {

  isVisibleOnMobile(){}


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


  subscription: Subscription;
  remainingTime : String = '';

  constructor(){
    this.subscription= interval(1000).subscribe((x =>{
                this.updateRemainingTime();
            }));


    }

updateRemainingTime()
{
  var actualTime: Date = new Date(Date.now());
  var endOfDay : Date = new Date(actualTime.getFullYear(), actualTime.getMonth(), actualTime.getDate() + 1, 0, 0, 0);
  var diffInSeconds = Math.floor(Math.abs(endOfDay.getTime() - actualTime.getTime()) / 1000);

  var seconds : any = diffInSeconds % 60;

  diffInSeconds = diffInSeconds - seconds;

  var diffInMinutes = diffInSeconds / 60;

  var minutes : any= diffInMinutes % 60;

  diffInMinutes = diffInMinutes - minutes;

  var hours : any= diffInMinutes / 60 ;

  seconds = seconds.toString();
  minutes = minutes.toString();
  hours = hours.toString();

 if(seconds.length == 1)
  seconds = '0' + seconds;

  if(minutes.length == 1)
  minutes = '0' + minutes;

  if(hours.length == 1)
  hours = '0' + hours;

  var diff = hours + ' : ' + minutes + ' : ' + seconds

  this.remainingTime = diff;

}



}

