import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewRef,
} from '@angular/core';
import { first } from 'rxjs';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { Base64Service } from 'src/app/encoders-decoders/services/base64.service';

type ImageBase64Preference = {
  encode: boolean;
};
const IMAGE_BASE64_PREFERENCE_KEY = 'imageBase64';

const DEFAULT_IMAGE_BASE64_PREFERENCE: ImageBase64Preference = {
  encode: true,
};

@Component({
  selector: 'app-image-base64',
  templateUrl: './image-base64.component.html',
})
export class ImageBase64Component {
  public options: ImageBase64Preference = DEFAULT_IMAGE_BASE64_PREFERENCE;
  @ViewChild('fileUpload')
  public fileChooser: ElementRef | null = null;
  public base64: string = '';
  public constructor(
    private base64Service: Base64Service,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService
      .getItem(IMAGE_BASE64_PREFERENCE_KEY, DEFAULT_IMAGE_BASE64_PREFERENCE)
      .subscribe((options) => (this.options = options));
  }

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
