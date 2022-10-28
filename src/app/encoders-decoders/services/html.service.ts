import { Injectable } from '@angular/core';
import { escape, unescape } from 'html-escaper';
import { from, Observable } from 'rxjs';

@Injectable()
export class HtmlService {
  public constructor() {}

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
