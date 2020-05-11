import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

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
  public isAuthenticated = this.authService.getIsAuth();
  private authSubscription: Subscription;
  public isLoading = false;

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService ) {
    this.authSubscription = this.authService.getAuthStatusListener().subscribe( isAuth => {
      console.log('result updated flag', isAuth);
      this.isAuthenticated = isAuth;
      this.isLoading = false;
    });
    if (this.isAuthenticated) {
      this.router.navigate(['/apis/list']);
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isLoading = true;
    console.log('Login\'s data', this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
  }

}
