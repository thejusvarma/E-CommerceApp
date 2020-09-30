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


  isVisibleOnMobile(){

  }
  constructor() { }

  ngOnInit(): void {
  }

}
