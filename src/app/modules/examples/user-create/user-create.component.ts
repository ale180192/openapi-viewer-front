import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  //@Output() user = new EventEmitter();

  constructor( private fb: FormBuilder ) { }
  userForm = this.fb.group({
    name: ['', Validators.required]
  });
  ngOnInit() {
  }

  submit() {
    console.log('call submit', this.userForm.value);
  }

}
