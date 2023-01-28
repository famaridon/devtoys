import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent {
  @Input()
  public title: string = 'Output';
  public constructor(private clipboard: Clipboard) {}

  public copy(): void {
    const content = document.getElementById(this.title)?.textContent;
    if (content != null) {
      this.clipboard.copy(content);
    }
  }
}
