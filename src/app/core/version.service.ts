import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { NotificationService } from 'src/app/core/notification.service';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public constructor(
    private _updates: SwUpdate,
    private _snackBar: MatSnackBar,
    private _notificationService: NotificationService
  ) {}

  public checkForUpdate(): void {
    this._updates.versionUpdates.subscribe((evt) => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(
            `New app version ready for use: ${evt.latestVersion.hash}`
          );
          const snackBarRef = this._snackBar.open(
            'New app version ready for use',
            'Use it.'
          );
          snackBarRef.onAction().subscribe(() => {
            document.location.reload();
          });
          this._notificationService
            .notification('New app version ready for use')
            .subscribe();
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.log(
            `Failed to install app version '${evt.version.hash}': ${evt.error}`
          );
          break;
      }
    });
  }
}
