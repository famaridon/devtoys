import { Component } from '@angular/core';
import { GenerateOptions } from 'generate-password-browser';
import { first } from 'rxjs';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { PasswordService } from 'src/app/generators/services/password.service';

const PREFERENCE_KEY = 'password';

const DEFAULT_PREFERENCE: GenerateOptions = {
  length: 16,
  numbers: true,
  symbols: true,
  lowercase: true,
  uppercase: true,
  excludeSimilarCharacters: false,
  exclude: '',
  strict: false,
};

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
})
export class PasswordComponent {
  public output: String = '';

  public options: GenerateOptions = DEFAULT_PREFERENCE;

  public constructor(
    private _passwordService: PasswordService,
    private _localStorageService: LocalStorageService
  ) {
    this._localStorageService
      .getItem(PREFERENCE_KEY, DEFAULT_PREFERENCE)
      .subscribe((options) => {
        this.options = options;
      });
  }

  public generate(): void {
    this._passwordService
      .generate(this.options)
      .pipe(first())
      .subscribe((pwd) => (this.output = pwd));
  }
}
