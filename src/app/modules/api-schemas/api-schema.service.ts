import { Injectable } from '@angular/core';
import { ApiSchema } from './api-schema.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSchemaService {
  private data: ApiSchema[] = [];
  private baseUrl = 'http://localhost:8000';
  apiSchemaUpdated = new Subject<ApiSchema []>();

  constructor(private client: HttpClient) {
    this.client.get(`${this.baseUrl}/api/v1/apisfake`).subscribe( (response: any) => {
      console.log('on construct is ', response);
      this.data = response;
    });
  }

  getApiSchemaListener() {
    return this.apiSchemaUpdated.asObservable();
  }

  getAll(): any {
    return new Promise( resolve => {
      this.client.get(`${this.baseUrl}/api/v1/apisfake`).subscribe( response => {
        console.log('response is ', response);
        resolve(response);
      });
    });
  }

  getById(id: number){
    this.data.forEach( (apiSchema: ApiSchema) => {
      // tslint:disable-next-line: curly
      if (apiSchema.id === id )
        return apiSchema;
      });
  }

  add(apiSchema: ApiSchema) {
    // TODO: handler status codes of the response
    this.data.push(apiSchema);
    this.client.post(`${this.baseUrl}/api/v1/apisfake`, apiSchema).subscribe(response => {
      console.log('Response server is');
      console.log(response);
    });
    this.apiSchemaUpdated.next([...this.data]);
  }

}
