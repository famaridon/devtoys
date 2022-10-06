import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILoremIpsumParams, loremIpsum } from 'lorem-ipsum';

@Injectable({
  providedIn: 'root',
})
export class LoremIpsumService {
  constructor() {}

  public generate(
    loremIpsumOptions: Partial<ILoremIpsumParams>
  ): Observable<string> {
    return of(loremIpsum(loremIpsumOptions));
  }
}
