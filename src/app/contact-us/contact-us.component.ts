import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  @ViewChild('f',{static:true}) form : NgForm;
  nextSlide(){
   var number=this.form.value.slider;
   number = number == 4 ? 0 : ++number;
   this.form.controls["slider"].setValue(number);
  }
  myReactiveForm: FormGroup;
  nameField = '[a-zA-Z ]*';
  phoneNumber = '^[1-9][0-9]*';

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      name: new FormControl(null, [ Validators.required, Validators.pattern(this.nameField)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumber)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  } 
  

  onSubmit(): void{
    console.log(this.myReactiveForm);
  }


}
