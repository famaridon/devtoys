import { Injectable } from '@angular/core';
import { escape, unescape } from 'lodash';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HtmlService {
  constructor() {}

  public encode(input: string): Observable<string> {
    return from(
      new Promise<string>((resovle, reject) => {
        try {
          resovle(escape(input));
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
          resovle(unescape(input));
        } catch (e) {
          reject(e);
        }
      })
    );
  }
}
