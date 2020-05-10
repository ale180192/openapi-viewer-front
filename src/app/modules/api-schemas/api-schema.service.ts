import { Injectable } from '@angular/core';
import { ApiSchema } from './api-schema.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ApiSchemaService {
  private data: ApiSchema[] = [];
  private baseUrl = 'http://localhost:8000';
  apiSchemaUpdated = new Subject<{ results: ApiSchema[], count: number }>();

  constructor(private client: HttpClient) {}

  getApiSchemaListener() {
    return this.apiSchemaUpdated.asObservable();
  }

  get(itemsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${itemsPerPage}&page=${currentPage}`;
    this.client.get<{ message: string; items: any; maxItems: number }>(
                `${this.baseUrl}/api/v1/apisfake-pagination` + queryParams
              ).subscribe( (response: any) => {
                console.log('response is ', response);
                this.data = response.results;
                this.apiSchemaUpdated.next({
                  results: [...this.data],
                  count: response.count
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
    this.client.post(`${this.baseUrl}/api/v1/apisfake`, apiSchema).subscribe((response: any) => {
      console.log('Response server is');
      console.log(response);
      this.data.push(apiSchema);
      this.apiSchemaUpdated.next({ results: [...this.data], count: response.total });
    });
  }

  delete(id: number) {
    return new Promise( (resolve, reject) => {
      this.client.delete(`${this.baseUrl}/api/v1/apisfake/${id}`).subscribe(response =>  {
        resolve(true);
      });
    });
  }

}
