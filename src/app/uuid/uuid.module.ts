import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UuidRoutingModule } from './uuid-routing.module';
import { UuidComponent } from './uuid.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UuidComponent
  ],
  imports: [
    CommonModule,
    UuidRoutingModule,
    SharedModule,
  ]
})
export class UuidModule { }
