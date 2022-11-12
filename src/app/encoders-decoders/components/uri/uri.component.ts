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
    private uriService: UriService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService
      .getItem<UriPreference>(URI_PREFERENCE_KEY, DEFAULT_URI_PREFERENCE)
      .subscribe((pref) => {
        this._encode = pref.encode;
        this._input = pref.input;
      });
  }

  private somethingChanged(): void {
    this.localStorageService.setItem<UriPreference>(URI_PREFERENCE_KEY, {
      encode: this._encode,
      input: this._input,
    });
    if (this.encode) {
      this.uriService
        .encode(this._input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    } else {
      this.uriService
        .decode(this._input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    }
  }
}
