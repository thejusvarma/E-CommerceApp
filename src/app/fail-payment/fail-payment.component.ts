import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fail-payment',
  templateUrl: './fail-payment.component.html',
  styleUrls: ['./fail-payment.component.css']
})
export class FailPaymentComponent implements OnInit {
  isMobile: boolean=false;
  loading = false;
  orderValue : number = 199;
  orderId : number = 94115487952;
  paymentLink : string ="/payment-fail";
  customerName:string = "XYZ";
  customerAdd:string = "Xyz";
  customerNumber = "+91 98765431";
  trackNumber = "+91 98765431";
  orderLink = "payment-fail";
  image = 'assets/fail.gif';
  constructor() {
   }

  ngOnInit(): void {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
      this.isMobile=true;
    }
    setTimeout(() => {
      this.image = '';
      this.loading=true;
    }, 1000);
  }
}
