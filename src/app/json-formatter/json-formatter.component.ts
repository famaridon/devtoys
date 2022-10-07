import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/core/json.service';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
})
export class JsonFormatterComponent implements OnInit {
  private _input: string = '';
  set input(input: string) {
    console.log(input);
    this._input = input;
    this.jsonService.formatte(input).subscribe((output) => {
      this.output = output;
    });
  }

  get input(): string {
    return this._input;
  }

  public output: string = '';

  constructor(private jsonService: JsonService) {}

  ngOnInit(): void {
    this.input = '{}';
  }
}
