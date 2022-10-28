import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromptUpdateService {
  public constructor(
    private swUpdate: SwUpdate,
    private _snackBar: MatSnackBar
  ) {
    swUpdate.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe((evt) => {
        this._snackBar
          .open('Update available reload now ?', 'Reload')
          .onAction()
          .subscribe(() => {
            document.location.reload();
          });
      });
  }
}
