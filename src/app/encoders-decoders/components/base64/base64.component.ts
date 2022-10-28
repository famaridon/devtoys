import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Base64Service } from 'src/app/encoders-decoders/services/base64.service';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
})
export class Base64Component {
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

  public constructor(private base64Service: Base64Service) {}

  private somethingChanged(): void {
    if (this.encode) {
      this.base64Service
        .encode(this._input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    } else {
      this.base64Service
        .decode(this._input)
        .pipe(first())
        .subscribe((output) => (this.output = output));
    }
  }
}
