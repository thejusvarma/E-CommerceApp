import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-payment-mode',
  templateUrl: './select-payment-mode.component.html',
  styleUrls: ['./select-payment-mode.component.css']
})
export class SelectPaymentModeComponent implements OnInit {

  payments = ['PayU', 'Paytm', 'Cash on Delivery'];
  price = 5000;
  items = 1;
  delivery = 50;
  total = 5200;
  tax = 150;
  constructor() { }

  ngOnInit(): void {
  }

}
