import { Component, OnInit } from '@angular/core';
import { LoremUnit } from 'lorem-ipsum/types/src/constants/units';
import { LoremIpsumService } from 'src/app/generators/services/lorem-ipsum.service';

@Component({
  selector: 'app-lorem-ipsum',
  templateUrl: './lorem-ipsum.component.html',
})
export class LoremIpsumComponent {
  public output: string = '';
  public unit: LoremUnit = 'paragraphs';
  public count: number = 1;
  constructor(private loremIpsumService: LoremIpsumService) {}

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
