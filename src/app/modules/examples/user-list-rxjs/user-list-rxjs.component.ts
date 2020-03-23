import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list-rxjs',
  templateUrl: './user-list-rxjs.component.html',
  styleUrls: ['./user-list-rxjs.component.scss']
})
export class UserListRxjsComponent implements OnInit, OnDestroy {
  users: User[];
  userSub: Subscription;

  constructor( public usersService: UsersService ) { }

  ngOnInit() {
    this.userSub = this.usersService.getUsersUpdatedListener()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
