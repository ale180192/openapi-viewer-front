import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { ApiSchemaListComponent } from './api-schema-list/api-schema-list.component';
import { ApiSchemaDetailComponent } from './api-schema-detail/api-schema-detail.component';


const routes: Routes = [
  {
    path: 'list',
    component: ApiSchemaListComponent
  },
  {
    path: ':id',
    component: ApiSchemaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule]
})
export class ApiSchemasRoutingModule { }
