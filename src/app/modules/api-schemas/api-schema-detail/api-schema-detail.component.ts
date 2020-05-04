import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { ApiSchemaService } from '../api-schema.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiSchema } from '../api-schema.model';

@Component({
  selector: 'app-api-schema-detail',
  templateUrl: './api-schema-detail.component.html',
  styleUrls: ['./api-schema-detail.component.scss']
})
export class ApiSchemaDetailComponent implements OnInit {
  loginForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });
  api: any;
  routeParams: Params;
  queryParams: Params;
  action: string;
  localData: any;

  constructor( private activatedRoute: ActivatedRoute,
        private apiSchemaService: ApiSchemaService,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ApiSchemaDetailComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: ApiSchema ) {
          console.log('init dialogBox');
          console.log(data);
          this.localData = {...data};
   }

  ngOnInit() {
    console.log('los query params son los siguientes:')
    console.log(this.queryParams);
    console.log(this.routeParams);
    this.api = this.apiSchemaService.getById(1);
  }

  onSubmit() {
    console.log('api create', this.loginForm.value);
    this.localData = this.loginForm.value;
    this.dialogRef.close({event: 'create', data: this.localData});
  }

  closeDialog() {
    console.log('cancel dialog');
    this.dialogRef.close({event: 'cancel'});
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
