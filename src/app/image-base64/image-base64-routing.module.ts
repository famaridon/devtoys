import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageBase64Component } from './image-base64.component';

const routes: Routes = [{ path: '', component: ImageBase64Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageBase64RoutingModule {}
