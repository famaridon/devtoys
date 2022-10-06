import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent {
  @Input()
  public value: string = '';

  @Input()
  public rows: number = 10;

  constructor() {}
}
