import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  @Output() userAdded = new EventEmitter<boolean>();
  @Input() title: string;
  constructor( private fb: FormBuilder ) { }
  userForm = this.fb.group({
    name: ['', Validators.required]
  });
  ngOnInit() {
  }

  submit() {
    console.log('call submit', this.userForm.value);
  }

  addedUser() {
    this.userAdded.emit(this.userForm.value);
    console.log('call to addedUser on component create user');
  }

}
