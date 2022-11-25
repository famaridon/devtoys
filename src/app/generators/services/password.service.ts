import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { generate, GenerateOptions } from 'generate-password-browser';

export type PasswordParams = Partial<GenerateOptions>;

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  public constructor() {}

  public generate(
    loremIpsumOptions: Partial<PasswordParams>
  ): Observable<string> {
    return of(generate(loremIpsumOptions));
  }
}
