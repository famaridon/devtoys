import { Injectable } from '@angular/core';
import { combineLatest, map, merge, Observable, of } from 'rxjs';
import { Base64Service } from 'src/app/encoders-decoders/services/base64.service';

@Injectable()
export class JwtService {
  public constructor(private base64Service: Base64Service) {}

  public formatte(token: string): Observable<Token> {
    const splited = token.split('.');
    const header$ = this.base64Service
      .decode(splited[0])
      .pipe(map((raw) => JSON.parse(raw)));
    const payload$ = this.base64Service
      .decode(splited[1])
      .pipe(map((raw) => JSON.parse(raw)));
    const signature$ = of(splited[2]);

    return combineLatest([header$, payload$, signature$]).pipe(
      map((c) => {
        return {
          header: c[0],
          payload: c[1],
          signature: c[2],
        };
      })
    );
  }
}

export interface Token {
  header: any;
  payload: any;
  signature: string;
}
