import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { FormattersModule } from 'src/app/formatters/formatters.module';

const DEFAULT_INDENT_OPTIONS: IndentOptions = { mode: '2-spaces' };

@Injectable()
export class JsonService {
  public constructor() {}

  public formatte(
    raw: string,
    options?: Partial<IndentOptions>
  ): Observable<string> {
    return from(this.f(raw, { ...DEFAULT_INDENT_OPTIONS, ...options }));
  }

  private async f(raw: string, options: IndentOptions): Promise<string> {
    let indent: string | number;
    if (options.mode === 'tabs') {
      indent = '\t';
    } else if (options.mode === '4-spaces') {
      indent = 4;
    } else {
      indent = 2;
    }
    return await JSON.stringify(JSON.parse(raw), null, indent);
  }
}

export type IndentOptions = {
  mode: IndentMode;
};

export type IndentMode = '2-spaces' | '4-spaces' | 'tabs';
