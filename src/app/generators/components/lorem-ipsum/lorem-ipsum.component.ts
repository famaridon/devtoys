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
  public output: string = '';
  private _unit: LoremUnit = 'paragraphs';
  public get unit(): LoremUnit {
    return this._unit;
  }
  public set unit(value: LoremUnit) {
    this._unit = value;
    this.settingsChanged();
  }
  private _count: number = 1;
  public get count(): number {
    return this._count;
  }
  public set count(value: number) {
    this._count = value;
    this.settingsChanged();
  }
  public constructor(
    private loremIpsumService: LoremIpsumService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService
      .getItem<LoremIpsumPreference>(PREFERENCE_KEY, DEFAULT_PREFERENCE)
      .subscribe((pref) => {
        this._unit = pref.unit;
        this._count = pref.count;
      });
  }

  private settingsChanged(): void {
    this.localStorageService.setItem<LoremIpsumPreference>(PREFERENCE_KEY, {
      unit: this._unit,
      count: this._count,
    });
  }

  public generate(): void {
    this.loremIpsumService
      .generate({
        units: this.unit,
        count: this.count,
        suffix: '\n\r\n\r',
      })
      .subscribe((output) => (this.output = output));
  }
}
