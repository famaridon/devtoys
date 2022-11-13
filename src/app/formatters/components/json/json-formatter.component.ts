import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/formatters/services/json.service';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
})
export class JsonFormatterComponent implements OnInit {
  public error: string | null = null;

  private _input: string = '';
  public set input(input: string) {
    this._input = input;
    this.jsonService.formatte(input).subscribe({
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

  public get input(): string {
    return this._input;
  }

  public output: string = '';

  public constructor(private jsonService: JsonService) {}

  public ngOnInit(): void {
    this.input = '{\n}';
  }
}
