import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-place-success',
  templateUrl: './order-place-success.component.html',
  styleUrls: ['./order-place-success.component.css']
})
export class OrderPlaceSuccessComponent implements OnInit {
  isMobile: boolean;
  loading = true;
  image = 'assets/test1.gif';
  constructor() {
    this.isMobile = window.innerWidth < 768;
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.image = '';
    }, 3000);
  }

}
