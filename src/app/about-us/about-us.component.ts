import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  isMobile: boolean;
  constructor() {
    this.isMobile = window.innerWidth < 768;

   }

  ngOnInit(): void {
  }

}
