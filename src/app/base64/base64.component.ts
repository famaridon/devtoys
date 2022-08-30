import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {

  private _base64: string = '';
  set base64(base64: string) {
    this._base64 = base64;
    this._text = atob(this._base64);
  }
  get base64(): string {
    return this._base64;
  }

  private _text: string = '';
  set text(text: string) {
    this._text = text
    this._base64 = btoa(this._text);
  }
  get text(): string {
    return this._text;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
