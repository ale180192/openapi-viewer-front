import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-angular',
  templateUrl: './signup-angular.component.html',
  styleUrls: ['./signup-angular.component.scss']
})
export class SignupAngularComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)] ]
  });

  constructor( private fb: FormBuilder ) {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Login\'s data', this.loginForm.value);
  }

  fillForm() {
    this.loginForm.patchValue({
      username: 'new username'
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
