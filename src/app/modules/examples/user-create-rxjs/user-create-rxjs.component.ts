import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-create-rxjs',
  templateUrl: './user-create-rxjs.component.html',
  styleUrls: ['./user-create-rxjs.component.scss']
})
export class UserCreateRxjsComponent implements OnInit {

  @Input() title: string;
  constructor( private fb: FormBuilder, public usersService: UsersService ) { }
  userForm = this.fb.group({
    name: ['', Validators.required]
  });
  ngOnInit() {
  }

  addedUser() {
    this.usersService.addUser(1 , this.userForm.value.name);
    this.userForm.reset();
  }

}
