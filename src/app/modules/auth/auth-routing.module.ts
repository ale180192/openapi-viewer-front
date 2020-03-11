import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { LoginComponent } from './login/login.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupAngularComponent } from './signup-angular/signup-angular.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signout',
    component: SignoutComponent
  },
  {
    path: 'signup-angular',
    component: SignupAngularComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MatFormFieldModule, MatIconModule, MatInputModule]
})
export class AuthRoutingModule { }
