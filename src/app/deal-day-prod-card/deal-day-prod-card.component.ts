import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-day-prod-card',
  templateUrl: './deal-day-prod-card.component.html',
  styleUrls: ['./deal-day-prod-card.component.css']
})
export class DealDayProdCardComponent implements OnInit {
images={
  product_image:"https://dummyimage.com/600x600/00e1ff/000000",
  cart_image:"../../../assets/images/cart.svg"
}
  constructor() { }

  ngOnInit(): void {
  }

}
