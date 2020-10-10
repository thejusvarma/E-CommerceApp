import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart-item',
  templateUrl: './my-cart-item.component.html',
  styleUrls: ['./my-cart-item.component.css']
})
export class MyCartItemComponent implements OnInit {

count:number=1;

  increaseCount(){
    if(this.count==10){
      return this.count;
    }
    return this.count++;
  }
  decreaseCount(){
    if(this.count==1){
      return this.count;
    }
    return this.count--;

  }


  isVisibleOnMobile(){

  }
  constructor() { }

  ngOnInit(): void {
  }

}
