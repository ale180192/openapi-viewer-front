import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ApiSchemaListService, ApiSchema } from './api-schema-list-service';

@Component({
  selector: 'app-api-schema-list',
  templateUrl: './api-schema-list.component.html',
  styleUrls: ['./api-schema-list.component.scss']
})
export class ApiSchemaListComponent implements OnInit {

  dataSource: MatTableDataSource<ApiSchema>;
  displayedColumns: string[] = ['name', 'description'];
  data: ApiSchema[];
  isLoading: boolean;
  @ViewChild(MatPaginator, {read: true, static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {read: true, static: true}) sort: MatSort;

  constructor( apiSchemaService: ApiSchemaListService ) {
    this.data = apiSchemaService.getAll();
   }

  ngOnInit() {
    this.renderTable();
  }

  renderTable() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.isLoading = false;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
