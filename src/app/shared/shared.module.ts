import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ConfigurationComponent } from './configuration/configuration.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [ConfigurationComponent, InputComponent, OutputComponent],
  imports: [CommonModule, MatListModule, FormsModule, MatInputModule],
  exports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    ConfigurationComponent,
    InputComponent,
    OutputComponent,
  ],
})
export class SharedModule {}
