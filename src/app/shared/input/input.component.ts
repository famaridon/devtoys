import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input()
  public value: string = '';

  @Output()
  valueChange = new EventEmitter<string>();

  constructor() {}
}
