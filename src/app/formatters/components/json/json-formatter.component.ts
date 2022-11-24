import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import {
  IndentMode,
  JsonService,
} from 'src/app/formatters/services/json.service';

type JsonFormatterPreference = {
  indentMode: IndentMode;
};
const PREFERENCE_KEY = 'jsonFormatter';

const DEFAULT_PREFERENCE: JsonFormatterPreference = {
  indentMode: '2-spaces',
};

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
})
export class JsonFormatterComponent implements OnInit {
  public error: string | null = null;
  private _indentMode: IndentMode = '2-spaces';
  public get indentMode(): IndentMode {
    return this._indentMode;
  }
  public set indentMode(value: IndentMode) {
    this._indentMode = value;
    this.somthingChanged();
  }

  private _input: string = '';
  public set input(input: string) {
    this._input = input;
    this.somthingChanged();
  }

  public get input(): string {
    return this._input;
  }

  public output: string = '';

  public constructor(
    private jsonService: JsonService,
    private localStorageService: LocalStorageService,
    private _dialog: MatDialog
  ) {
    this.localStorageService
      .getItem<JsonFormatterPreference>(PREFERENCE_KEY, DEFAULT_PREFERENCE)
      .subscribe((pref) => {
        this._indentMode = pref.indentMode;
      });
  }

  public ngOnInit(): void {
    this.input = '{\n}';
  }

  private somthingChanged(): void {
    this.localStorageService.setItem<JsonFormatterPreference>(PREFERENCE_KEY, {
      indentMode: this._indentMode,
    });
    this.jsonService
      .formatte(this._input, { mode: this._indentMode })
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
