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
  private _encode: boolean = true;
  public get encode(): boolean {
    return this._encode;
  }
  public set encode(value: boolean) {
    this._encode = value;
    this.somethingChanged();
  }

  private _input: string = '';
  public set input(input: string) {
    this._input = input;
    this.somethingChanged();
  }
  public get input(): string {
    return this._input;
  }

  public output: string = '';

  public constructor(
    private htmlService: HtmlService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService
      .getItem<HtmlPreference>(HTML_PREFERENCE_KEY, DEFAULT_HTML_PREFERENCE)
      .subscribe((pref) => {
        this._encode = pref.encode;
        this._input = pref.input;
      });
  }

  private somethingChanged(): void {
    this.localStorageService.setItem<HtmlPreference>(HTML_PREFERENCE_KEY, {
      encode: this._encode,
      input: this._input,
    });
    if (this.encode) {
      this.htmlService
        .encode(this._input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    } else {
      this.htmlService
        .decode(this._input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    }
  }
}
