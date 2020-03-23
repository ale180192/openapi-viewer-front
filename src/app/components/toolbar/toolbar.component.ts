import { Component, OnInit } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger, {read: false, static: false}) trigger: MatMenuTrigger;

  ngOnInit() {
    console.log('ngoninit', this.trigger)
  }

  matMenu() {
    console.log('CLICK ON');
    this.trigger.openMenu();
  }

  redirecSettings() {
    console.log('click to settings')
  }
}
