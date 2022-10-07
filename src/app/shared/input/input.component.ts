import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  private _input: string = '';

  @Input()
  public get input(): string {
    return this._input;
  }
  public set input(value: string) {
    this._input = value;
    this.inputChange.emit(value);
  }

  @Output()
  public inputChange = new EventEmitter<string>();

  constructor() {}
}
