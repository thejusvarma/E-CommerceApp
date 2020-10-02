import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments = ['PayU', 'Paytm', 'Cash on Delivery'];
  constructor() { }

  ngOnInit(): void {
  }

}
