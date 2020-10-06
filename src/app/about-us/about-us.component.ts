import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  isMobile: boolean=false;
  constructor() {
   }
   @ViewChild('f',{static:true}) form : NgForm;
   nextSlide(){
    var number=this.form.value.slider;
    number = number == 4 ? 0 : ++number;
    this.form.controls["slider"].setValue(number);
   }
   ngOnInit(): void {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
      this.isMobile=true;
    }
     setInterval(() => {
       this.nextSlide();
     }, 3000);
   }

}
