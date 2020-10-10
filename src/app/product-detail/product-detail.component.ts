import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   productDetails={
     category:"Pots > Copper pot",
     availability:"In Stock",
     productName:"Copper Bucket",
     productPrice:"INR 5600",
     productAbout:"This product may have a manufacturer’s warranty.Please visit the manufacturer’s website or contact us at supporty@colabr.io for full manufacturer warranty details",

   }
   showData={
    data:"Custom product details with WPBakery Page Builder plugin go here, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls.Full Inforamation I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees",

   }
   details(i:number){
     if(i==1)
     {
       this.showData={
      data:"Custom product details with WPBakery Page Builder plugin go here, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm                                                                                                         of existence in this spot, which was created for the bliss of souls.Full Inforamation I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees",
       }
     }
     else if(i==2)
     {
       this.showData={
        data:"additionalll data",
       }
     }
     else if(i==3)
     {
       this.showData={
        data:"reviews",
       }
     }
     
   }
   images={
     img1:"https://dummyimage.com/200x200/00e1ff/000000",
     img2:"https://dummyimage.com/200x200/ff0000/000000",
     img3:"https://dummyimage.com/200x200/fbff00/000000",
     img4:"https://dummyimage.com/200x200/00ff04/000000",
     img5:"https://dummyimage.com/200x200/6a00ff/000000"
   }
   
  
  constructor() { }

  ngOnInit(): void {
  }
  
  @ViewChild('i1') i1:ElementRef;
  @ViewChild('i2') i2:ElementRef;
  @ViewChild('i3') i3:ElementRef;
  @ViewChild('i4') i4:ElementRef;
  @ViewChild('i5') i5:ElementRef;
  
  currentDiv(n){
    if(n==1){
      this.i1.nativeElement.style.display='block';
      this.i2.nativeElement.style.display='none';
      this.i3.nativeElement.style.display='none';
      this.i4.nativeElement.style.display='none';
      this.i5.nativeElement.style.display='none';

    }
    else if(n==2)
    {
      this.i1.nativeElement.style.display='none';
      this.i2.nativeElement.style.display='block';
      this.i3.nativeElement.style.display='none';
      this.i4.nativeElement.style.display='none';
      this.i5.nativeElement.style.display='none';
    }
    else if(n==3)
    {
      this.i1.nativeElement.style.display='none';
      this.i2.nativeElement.style.display='none';
      this.i3.nativeElement.style.display='block';
      this.i4.nativeElement.style.display='none';
      this.i5.nativeElement.style.display='none';
    }
    else if(n==4)
    {
      this.i1.nativeElement.style.display='none';
      this.i2.nativeElement.style.display='none';
      this.i3.nativeElement.style.display='none';
      this.i4.nativeElement.style.display='block';
      this.i5.nativeElement.style.display='none';
    }
    else if(n==5)
    {
      this.i1.nativeElement.style.display='none';
      this.i2.nativeElement.style.display='none';
      this.i3.nativeElement.style.display='none';
      this.i4.nativeElement.style.display='none';
      this.i5.nativeElement.style.display='block';
    }
  }
  count:number=1;
  increaseCount(){
    return this.count++;
  }
  decreaseCount(){
    if(this.count==1){
      return this.count;
    }
    return this.count--;

  }
  

}
