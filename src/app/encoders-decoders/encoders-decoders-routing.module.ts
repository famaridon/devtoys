import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64Component } from 'src/app/encoders-decoders/components/base64/base64.component';
import { HtmlComponent } from 'src/app/encoders-decoders/components/html/html.component';
import { ImageBase64Component } from 'src/app/encoders-decoders/components/image-base64/image-base64.component';
import { JwtComponent } from 'src/app/encoders-decoders/components/jwt/jwt.component';
import { UriComponent } from 'src/app/encoders-decoders/components/uri/uri.component';
import { EncodersDecodersComponent } from './encoders-decoders.component';

const routes: Routes = [
  { path: '', component: EncodersDecodersComponent },
  { path: 'base64', component: Base64Component },
  { path: 'image-base64', component: ImageBase64Component },
  { path: 'html', component: HtmlComponent },
  { path: 'jwt', component: JwtComponent },
  { path: 'uri', component: UriComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncodersDecodersRoutingModule {}
