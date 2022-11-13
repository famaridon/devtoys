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
  private _uppercase: boolean = false;
  public get uppercase(): boolean {
    return this._uppercase;
  }
  public set uppercase(value: boolean) {
    this._uppercase = value;
    this.settingsChanged();
  }
  private _hyphens: boolean = true;
  public get hyphens(): boolean {
    return this._hyphens;
  }
  public set hyphens(value: boolean) {
    this._hyphens = value;
    this.settingsChanged();
  }
  private _version: UUIDVersion = 'v4';
  public get version(): UUIDVersion {
    return this._version;
  }
  public set version(value: UUIDVersion) {
    this._version = value;
    this.settingsChanged();
  }
  private _count: number = 10;
  public get count(): number {
    return this._count;
  }
  public set count(value: number) {
    this._count = value;
    this.settingsChanged();
  }

  public output: string = '';

  public constructor(
    private uuidService: UUIDService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService
      .getItem<UUIDPreference>(PREFERENCE_KEY, DEFAULT_PREFERENCE)
      .subscribe((pref) => {
        this._count = pref.count;
        this._hyphens = pref.hyphens;
        this._uppercase = pref.uppercase;
        this._version = pref.version;
      });
  }

  private settingsChanged(): void {
    this.localStorageService.setItem<UUIDPreference>(PREFERENCE_KEY, {
      count: this._count,
      hyphens: this._hyphens,
      uppercase: this._uppercase,
      version: this._version,
    });
  }

  public generate(): void {
    this.output = '';
    this.uuidService
      .generate({
        uppercase: this.uppercase,
        hyphens: this.hyphens,
        version: this.version,
        count: this.count,
      })
      .subscribe((uuid) => {
        this.output += uuid + '\n';
      });
  }
}
