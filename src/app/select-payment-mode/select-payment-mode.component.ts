import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-payment-mode',
  templateUrl: './select-payment-mode.component.html',
  styleUrls: ['./select-payment-mode.component.css']
})
export class SelectPaymentModeComponent implements OnInit {

  payments = ['PayU', 'Paytm', 'Cash on Delivery'];
  constructor() { }

  ngOnInit(): void {
  }

}
