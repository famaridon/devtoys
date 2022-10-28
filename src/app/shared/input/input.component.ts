import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input()
  public error: string | null = null;

  @Input()
  public rows: number = 10;

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

  public constructor() {}
}
