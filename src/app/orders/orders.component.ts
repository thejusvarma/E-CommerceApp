import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders = [

  { orderid: 5467389201, items: [{img: 'assets/images/pic1.png' ,
  name: 'product name', orderstatus: 0, price: 300 , size: 2 , status: 'Not yet dispatched' ,  quantity: 2 , color: 'yellow'},

  {img: 'assets/images/pic1.png' , name: 'product name', orderstatus: 0, price: 300 , size: 4 ,
  status: ' delivery expected by 5th october 2020' ,  quantity: 3, color: 'yellow'}] } ,

  { orderid: 5467389202, items: [{img: 'assets/images/pic1.png' ,
  name: 'product name', orderstatus: 0, price: 500 , size: 1 , status: 'dispatched' ,  quantity: 2,  color: 'red'}] },

  { orderid: 5467389203, items: [{img: 'assets/images/pic1.png' ,
  name: 'product name', orderstatus: 1, price: 500 , size: 4 , status: 'delivered',  quantity: 1, color: 'green'},
  {img: 'assets/images/pic1.png' ,
  name: 'product name', orderstatus: -1, price: 300 , size: 3 , status: 'Cancelled',  quantity: 1, color: 'yellow'}] } ,


  { orderid: 5467389204, items: [{img: 'assets/images/pic1.png' ,
  name: 'product name', orderstatus: -1, price: 3000 , size: 4 , status: 'item returned' ,  quantity: 1,  color: 'red'}] },
  ];




  order;
  l: number;
  constructor() { }

  ngOnInit(): void {
    this.l = this.orders.length;
    this.order = this.orders.slice(0, this.l);
  }
}



