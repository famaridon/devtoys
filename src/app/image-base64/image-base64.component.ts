import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewRef,
} from '@angular/core';
import { first } from 'rxjs';
import { Base64Service } from 'src/app/core/base64.service';

@Component({
  selector: 'app-image-base64',
  templateUrl: './image-base64.component.html',
})
export class ImageBase64Component {
  @ViewChild('fileUpload')
  public fileChooser: ElementRef | null = null;

  public encode: boolean = true;
  public base64: string = '';
  constructor(private base64Service: Base64Service) {}

  public openFileChooser(): void {
    (this.fileChooser?.nativeElement as HTMLInputElement).click();
  }

  public onFileSelected(): void {
    const files: FileList | null = (
      this.fileChooser?.nativeElement as HTMLInputElement
    ).files;
    const selectedFile = files?.item(0);
    if (selectedFile == null) {
      return;
    }
    this.base64Service
      .encode(selectedFile)
      .pipe(first())
      .subscribe((output) => (this.base64 = output));
  }
}
