import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupAngularComponent } from './signup-angular/signup-angular.component';
import { SignupComponent } from './signup/signup.component';
import { MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  declarations: [LoginComponent, SignoutComponent, SignupAngularComponent, SignupComponent],
  imports: [
    RouterModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class AuthModule { }
