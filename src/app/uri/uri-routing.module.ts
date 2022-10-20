import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UriComponent } from './uri.component';

const routes: Routes = [{ path: '', component: UriComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UriRoutingModule {}
