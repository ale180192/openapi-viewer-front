import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
export class ApiSchemaListComponent implements OnInit, AfterViewInit, OnDestroy {
  dataSource: MatTableDataSource<ApiSchema>;
  displayedColumns: string[] = ['name', 'description', 'id'];
  data: ApiSchema[];
  isLoading: boolean;
  fabButtons: FabButton [] = [{icon: 'add', actionName: 'New api schema'}];
  private apiSchemaSubscription: Subscription;
  @ViewChild(MatPaginator, {read: false, static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {read: false, static: false}) sort: MatSort;

  constructor( private apiSchemaService: ApiSchemaService, private router: Router, private dialog: MatDialog ) {
    this.apiSchemaSubscription = apiSchemaService.getApiSchemaListener().subscribe( apiSchemaList => {
      this.data = apiSchemaList;
      console.log('on updated', this.data);
      this.refresh();
    } );
   }

  async ngOnInit() {
    this.data = await this.apiSchemaService.getAll();
    console.log('data on list is ', this.data);
    this.renderTable(this.data);
  }

  ngAfterViewInit(): void {
    console.log('afterviewinit');
  }

  ngOnDestroy(): void {
    this.apiSchemaSubscription.unsubscribe();
  }

  renderTable(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.isLoading = false;
  }

  refresh() {
    this.dataSource.data = this.data;
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
    console.log('add service');
    console.log(apiSchema);
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
      width: '400px',
      data: []
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('call afterclose on list');
      console.log(result);
      switch ( result.event ) {
        case 'cancel': {
          console.log('on list element. cancel');
          break;
        }
        case 'create': {
          console.log('on list element. create');
          console.log(result.event, result.data);
          this.add(result.data);
          break;
        }
      }
    });
  }
}
