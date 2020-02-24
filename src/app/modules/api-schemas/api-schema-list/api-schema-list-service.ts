import { Injectable } from '@angular/core';



export interface ApiSchema {
  id: number;
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
        id: 1,
        name: 'api google',
        description: 'esta es la api de google'
      },
      {
        id: 2,
        name: 'api de twitter',
        description: 'Esta es la api de twitter'
      }
    ]
  }
}
