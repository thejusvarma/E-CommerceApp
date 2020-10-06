import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('order') order;
  orders = [];
  orderid = ' ';
  l;
  constructor() { }

  ngOnInit(): void {
    this.orderid = this.order.orderid;
    this.l = this.order.lenght;
    this.orders = this.order.items;
    console.log(this.orders);
  }

}
