import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import iro from '@jaames/iro';
import { IroColorPicker } from '@jaames/iro/dist/ColorPicker';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent implements AfterViewInit {
  @ViewChild('picker')
  public pickerElementRef: ElementRef | null = null;
  public picker: IroColorPicker | null = null;
  public color: iro.Color;

  constructor() {
    this.color = new iro.Color('#ff0000');
  }

  ngAfterViewInit(): void {
    if (this.pickerElementRef == null) {
      return;
    }
    this.picker = iro.ColorPicker(this.pickerElementRef.nativeElement, {
      color: this.color,
    });
    this.picker.on('color:change', (color: iro.Color) => (this.color = color));
  }
}
