import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  examples: any [] = [
    {
      path: 'eventEmitter',
      name: 'EvenEmitter'
    }, {
      path: 'components-comunication',
      name: 'Components comunication'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
