import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  address = 'Downtown Srinagar, J&K 190002';
  phone = '+91-9541122925';
  mail = 'support@khancopper.com';
  constructor() { }

  ngOnInit(): void {
  }

}
