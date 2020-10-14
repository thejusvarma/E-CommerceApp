import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-deal-of-the-day',
  templateUrl: './deal-of-the-day.component.html',
  styleUrls: ['./deal-of-the-day.component.css']
})
export class DealOfTheDayComponent implements OnInit {
  subscription: Subscription;
  remainingTime : String = '';
  constructor() { 
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
  ngOnInit(): void {
  }

}
