import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable()
export class UriService {
  constructor() {}

  public encode(input: string): Observable<string> {
    return from(
      new Promise<string>((resovle, reject) => {
        try {
          resovle(encodeURIComponent(input));
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
          resovle(decodeURIComponent(input));
        } catch (e) {
          reject(e);
        }
      })
    );
  }
}
