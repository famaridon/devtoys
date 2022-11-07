import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { delay, filter, map, timer } from 'rxjs';

declare const gtag: any;
declare const gtagError: boolean | undefined;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  public constructor(private _router: Router) {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => event as NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects,
        });
      });
  }
}
