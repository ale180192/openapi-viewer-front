import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ApiSchemaService } from '../api-schema.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiSchema } from '../api-schema.model';
import { FabButton } from '../../shared/models/fab-button.model';
import { ApiSchemaDetailComponent } from '../api-schema-detail/api-schema-detail.component';

@Component({
  selector: 'app-api-schema-list',
  templateUrl: './api-schema-list.component.html',
  styleUrls: ['./api-schema-list.component.scss']
})
export class ApiSchemaListComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<ApiSchema>;
  displayedColumns: string[] = ['name', 'description', 'id'];
  data: ApiSchema[];
  isLoading: boolean;
  fabButtons: FabButton [] = [{icon: 'add', actionName: 'New api schema'}];
  private apiSchemaSubscription: Subscription;
  @ViewChild(MatPaginator, {read: true, static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {read: true, static: true}) sort: MatSort;

  constructor( private apiSchemaService: ApiSchemaService, private router: Router ) {
    this.apiSchemaSubscription = apiSchemaService.getApiSchemaListener().subscribe( apiSchemaList => {
      this.data = apiSchemaList;
    } );
   }

  ngOnInit() {
    this.renderTable();
    console.log('fab is ', this.fabButtons);
  }

  ngOnDestroy(): void {
    this.apiSchemaSubscription.unsubscribe();
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

  edit(id: number) {
    console.log('click on edit for element', id);
    this.router.navigate(['apis/detail', id]);
  }

  add(apiSchema: ApiSchema) {
    this.apiSchemaService.add(apiSchema);
  }

  fabButtonActionClick(action: FabButton) {
    console.log('action click', action);
    switch(action.icon) {
      case 'add': {
        this.openDialog();
      }
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ApiSchemaDetailComponent, {
      width: '250px',
      data:obj
    });
  }
}
