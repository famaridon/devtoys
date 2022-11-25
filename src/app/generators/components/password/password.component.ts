import { Component } from '@angular/core';
import { first } from 'rxjs';
import { PasswordService } from 'src/app/generators/services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
})
export class PasswordComponent {
  public output: String = '';

  public length: number = 16;
  public numbers: boolean = true;
  public symbols: boolean = true;
  public lowercase: boolean = true;
  public uppercase: boolean = true;
  public excludeSimilarCharacters?: boolean = false;
  public exclude: string = '';
  public strict: boolean = false;

  public constructor(private _passwordService: PasswordService) {}

  public generate(): void {
    this._passwordService
      .generate(this)
      .pipe(first())
      .subscribe((pwd) => (this.output = pwd));
  }
}
