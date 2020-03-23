import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor( private fb: FormBuilder, private router: Router ) {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Login\'s data', this.loginForm.value);
    this.router.navigate(['/apis/list']);
  }

}
