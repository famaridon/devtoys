import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Base64RoutingModule } from './base64-routing.module';
import { Base64Component } from './base64.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    Base64Component
  ],
  imports: [
    CommonModule,
    Base64RoutingModule,
    FormsModule,
    MatInputModule
  ]
})
export class Base64Module { }
