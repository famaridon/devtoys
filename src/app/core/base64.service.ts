import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64Service {

  constructor() { }

  public base64ToText(base64: string): string {
    return window.atob(base64);
  }

  public textToBase64(text: string): string {
    return window.btoa(text);
  }
}
