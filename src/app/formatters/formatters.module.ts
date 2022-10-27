import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormattersRoutingModule as FormattersRoutingModule } from './formatters-routing.module';
import { FormattersComponent as FormattersComponent } from './formatters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JsonFormatterComponent } from 'src/app/formatters/components/json/json-formatter.component';
import { HighlightModule } from 'ngx-highlightjs';
import { JsonService } from 'src/app/formatters/services/json.service';

@NgModule({
  declarations: [FormattersComponent, JsonFormatterComponent],
  imports: [
    CommonModule,
    FormattersRoutingModule,
    SharedModule,
    HighlightModule,
  ],
  providers: [JsonService],
})
export class FormattersModule {}
