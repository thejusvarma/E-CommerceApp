import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()  buttonClicked= new EventEmitter();
  onSelect(){
    console.log("sdsasads");
    this.buttonClicked.emit();
  }

  stopPropagation(event){
    event.stopPropagation();
  }

  showCount:number=0;
  show(){
    if(this.showCount==0)
    {
      return this.showCount++;

    }
    if(this.showCount==1)
    {
      return --this.showCount;
    }
  }

  isVisibleOnMobile(){

  }
  constructor() { }

  ngOnInit(): void {
  }

}
