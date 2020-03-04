import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { LoginRoutingModule } from './login-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupAngularComponent } from './signup-angular/signup-angular.component';


@NgModule({
  declarations: [SignupComponent, SignoutComponent, SignupAngularComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
