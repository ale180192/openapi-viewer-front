import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupAngularComponent } from './signup-angular/signup-angular.component';


const routes: Routes = [
  {
    path: 'signout',
    component: SignoutComponent
  },
  {
    path: 'signup-angular',
    component: SignupAngularComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MatFormFieldModule, MatIconModule, MatInputModule]
})
export class LoginRoutingModule { }
