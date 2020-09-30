import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  panelOpenState = false;
  close() {

    this.sidenav.close();
  }
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
