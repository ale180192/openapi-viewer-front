import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  exports: [RouterModule]
})
export class ApiSchemasRoutingModule { }
