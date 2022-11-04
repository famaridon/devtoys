import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

declare const gtag: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  public constructor(private _router: Router) {
    debugger;
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => event as NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        /** START : Code to Track Page View  */
        gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects,
        });
        /** END */
      });
  }
}
