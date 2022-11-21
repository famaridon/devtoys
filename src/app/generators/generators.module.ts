import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneratorsRoutingModule } from './generators-routing.module';
import { GeneratorsComponent } from './generators.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoremIpsumComponent } from 'src/app/generators/components/lorem-ipsum/lorem-ipsum.component';
import { UuidComponent } from 'src/app/generators/components/uuid/uuid.component';
import { LoremIpsumService } from 'src/app/generators/services/lorem-ipsum.service';
import { UUIDService } from 'src/app/generators/services/uuid.service';
import { PasswordComponent } from './components/password/password.component';

@NgModule({
  declarations: [
    GeneratorsComponent,
    LoremIpsumComponent,
    UuidComponent,
    PasswordComponent,
  ],

  imports: [CommonModule, GeneratorsRoutingModule, SharedModule],
  providers: [LoremIpsumService, UUIDService],
})
export class GeneratorsModule {}
