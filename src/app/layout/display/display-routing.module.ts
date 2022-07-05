import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '',
    component: DisplayComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'list1',
        component: List1Component
      },
      {
        path: 'list2',
        component: List2Component
      },
      {
        path: 'list3',
        component: List3Component
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
export class DisplayRoutingModule { }
