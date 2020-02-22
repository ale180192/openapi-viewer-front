import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-api-schema-detail',
  templateUrl: './api-schema-detail.component.html',
  styleUrls: ['./api-schema-detail.component.scss']
})
export class ApiSchemaDetailComponent implements OnInit {
  api: any;
  routeParams: Params;
  queryParams: Params;
  constructor( private activatedRoute: ActivatedRoute ) {
    this.getRouteParams();
   }

  ngOnInit() {
    this.api = {
      name: 'api 1',
      description: 'api 1 de prueba'
    };
    console.log('los query params son los siguientes:')
    console.log(this.queryParams);
    console.log(this.routeParams);
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
