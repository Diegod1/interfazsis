import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showFiller = false;


  constructor() {
  }


  ngOnInit() {

  }



}
