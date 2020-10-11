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
      this.ai.nativeElement.style.textDecoration="none"
      this.r.nativeElement.style.textDecoration="none"
      this.d.nativeElement.style.textDecoration="underline"
       this.showData={
      data:"Custom product details with WPBakery Page Builder plugin go here, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm                                                                                                         of existence in this spot, which was created for the bliss of souls.Full Inforamation I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees",
       }
     }
     else if(i==2)
     {
      this.d.nativeElement.style.fontWeight="300"
      this.d.nativeElement.style.textDecoration="none"
      this.r.nativeElement.style.textDecoration="none"
      this.ai.nativeElement.style.textDecoration="underline"
       this.showData={
        data:"additionalll data",
       }
     }
     else if(i==3)
     {
      this.d.nativeElement.style.fontWeight="300"
      this.d.nativeElement.style.textDecoration="none"
      this.ai.nativeElement.style.textDecoration="none"
      this.r.nativeElement.style.textDecoration="underline"
       this.showData={
        data:"reviews",
       }
     }
     
   }
   images={
     img1:"https://dummyimage.com/800x800/00e1ff/000000",
     img2:"https://dummyimage.com/800x800/ff0000/000000",
     img3:"https://dummyimage.com/800x800/fbff00/000000",
     img4:"https://dummyimage.com/800x800/00ff04/000000",
     img5:"https://dummyimage.com/800x800/6a00ff/000000"
   }
   
  
  constructor() { }
  numSlide:number=1
  // fontweight:string="bolder"
  ngOnInit(): void {
    setTimeout(()=>{
      this.d.nativeElement.style.fontWeight="bolder"
      this.d.nativeElement.style.textDecoration="underline"
      // console.log(this.d.nativeElement.style);
    },100)
    // setInterval(()=>{
    //   this.getNum()
      
    //   this.numSlide++;

    //   this.numSlide == 6 ? this.numSlide = 1 : this.numSlide; 
    //   // console.log(this.numSlide)
    //   this.currentDiv(this.numSlide);
      
    // },3000);
    
    
  }
  
  @ViewChild('i1') i1:ElementRef;
  @ViewChild('i2') i2:ElementRef;
  @ViewChild('i3') i3:ElementRef;
  @ViewChild('i4') i4:ElementRef;
  @ViewChild('i5') i5:ElementRef;
  @ViewChild('in1') in1:ElementRef;
  @ViewChild('in2') in2:ElementRef;
  @ViewChild('in3') in3:ElementRef;
  @ViewChild('in4') in4:ElementRef;
  @ViewChild('in5') in5:ElementRef;
  @ViewChild('ins1') ins1:ElementRef;
  @ViewChild('ins2') ins2:ElementRef;
  @ViewChild('ins3') ins3:ElementRef;
  @ViewChild('ins4') ins4:ElementRef;
  @ViewChild('ins5') ins5:ElementRef;
  @ViewChild('d') d:ElementRef;
  @ViewChild('ai') ai:ElementRef;
  @ViewChild('r') r:ElementRef;

  getNum(){
    if(this.i1.nativeElement.style.display=='block')
    {
      this.numSlide=1
    }
    if(this.i2.nativeElement.style.display=='block')
    {
      this.numSlide=2
    }
    if(this.i3.nativeElement.style.display=='block')
    {
      this.numSlide=3
    }
    if(this.i4.nativeElement.style.display=='block')
    {
      this.numSlide=4
    }
    if(this.i5.nativeElement.style.display=='block')
    {
      this.numSlide=5
    }
  }
  currentDiv(n){
    this.i1.nativeElement.style.display='none';
      this.i2.nativeElement.style.display='none';
      this.i3.nativeElement.style.display='none';
      this.i4.nativeElement.style.display='none';
      this.i5.nativeElement.style.display='none';
      this.in1.nativeElement.style.border="none";
      this.in2.nativeElement.style.border="none";
      this.in3.nativeElement.style.border="none";
      this.in4.nativeElement.style.border="none";
      this.in5.nativeElement.style.border="none";
      this.ins1.nativeElement.style.border="none";
      this.ins2.nativeElement.style.border="none";
      this.ins3.nativeElement.style.border="none";
      this.ins4.nativeElement.style.border="none";
      this.ins5.nativeElement.style.border="none";
    if(n==1){
      this.i1.nativeElement.style.display='block';
      
      this.in1.nativeElement.style.border="thick solid black";
      this.ins1.nativeElement.style.border="thick solid black";
      


    }
    else if(n==2)
    {
  
      this.i2.nativeElement.style.display='block';
   
      this.in2.nativeElement.style.border="thick solid black";
      this.ins2.nativeElement.style.border="thick solid black";
   
    }
    else if(n==3)
    {
     
      this.i3.nativeElement.style.display='block';
     
      this.in3.nativeElement.style.border="thick solid black";
      this.ins3.nativeElement.style.border="thick solid black";
     
    }
    else if(n==4)
    {
     
      this.i4.nativeElement.style.display='block';
      this.in4.nativeElement.style.border="thick solid black";
      this.ins4.nativeElement.style.border="thick solid black";
      
    }
    else if(n==5)
    {
     
      this.i5.nativeElement.style.display='block';
      this.in5.nativeElement.style.border="thick solid black";
      this.ins5.nativeElement.style.border="thick solid black";
      
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
  i:number=1;
  next(){
    this.i++
    if(this.i==6)
    {
      this.i=1
    }
    this.currentDiv(this.i)
   
  }
  previous()
  {
    this.i--
    if(this.i<1)
    {
      this.i=5
    }
    this.currentDiv(this.i)
    
  }

}
