import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent {
  @Input()
  public value: string = '';

  constructor() {}
}
