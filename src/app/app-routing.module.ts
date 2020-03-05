import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'apis',
    loadChildren: './modules/api-schemas/api-schemas.module#ApiSchemasModule'
  },
  {
    path: 'examples',
    loadChildren: './modules/examples/examples.module#ExamplesModule'
  },
  {
    path: '**',
    redirectTo: 'examples'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
