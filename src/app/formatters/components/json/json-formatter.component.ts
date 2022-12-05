import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import {
  IndentMode,
  JsonService,
} from 'src/app/formatters/services/json.service';

type JsonFormatterPreference = {
  indentMode: IndentMode;
  input: string;
};
const PREFERENCE_KEY = 'jsonFormatter';

const DEFAULT_PREFERENCE: JsonFormatterPreference = {
  indentMode: '2-spaces',
  input: '{\n}',
};

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
})
export class JsonFormatterComponent {
  public error: string | null = null;
  public options: JsonFormatterPreference = DEFAULT_PREFERENCE;

  public output: string = '';

  public constructor(
    private jsonService: JsonService,
    private localStorageService: LocalStorageService,
    private _dialog: MatDialog
  ) {
    this.localStorageService
      .getItem<JsonFormatterPreference>(PREFERENCE_KEY, DEFAULT_PREFERENCE)
      .subscribe((options) => {
        this.options = options;
        this.updateOutput();
      });
  }

  private updateOutput(): void {
    this.jsonService
      .formatte(this.options.input, { mode: this.options.indentMode })
      .subscribe({
        next: (output) => {
          this.error = null;
          this.output = output;
        },
        error: (error: string | Error) => {
          if (error instanceof Error) {
            this.error = error.message;
          } else {
            this.error = error;
          }
        },
      });
  }
}
