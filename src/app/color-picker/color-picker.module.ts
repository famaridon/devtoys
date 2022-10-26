import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPickerRoutingModule } from './color-picker-routing.module';
import { ColorPickerComponent } from './color-picker.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ColorPickerComponent],
  imports: [CommonModule, ColorPickerRoutingModule, SharedModule],
})
export class ColorPickerModule {}
