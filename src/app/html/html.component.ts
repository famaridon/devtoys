import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { HtmlService } from 'src/app/core/html.service';

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
  set input(input: string) {
    this._input = input;
    this.somethingChanged();
  }
  get input(): string {
    return this._input;
  }

  public output: string = '';

  constructor(private htmlService: HtmlService) {}

  private somethingChanged(): void {
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