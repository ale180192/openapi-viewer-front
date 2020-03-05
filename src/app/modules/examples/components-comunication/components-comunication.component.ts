import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-components-comunication',
  templateUrl: './components-comunication.component.html',
  styleUrls: ['./components-comunication.component.scss']
})
export class ComponentsComunicationComponent implements OnInit {
  titleChildren: string;
  constructor() { }

  users: User[] = [];
  ngOnInit() {
    console.log('init componentscomunication');
  }

  addUser(user) {
    console.log('call add user on parent');
    console.log(user);
    this.users.push(user);
  }


}
