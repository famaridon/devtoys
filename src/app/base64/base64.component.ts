import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Base64Service } from 'src/app/core/base64.service';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss'],
})
export class Base64Component {
  public encode: boolean = true;

  private _input: string = '';
  set input(input: string) {
    this._input = input;
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
  get input(): string {
    return this._input;
  }

  public output: string = '';

  constructor(private base64Service: Base64Service) {}
}
