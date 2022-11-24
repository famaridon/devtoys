import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-configuration-option',
  templateUrl: './configuration-option.component.html',
})
export class ConfigurationOptionComponent {
  @Input()
  public title: String = '';
  @Input()
  public description: String = '';
}
