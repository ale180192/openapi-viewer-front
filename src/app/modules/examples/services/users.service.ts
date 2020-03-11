import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User []>();
  constructor() { }

  getUsersUpdatedListener() {
    return this.usersUpdated.asObservable();
  }

  addUser(id, name) {
    const user: User = {id: id, name: name};
    this.users.push(user);
    this.usersUpdated.next([...this.users]);
  }
}
