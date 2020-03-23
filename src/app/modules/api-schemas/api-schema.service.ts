import { Injectable } from '@angular/core';
import { ApiSchema } from './api-schema.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSchemaService {
  private data: ApiSchema[] = [];
  apiSchemaUpdated = new Subject<ApiSchema []>();

  constructor() { }

  getApiSchemaListener() {
    return this.apiSchemaUpdated.asObservable();
  }

  getAll(): ApiSchema[] {
    return [...this.data];
  }

  getById(id: number){
    this.data.forEach( (apiSchema: ApiSchema) => {
      // tslint:disable-next-line: curly
      if (apiSchema.id === id )
        return apiSchema;
      });
  }

  add(apiSchema: ApiSchema) {
    this.data.push(apiSchema);
    this.apiSchemaUpdated.next([...this.data]);
  }

}
