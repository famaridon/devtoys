import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonFormatterComponent } from 'src/app/formatters/components/json/json-formatter.component';
import { FormattersComponent } from './formatters.component';

const routes: Routes = [
  { path: '', component: FormattersComponent },
  { path: 'json', component: JsonFormatterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormattersRoutingModule {}
