import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [
    {
      id: 1,
      name: 'ale'
    },
    {
      id: 2,
      name: 'pedro'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
