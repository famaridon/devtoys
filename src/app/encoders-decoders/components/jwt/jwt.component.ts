import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  JwtService,
  Token,
} from 'src/app/encoders-decoders/services/jwt.service';

const SAMPLE_JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
@Component({
  selector: 'app-jwt',
  templateUrl: './jwt.component.html',
})
export class JwtComponent {
  private _input: string;

  public get input(): string {
    return this._input;
  }
  public set input(value: string) {
    this._input = value;
    this.output = this.onInputChange(value);
  }

  public output: Observable<Token>;

  public constructor(private jwtService: JwtService) {
    this._input = SAMPLE_JWT;
    this.output = this.onInputChange(this._input);
  }

  public onInputChange(token: string): Observable<Token> {
    return this.jwtService.formatte(token);
  }

  public stringify(value: object): string {
    return JSON.stringify(value, null, 4);
  }
}
