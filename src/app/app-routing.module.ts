import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'base64', loadChildren: () => import('./base64/base64.module').then(m => m.Base64Module) }, { path: 'uuid', loadChildren: () => import('./uuid/uuid.module').then(m => m.UuidModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
