import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-place-success',
  templateUrl: './order-place-success.component.html',
  styleUrls: ['./order-place-success.component.css']
})
export class OrderPlaceSuccessComponent implements OnInit {
  isMobile: boolean=false;
  loading = true;
  image = 'assets/test1.gif';
  constructor() {
   }

  ngOnInit(): void {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
      this.isMobile=true;
    }
    setTimeout(() => {
      this.image = '';
    }, 3000);
  }

}
