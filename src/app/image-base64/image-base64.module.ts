import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageBase64RoutingModule } from './image-base64-routing.module';
import { ImageBase64Component } from './image-base64.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ImageBase64Component],
  imports: [CommonModule, ImageBase64RoutingModule, SharedModule],
})
export class ImageBase64Module {}
