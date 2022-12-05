import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { HtmlService } from 'src/app/encoders-decoders/services/html.service';

type HtmlPreference = {
  encode: boolean;
  input: string;
};
const HTML_PREFERENCE_KEY = 'html';

const DEFAULT_HTML_PREFERENCE: HtmlPreference = {
  encode: true,
  input: '',
};

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
})
export class HtmlComponent {
  public options: HtmlPreference = DEFAULT_HTML_PREFERENCE;

  public output: string = '';

  public constructor(
    private htmlService: HtmlService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService
      .getItem<HtmlPreference>(HTML_PREFERENCE_KEY, DEFAULT_HTML_PREFERENCE)
      .subscribe((options) => {
        this.options = options;
        this.updateOutput();
      });
  }

  private updateOutput(): void {
    if (this.options.encode) {
      this.htmlService
        .encode(this.options.input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    } else {
      this.htmlService
        .decode(this.options.input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    }
  }
}
