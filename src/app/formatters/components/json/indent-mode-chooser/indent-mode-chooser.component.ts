import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';
import { IndentMode } from 'src/app/formatters/services/json.service';

@Component({
  selector: 'app-indent-mode-chooser',
  templateUrl: './indent-mode-chooser.component.html',
})
export class IndentModeChooserComponent {
  public constructor(
    private _dialogRef: MatDialogRef<IndentModeChooserComponent>
  ) {}

  public onSelectionChange($event: MatSelectionListChange): void {
    this._dialogRef.close($event.options[0].value);
  }
}
