import { Component, OnInit } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger, {read: false, static: true}) trigger: MatMenuTrigger;

  constructor() { }

  ngOnInit() {
    this.trigger.openMenu();
  }

}
