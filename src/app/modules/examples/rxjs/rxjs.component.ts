import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {
  titleChildren: string;
  userSub: Subscription;
  constructor( public userService: UsersService) { }

  users: User[] = [];
  ngOnInit() {
    this.userSub = this.userService.getUsersUpdatedListener()
      .subscribe((users: User[]) => {
        this.users = users;
      });
    console.log('init componentscomunication');
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
