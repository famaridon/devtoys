import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'base64',
    loadChildren: () =>
      import('./base64/base64.module').then((m) => m.Base64Module),
  },
  {
    path: 'uuid',
    loadChildren: () => import('./uuid/uuid.module').then((m) => m.UuidModule),
  },
  {
    path: 'json-formatter',
    loadChildren: () =>
      import('./json-formatter/json-formatter.module').then(
        (m) => m.JsonFormatterModule
      ),
  },
  {
    path: 'lorem-ipsum',
    loadChildren: () =>
      import('./lorem-ipsum/lorem-ipsum.module').then(
        (m) => m.LoremIpsumModule
      ),
  },
  {
    path: 'jwt',
    loadChildren: () => import('./jwt/jwt.module').then((m) => m.JwtModule),
  },
  {
    path: 'uri',
    loadChildren: () => import('./uri/uri.module').then((m) => m.UriModule),
  },
  {
    path: 'html',
    loadChildren: () => import('./html/html.module').then((m) => m.HtmlModule),
  },
  {
    path: 'imageBase64',
    loadChildren: () =>
      import('./image-base64/image-base64.module').then(
        (m) => m.ImageBase64Module
      ),
  },
  {
    path: 'color-picker',
    loadChildren: () =>
      import('./color-picker/color-picker.module').then(
        (m) => m.ColorPickerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
