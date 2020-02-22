import { Component, OnInit } from '@angular/core';
import { ApiSchemaListService } from './api-schema-list-service';

@Component({
  selector: 'app-api-schema-list',
  templateUrl: './api-schema-list.component.html',
  styleUrls: ['./api-schema-list.component.scss']
})
export class ApiSchemaListComponent implements OnInit {

  apis: any[];
  displayedColumns: String[] = ['name', 'description'];
  constructor( apiSchemaService: ApiSchemaListService ) {
    this.apis = apiSchemaService.getAll();
   }

  ngOnInit() {
  }

}
