import { NgModule } from '@angular/core';
import { Base64RoutingModule } from './base64-routing.module';
import { Base64Component } from './base64.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [Base64Component],
  imports: [Base64RoutingModule, SharedModule],
})
export class Base64Module {}
