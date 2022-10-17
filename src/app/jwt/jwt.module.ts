import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JwtRoutingModule } from './jwt-routing.module';
import { JwtComponent } from './jwt.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [JwtComponent],
  imports: [CommonModule, JwtRoutingModule, SharedModule, HighlightModule],
})
export class JwtModule {}
