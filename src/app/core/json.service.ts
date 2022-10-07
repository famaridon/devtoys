import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor() {}

  public formatte(raw: string): Observable<string> {
    return of(JSON.stringify(this.parse(raw), null, 2)).pipe(
      tap((formatted) => console.log(formatted))
    );
  }

  public parse(data: string): object {
    return JSON.parse(data);
  }
}
