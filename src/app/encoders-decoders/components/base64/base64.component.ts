import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { Base64Service } from 'src/app/encoders-decoders/services/base64.service';

type Base64Preference = {
  encode: boolean;
  input: string;
};

const BASE64_PREFERENCE_KEY = 'base64';

const DEFAULT_BASE64_PREFERENCE: Base64Preference = {
  encode: true,
  input: '',
};

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
})
export class Base64Component {
  public options: Base64Preference = DEFAULT_BASE64_PREFERENCE;

  public output: string = '';

  public constructor(
    private base64Service: Base64Service,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService
      .getItem<Base64Preference>(
        BASE64_PREFERENCE_KEY,
        DEFAULT_BASE64_PREFERENCE
      )
      .subscribe((options) => {
        this.options = options;
        this.updateOutput();
      });
  }

  private updateOutput(): void {
    if (this.options.encode) {
      this.base64Service
        .encode(this.options.input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    } else {
      this.base64Service
        .decode(this.options.input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    }
  }
}
