import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Base64RoutingModule } from './base64-routing.module';
import { Base64Component } from './base64.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    Base64Component
  ],
  imports: [
    CommonModule,
    Base64RoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule
  ]
})
export class Base64Module { }
