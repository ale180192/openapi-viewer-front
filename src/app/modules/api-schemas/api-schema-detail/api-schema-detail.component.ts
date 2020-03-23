import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiSchemaService } from '../api-schema.service';

@Component({
  selector: 'app-api-schema-detail',
  templateUrl: './api-schema-detail.component.html',
  styleUrls: ['./api-schema-detail.component.scss']
})
export class ApiSchemaDetailComponent implements OnInit {
  api: any;
  routeParams: Params;
  queryParams: Params;
  constructor( private activatedRoute: ActivatedRoute, private apiSchemaService: ApiSchemaService ) {
    this.getRouteParams();
   }

  ngOnInit() {
    console.log('los query params son los siguientes:')
    console.log(this.queryParams);
    console.log(this.routeParams);
    this.api = this.apiSchemaService.getById(1);
  }

  getRouteParams() {
    this.activatedRoute.params.subscribe( params => {
      this.routeParams = params;
    } );

    this.activatedRoute.queryParams.subscribe( queryparams => {
      this.queryParams = queryparams;
    } );
  }

}
