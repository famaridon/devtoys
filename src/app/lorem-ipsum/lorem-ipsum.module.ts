import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoremIpsumRoutingModule } from './lorem-ipsum-routing.module';
import { LoremIpsumComponent } from './lorem-ipsum.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoremIpsumComponent],
  imports: [CommonModule, SharedModule, LoremIpsumRoutingModule],
})
export class LoremIpsumModule {}
