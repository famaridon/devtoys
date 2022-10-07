import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/core/json.service';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
})
export class JsonFormatterComponent implements OnInit {
  public error: string | null = null;

  private _input: string = '';
  set input(input: string) {
    this._input = input;
    this.jsonService.formatte(input).subscribe(
      (output) => {
        this.error = null;
        this.output = output;
      },
      (error: string | Error) => {
        if (error instanceof Error) {
          this.error = error.message;
        } else {
          this.error = error;
        }
      }
    );
  }

  get input(): string {
    return this._input;
  }

  public output: string = '';

  constructor(private jsonService: JsonService) {}

  ngOnInit(): void {
    this.input = '{\n}';
  }
}
