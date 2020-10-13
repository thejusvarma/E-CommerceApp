import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

@ViewChild('otp1') otp1: ElementRef;
@ViewChild('otp2') otp2: ElementRef;
@ViewChild('otp3') otp3: ElementRef;
@ViewChild('otp4') otp4: ElementRef;
@ViewChild('otp5') otp5: ElementRef;
@ViewChild('otp6') otp6: ElementRef;

 str:any='';

  constructor() { }


  ngOnInit(): void {
     
   
  }
  onKey(event , earlyTxt , currentTxt , nextTxt){
    console.log(event.key)
    if(event.key == 'Tab'){
      earlyTxt.focus()
    }
    else if(event.key == 'Enter' ||event.key == ' '){  //for elemination of space tab enter keys
    currentTxt.focus();
    
    // return
    }
    else if(event.key == 'Backspace'){
      earlyTxt.value=""
      
    earlyTxt.focus();
    }
    else{
      if(currentTxt == 'otp6'){ 
        
        return 0; }
      
    nextTxt.focus();
    }
    
    }
  
   display(){
    this.str= this.otp1.nativeElement.value+this.otp2.nativeElement.value+this.otp3.nativeElement.value+this.otp4.nativeElement.value+this.otp5.nativeElement.value+this.otp6.nativeElement.value;
    
    console.log(this.str)
   }
   
  // var name:string;
  // var str= this.otp1.nativeElement.value
}
	
