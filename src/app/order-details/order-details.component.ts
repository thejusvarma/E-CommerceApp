import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  dataRe = [
    {
    orderstatus: "shipped",
    cancellationDate: "Fri, 18th sep",
    cancellationTime: "4:50 pm",
    cancellationReason: "Due to high demand and limited stock, your item was cancelled.",
    deliveredConfirm: "Your Item has been Delivered.",
    deliveredStatus: "Delivered on Wed, Sep 30",
    shippedConfirm: "Your Item is out for delivery.",
    placedConfirm: "Delivery expected by Oct 06.",
    shippedStatus:"Delivery Expected by Tomorrow, Oct 06",
    productDetails: {
      img:"https://dummyimage.com/800x800/00e1ff/000000",
      productname: "Redmi Note 6 (64GB)",
      price: 20000,
      color: "white",
      seller: "XONIGHT",
    },
    orderBar : ["Ordered","Packed","Shipped"] 
  },
  {
    orderstatus: "deliver",
    cancellationDate: "Fri, 18th sep",
    cancellationTime: "4:50 pm",
    cancellationReason: "Due to high demand and limited stock, your item was cancelled.",
    deliveredConfirm: "Your Item has been Delivered.",
    deliveredStatus: "Delivered on Wed, Sep 30",
    shippedConfirm: "Your Item is out for delivery.",
    placedConfirm: "Delivery expected by Oct 06.",
    shippedStatus:"Delivery Expected by Tomorrow, Oct 06",
    productDetails: {
      img:"https://dummyimage.com/800x800/00e1ff/000000",
      productname: "Redmi Note 6 (64GB)",
      price: 20000,
      color: "white",
      seller: "XONIGHT",
    },
    orderBar :["Ordered","Packed","Shipped","Delivered"]
  }
]

  dataUser = {
    address: "HIG- 5/651 A.P.H.B. Colony, Near Chandini Chowk, Delhi",
    name: "Ravi Shukla",
    phoneNumber: 1234567890,
    rewards: {
      rewardname1: "8 SuperCoins",
      rewardDesc1: "Will be credited after return period is over.",
      rewardname2: "$14 Saved Using SuperCoins",
      rewardDesc2: "14 Coins Paid"
    }
  }

public counts = ["Ordered","Packed","Shipped","Delivered"];
public counts1=["Ordered","Cancelled"]
//   public orderStatus = ["Ordered","Packed"];
  
  constructor() { }

  ngOnInit(): void {
  }

}


  
