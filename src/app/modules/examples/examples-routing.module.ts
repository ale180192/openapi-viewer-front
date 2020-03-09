import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ComponentsComunicationComponent } from './components-comunication/components-comunication.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'components-comunication',
    component: ComponentsComunicationComponent
  },
  {
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    redirectTo: 'menu',
    path: '**'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
