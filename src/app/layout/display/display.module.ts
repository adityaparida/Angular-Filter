import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { DisplayComponent } from './display.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';
import { TopComponent } from './top/top.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [DisplayComponent, List1Component, List2Component, List3Component, TopComponent, MainComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule
  ]
})
export class DisplayModule { }
