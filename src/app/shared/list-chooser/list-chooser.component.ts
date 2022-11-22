import { KeyValue } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';

export type ListChooserData<V> = {
  title: String;
  options: Option<V>[];
};

export type Option<V> = {
  value: V;
  label: String;
};

@Component({
  selector: 'app-list-chooser',
  templateUrl: './list-chooser.component.html',
})
export class ListChooserComponent {
  public title: String;
  public options: Option<any>[];
  public constructor(
    private _dialogRef: MatDialogRef<ListChooserComponent>,
    @Inject(MAT_DIALOG_DATA) data: ListChooserData<any>
  ) {
    this.title = data.title;
    this.options = data.options;
  }

  public onSelectionChange($event: MatSelectionListChange): void {
    this._dialogRef.close($event.options[0].value);
  }
}
