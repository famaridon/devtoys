import { Component, OnInit } from '@angular/core';
import { UUIDService } from 'src/app/generators/services/uuid.service';

@Component({
  selector: 'app-uuid',
  templateUrl: './uuid.component.html',
})
export class UuidComponent {
  public uppercase: boolean = false;
  public hyphens: boolean = true;
  public version: 'v1' | 'v4' = 'v4';
  public count: number = 10;

  public output: string = '';

  constructor(private uuidService: UUIDService) {}

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
