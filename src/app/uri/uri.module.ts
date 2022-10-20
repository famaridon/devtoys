import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UriRoutingModule } from './uri-routing.module';
import { UriComponent } from './uri.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UriComponent],
  imports: [CommonModule, UriRoutingModule, SharedModule],
})
export class UriModule {}
