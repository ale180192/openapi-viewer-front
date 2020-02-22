import { Injectable } from '@angular/core';



interface ApiSchema {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiSchemaListService {
  data: ApiSchema[];
  constructor() { }

  getAll(): ApiSchema[] {
    return [
      {
        name: 'api google',
        description: 'esta es la api de google'
      },
      {
        name: 'api de twitter',
        description: 'Esta es la api de twitter'
      }
    ]
  }
}
