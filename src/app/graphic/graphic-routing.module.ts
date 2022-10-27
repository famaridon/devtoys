import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorPickerComponent } from 'src/app/graphic/components/color-picker/color-picker.component';
import { GraphicComponent } from './graphic.component';

const routes: Routes = [
  { path: '', component: GraphicComponent },
  { path: 'color-picker', component: ColorPickerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphicRoutingModule {}
