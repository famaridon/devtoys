import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { UriService } from 'src/app/encoders-decoders/services/uri.service';

type UriPreference = {
  encode: boolean;
  input: string;
};
const URI_PREFERENCE_KEY = 'uri';

const DEFAULT_URI_PREFERENCE: UriPreference = {
  encode: true,
  input: '',
};

@Component({
  selector: 'app-uri',
  templateUrl: './uri.component.html',
})
export class UriComponent {
  public options: UriPreference = DEFAULT_URI_PREFERENCE;
  public output: string = '';

  public constructor(
    private uriService: UriService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService
      .getItem<UriPreference>(URI_PREFERENCE_KEY, DEFAULT_URI_PREFERENCE)
      .subscribe((options) => {
        this.options = options;
        this.updateOutput();
      });
  }

  private updateOutput(): void {
    if (this.options.encode) {
      this.uriService
        .encode(this.options.input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    } else {
      this.uriService
        .decode(this.options.input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    }
  }
}
