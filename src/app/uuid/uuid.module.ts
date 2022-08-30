import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UuidRoutingModule } from './uuid-routing.module';
import { UuidComponent } from './uuid.component';


@NgModule({
  declarations: [
    UuidComponent
  ],
  imports: [
    CommonModule,
    UuidRoutingModule
  ]
})
export class UuidModule { }
