import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { UUIDService } from 'src/app/generators/services/uuid.service';

type UUIDVersion = 'v1' | 'v4';

type UUIDPreference = {
  uppercase: boolean;
  hyphens: boolean;
  version: UUIDVersion;
  count: number;
};
const PREFERENCE_KEY = 'uuid';

const DEFAULT_PREFERENCE: UUIDPreference = {
  uppercase: false,
  hyphens: true,
  version: 'v4',
  count: 10,
};

@Component({
  selector: 'app-uuid',
  templateUrl: './uuid.component.html',
})
export class UuidComponent {
  public options: UUIDPreference = DEFAULT_PREFERENCE;
  public output: string = '';

  public constructor(
    private uuidService: UUIDService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService
      .getItem<UUIDPreference>(PREFERENCE_KEY, DEFAULT_PREFERENCE)
      .subscribe((options) => {
        this.options = options;
      });
  }

  public generate(): void {
    this.output = '';
    this.uuidService
      .generate({
        uppercase: this.options.uppercase,
        hyphens: this.options.hyphens,
        version: this.options.version,
        count: this.options.count,
      })
      .subscribe((uuid) => {
        this.output += uuid + '\n';
      });
  }
}
