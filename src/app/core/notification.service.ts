import { Injectable } from '@angular/core';
import { first, map, Observable, ReplaySubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _notifiable: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor() {
    if (!('Notification' in window)) {
      this._notifiable.next(false);
    } else if (Notification.permission === 'granted') {
      this._notifiable.next(true);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          this._notifiable.next(true);
        } else {
          this._notifiable.next(false);
        }
      });
    }
  }

  public notification(
    title: string,
    options?: NotificationOptions
  ): Observable<Notification | null> {
    return this._notifiable.pipe(
      first(),
      map((notifiable) => {
        debugger;
        if (notifiable) {
          return new Notification(title, options);
        }
        return null;
      })
    );
  }
}
