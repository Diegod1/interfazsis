import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activePanel = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.activePanel = !this.activePanel;
  }

}
