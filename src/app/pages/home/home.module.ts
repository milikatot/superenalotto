import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GridResultComponent } from './components/grid-result.component';
import { NormalNumberComponent } from './components/normal-number.component';


@NgModule({
  declarations: [
    HomeComponent,
    GridResultComponent,
    NormalNumberComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
