import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvalidComponent } from './invalid/invalid.component';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list/list.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'lists',
        component: ListComponent
      },
      {
        path: 'sample',
        component: SampleComponent
      },
      {
        path: 'display',
        loadChildren: () => import('./display/display.module').then(m => m.DisplayModule)
      },
      {
        path: '**',
        component: InvalidComponent
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
