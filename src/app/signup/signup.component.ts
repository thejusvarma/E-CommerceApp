import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  
})

export class SignupComponent implements OnInit {

  @ViewChild('pwd') pwd : ElementRef; 
  @ViewChild('cpwd') cpwd : ElementRef;
  flag:boolean; 
  constructor() { }

 
  myReactiveForm: FormGroup;
  firstnameField = '[a-zA-Z ]*';
  lastnameField = '[a-zA-Z ]*';
  phoneNumber = '^[1-9][0-9]*';
  pass =".{8,}";

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      firstname: new FormControl(null, [ Validators.required, Validators.pattern(this.firstnameField)]),
      lastname: new FormControl(null, [ Validators.required, Validators.pattern(this.lastnameField)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumber)]),
      password: new FormControl(null, [Validators.required,Validators.pattern(this.pass)])
    });
  }
  // onSubmit(): void{
  //   // let temp =document.getElementById('temp')
  //   console.log(this.pwd.nativeElement.value);
  // }

  showError(){
    if(this.pwd.nativeElement.value === this.cpwd.nativeElement.value)
    {
      this.flag=false 
    }
    else{
      this.flag=true
    }
  }

  onSubmit(){
       this.showError()
       
  }
}

