import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoremIpsumComponent } from './lorem-ipsum.component';

const routes: Routes = [{ path: '', component: LoremIpsumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoremIpsumRoutingModule {}
