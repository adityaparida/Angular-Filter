import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ListComponent } from './list/list.component';
import { SampleComponent } from './sample/sample.component';
import { InvalidComponent } from './invalid/invalid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './services/search.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent, 
    ListComponent, 
    SampleComponent, 
    InvalidComponent, 
    HomeComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SearchPipe
  ]
})
export class LayoutModule { }
