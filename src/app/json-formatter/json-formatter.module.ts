import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormatterRoutingModule } from './json-formatter-routing.module';
import { JsonFormatterComponent } from './json-formatter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [JsonFormatterComponent],
  imports: [
    CommonModule,
    JsonFormatterRoutingModule,
    SharedModule,
    HighlightModule,
  ],
  providers: [],
})
export class JsonFormatterModule {}
