import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncodersDecodersRoutingModule } from './encoders-decoders-routing.module';
import { EncodersDecodersComponent } from './encoders-decoders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Base64Component } from 'src/app/encoders-decoders/components/base64/base64.component';
import { HtmlComponent } from 'src/app/encoders-decoders/components/html/html.component';
import { ImageBase64Component } from 'src/app/encoders-decoders/components/image-base64/image-base64.component';
import { JwtComponent } from 'src/app/encoders-decoders/components/jwt/jwt.component';
import { UriComponent } from 'src/app/encoders-decoders/components/uri/uri.component';
import { HighlightModule } from 'ngx-highlightjs';
import { Base64Service } from 'src/app/encoders-decoders/services/base64.service';
import { HtmlService } from 'src/app/encoders-decoders/services/html.service';
import { JwtService } from 'src/app/encoders-decoders/services/jwt.service';
import { UriService } from 'src/app/encoders-decoders/services/uri.service';

@NgModule({
  declarations: [
    EncodersDecodersComponent,
    Base64Component,
    HtmlComponent,
    ImageBase64Component,
    JwtComponent,
    UriComponent,
  ],
  imports: [
    CommonModule,
    EncodersDecodersRoutingModule,
    SharedModule,
    HighlightModule,
  ],
  providers: [Base64Service, HtmlService, JwtService, UriService],
})
export class EncodersDecodersModule {}
