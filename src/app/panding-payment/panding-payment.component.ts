import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panding-payment',
  templateUrl: './panding-payment.component.html',
  styleUrls: ['./panding-payment.component.css']
})
export class PandingPaymentComponent implements OnInit {
  orderValue : number = 199;
  orderId : number = 94115487952;
  paymentLink : string ="/payment-panding";
  customerName:string = "harsh";
  customerAdd:string = "Xyz";
  customerNumber = "+91 98765431";
  trackNumber = "+91 98765431";
  isMobile: boolean=false;
  myOrder:string = "/payment-panding";
  image = 'assets/clock.png';
  constructor() {
   }

  ngOnInit(): void {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
      this.isMobile=true;
    }
  }
}
