import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatDialogModule } from '@angular/material';

import { ApiSchemasRoutingModule } from './api-schemas-routing.module';
import { ApiSchemaListComponent } from './api-schema-list/api-schema-list.component';
import { ApiSchemaDetailComponent } from './api-schema-detail/api-schema-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      ApiSchemaListComponent,
      ApiSchemaDetailComponent,
    ],
  imports: [
    CommonModule,
    ApiSchemasRoutingModule,
    MatTableModule,
    SharedModule,
    MatDialogModule,
  ],
  exports: []
})
export class ApiSchemasModule { }
