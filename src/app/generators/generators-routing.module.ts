import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoremIpsumComponent } from 'src/app/generators/components/lorem-ipsum/lorem-ipsum.component';
import { UuidComponent } from 'src/app/generators/components/uuid/uuid.component';
import { GeneratorsComponent } from './generators.component';

const routes: Routes = [
  { path: '', component: GeneratorsComponent },
  { path: 'lorem-ipsum', component: LoremIpsumComponent },
  { path: 'uuid', component: UuidComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneratorsRoutingModule {}
