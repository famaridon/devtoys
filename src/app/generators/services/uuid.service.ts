import { Injectable } from '@angular/core';
import { interval, map, Observable, range } from 'rxjs';
import { GeneratorsModule } from 'src/app/generators/generators.module';
import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

@Injectable()
export class UUIDService {
  constructor() {}

  public generate(options: GenerationOptions): Observable<string> {
    return range(1, options.count).pipe(
      map(() => this.versionMapper(options)),
      map((uuid) => this.hyphensMapper(uuid, options)),
      map((uuid) => this.uppercaseMapper(uuid, options))
    );
  }

  private versionMapper(options: GenerationOptions): string {
    if (options.version === 'v1') {
      return uuidv1();
    }
    return uuidv4();
  }

  private hyphensMapper(uuid: string, options: GenerationOptions): string {
    if (!options.hyphens) {
      return uuid.replace(/-/g, '');
    }
    return uuid;
  }

  private uppercaseMapper(uuid: string, options: GenerationOptions): string {
    if (options.uppercase) {
      return uuid.toUpperCase();
    }
    return uuid;
  }
}

export type GenerationOptions = {
  count: number;
  uppercase: boolean;
  hyphens: boolean;
  version: 'v1' | 'v4';
};
