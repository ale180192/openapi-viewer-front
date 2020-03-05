import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ComponentsComunicationComponent } from './components-comunication/components-comunication.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MenuComponent, ComponentsComunicationComponent, UserListComponent, UserCreateComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExamplesModule { }
