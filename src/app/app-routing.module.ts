import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'generators',
    loadChildren: () =>
      import('./generators/generators.module').then((m) => m.GeneratorsModule),
  },
  {
    path: 'encoders-decoders',
    loadChildren: () =>
      import('./encoders-decoders/encoders-decoders.module').then(
        (m) => m.EncodersDecodersModule
      ),
  },
  {
    path: 'formatters',
    loadChildren: () =>
      import('./formatters/formatters.module').then((m) => m.FormattersModule),
  },
  {
    path: 'graphic',
    loadChildren: () =>
      import('./graphic/graphic.module').then((m) => m.GraphicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
