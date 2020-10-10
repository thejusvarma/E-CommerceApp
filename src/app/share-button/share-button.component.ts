import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.css']
})
export class ShareButtonComponent implements OnInit {

  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  focusFunction() {
    var element = document.getElementById("share-button");
    element.classList.add("active");
    this.isOpen = true;
  }
  focusOutFunction() {
    var element = document.getElementById("share-button");
    element.classList.remove("active");
    this.isOpen = false;
  }

  clickFunction() {
    if(this.isOpen)
      { this.focusOutFunction(); }
    else {
      this.focusFunction();
    }

  }

}
