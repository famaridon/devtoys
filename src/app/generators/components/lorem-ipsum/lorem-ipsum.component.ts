import { Component, OnInit } from '@angular/core';
import { LoremUnit } from 'lorem-ipsum/types/src/constants/units';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { LoremIpsumService } from 'src/app/generators/services/lorem-ipsum.service';

type LoremIpsumPreference = {
  unit: LoremUnit;
  count: number;
};
const PREFERENCE_KEY = 'loremIpsum';

const DEFAULT_PREFERENCE: LoremIpsumPreference = {
  unit: 'paragraphs',
  count: 1,
};

@Component({
  selector: 'app-lorem-ipsum',
  templateUrl: './lorem-ipsum.component.html',
})
export class LoremIpsumComponent {
  public options: LoremIpsumPreference = DEFAULT_PREFERENCE;
  public output: string = '';
  public constructor(
    private loremIpsumService: LoremIpsumService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService
      .getItem<LoremIpsumPreference>(PREFERENCE_KEY, DEFAULT_PREFERENCE)
      .subscribe((options) => {
        this.options = options;
      });
  }

  public generate(): void {
    this.loremIpsumService
      .generate({
        units: this.options.unit,
        count: this.options.count,
        suffix: '\n\r\n\r',
      })
      .subscribe((output) => (this.output = output));
  }
}
