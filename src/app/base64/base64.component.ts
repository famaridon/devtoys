import { Component, OnInit } from '@angular/core';
import { Base64Service } from 'src/app/core/base64.service';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {

  private _base64: string = '';
  set base64(base64: string) {
    this._base64 = base64;
    this._text = this.base64Service.base64ToText(this._base64);
  }
  get base64(): string {
    return this._base64;
  }

  private _text: string = '';
  set text(text: string) {
    this._text = text
    this._base64 = this.base64Service.textToBase64(this._text);
  }
  get text(): string {
    return this._text;
  }
  constructor(private base64Service: Base64Service) { }

  ngOnInit(): void {
    this.text = 'Enter some text or base64.'
  }

}
