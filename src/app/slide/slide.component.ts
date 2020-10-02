import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @ViewChild('f',{static:true}) form : NgForm;
  constructor() { }
  nextSlide(){
   var number=this.form.value.slider;
   number = number == 4 ? 0 : ++number;
   this.form.controls["slider"].setValue(number);
  }
  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide(); 
    }, 3000);
  }

}
