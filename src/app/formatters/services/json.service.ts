import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { FormattersModule } from 'src/app/formatters/formatters.module';

@Injectable()
export class JsonService {
  public constructor() {}

  public formatte(raw: string): Observable<string> {
    return from(this.f(raw));
  }

  private async f(raw: string): Promise<string> {
    return await JSON.stringify(JSON.parse(raw), null, 2);
  }
}
