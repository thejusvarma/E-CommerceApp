import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myReactiveForm: FormGroup;
  emailphone='(^[1-9][0-9]*)|([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$)';
  pwd=".{8,}";
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
           emailphoneno: new FormControl(null,[Validators.required,Validators.pattern(this.emailphone)]),
           password: new FormControl(null, [Validators.required,Validators.pattern(this.pwd)])
  
    });
  }
  onSubmit(): void{
    console.log(this.myReactiveForm);
  }
  
}