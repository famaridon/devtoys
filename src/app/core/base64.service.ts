import { Injectable } from '@angular/core';
import { Base64 } from 'js-base64';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Base64Service {
  constructor() {}

  public encode(input: string, urlSafe?: boolean): Observable<string> {
    return from(
      new Promise<string>((resovle, reject) => {
        try {
          resovle(Base64.encode(input, urlSafe));
        } catch (e) {
          reject(e);
        }
      })
    );
  }

  public decode(input: string): Observable<string> {
    return from(
      new Promise<string>((resovle, reject) => {
        try {
          resovle(Base64.decode(input));
        } catch (e) {
          reject(e);
        }
      })
    );
  }
}
