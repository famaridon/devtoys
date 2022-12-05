import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
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
import { MatDialogModule } from '@angular/material/dialog';
import { ConfigurationOptionComponent } from './configuration/configuration-option.component';

@NgModule({
  declarations: [
    ConfigurationComponent,
    InputComponent,
    OutputComponent,
    ConfigurationOptionComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatSliderModule,
    ConfigurationComponent,
    ConfigurationOptionComponent,
    InputComponent,
    OutputComponent,
  ],
})
export class SharedModule {}
