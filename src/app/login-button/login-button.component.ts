import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { OtpComponent } from '../otp/otp.component';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openLogin(){
    this.dialog.open(LoginComponent,{width:'900px'});
  }
  openSignup(){
    this.dialog.open(SignupComponent,{width:'900px'});
  }
  openotp(){
    this.dialog.open(OtpComponent,{width:'700px'});
  }
  ngOnInit(): void {
  }

}
