import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { UriService } from 'src/app/encoders-decoders/services/uri.service';

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
  set input(input: string) {
    this._input = input;
    this.somethingChanged();
  }
  get input(): string {
    return this._input;
  }

  public output: string = '';

  constructor(private uriService: UriService) {}

  private somethingChanged(): void {
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
