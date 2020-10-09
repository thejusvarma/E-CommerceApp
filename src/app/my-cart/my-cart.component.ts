import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  address= "6-3-18/1/C/2, Shivarampally, Hyderabad, Telagana";
  isVisibleOnMobile(){
  }

  constructor() { }


  ngOnInit(): void {
  }

}
