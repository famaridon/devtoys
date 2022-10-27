import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILoremIpsumParams, loremIpsum } from 'lorem-ipsum';
import { GeneratorsModule } from 'src/app/generators/generators.module';

@Injectable()
export class LoremIpsumService {
  constructor() {}

  public generate(
    loremIpsumOptions: Partial<ILoremIpsumParams>
  ): Observable<string> {
    return of(loremIpsum(loremIpsumOptions));
  }
}
