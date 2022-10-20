import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { HtmlComponent } from './html.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HtmlComponent],
  imports: [CommonModule, HtmlRoutingModule, SharedModule],
})
export class HtmlModule {}
