import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicRoutingModule } from './graphic-routing.module';
import { GraphicComponent } from './graphic.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColorPickerComponent } from 'src/app/graphic/components/color-picker/color-picker.component';
import { ColorPickerModule } from '@iplab/ngx-color-picker';

@NgModule({
  declarations: [GraphicComponent, ColorPickerComponent],
  imports: [
    CommonModule,
    GraphicRoutingModule,
    SharedModule,
    ColorPickerModule,
  ],
})
export class GraphicModule {}
