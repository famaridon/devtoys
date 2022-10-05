import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/core/json.service';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss'],
})
export class JsonFormatterComponent implements OnInit {
  private _raw: string = '';
  set raw(raw: string) {
    this._raw = raw;
    this.formatted = this.jsonService.formatte(raw);
  }
  get raw(): string {
    return this._raw;
  }
  public formatted: string = '';

  constructor(private jsonService: JsonService) {}

  ngOnInit(): void {
    this.raw = '{}';
  }
}
