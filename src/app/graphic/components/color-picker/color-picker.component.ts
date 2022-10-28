import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ColorPickerControl } from '@iplab/ngx-color-picker';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent {
  public sketchControl = new ColorPickerControl().setValueFrom('#A6771C');

  public constructor() {}
}
