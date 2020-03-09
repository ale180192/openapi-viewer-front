import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ComponentsComunicationComponent } from './components-comunication/components-comunication.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UserCreateRxjsComponent } from './user-create-rxjs/user-create-rxjs.component';
import { UserListRxjsComponent } from './user-list-rxjs/user-list-rxjs.component';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    MenuComponent,
    ComponentsComunicationComponent,
    UserListComponent,
    UserCreateComponent,
    RxjsComponent,
    UserCreateRxjsComponent,
    UserListRxjsComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UsersService
  ]
})
export class ExamplesModule { }
