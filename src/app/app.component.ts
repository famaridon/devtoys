import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, Renderer2, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { GoogleAnalyticsService } from 'src/app/core/google-analytics.service';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { Category, MenuService } from 'src/app/core/menu.service';
import { NotificationService } from 'src/app/core/notification.service';
import { VersionService } from 'src/app/core/version.service';

const DEFAULT_THEME_PREFERENCE: ThemePreference = { color: 'light_mode' };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public title = 'devtoys';
  public themePreference: ThemePreference = DEFAULT_THEME_PREFERENCE;
  @ViewChild('drawer')
  public drawer: MatDrawer | null = null;

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  public readonly menu: Category[];

  public constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    private localStorageService: LocalStorageService,
    private versionService: VersionService,
    private notificationService: NotificationService, // injected to load it
    private googleAnalyticsService: GoogleAnalyticsService, // injected to load it
    private router: Router,
    private menuService: MenuService
  ) {
    this.menu = this.menuService.menu;
    this.localStorageService
      .getItem<ThemePreference>('theme', DEFAULT_THEME_PREFERENCE)
      .subscribe((themePreference) => {
        this.themePreference = themePreference;
        this.renderer.removeClass(document.body, 'light_mode');
        this.renderer.removeClass(document.body, 'dark_mode');
        this.renderer.addClass(document.body, themePreference.color);
      });
    this.versionService.checkForUpdate();

    router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => e as NavigationEnd)
      )
      .subscribe((e) => {
        localStorage.setItem('lastVisitedUrl', e.url);
        if (this.drawer?.mode == 'over' && this.drawer.opened) {
          this.drawer.close();
        }
      });
  }

  public ngAfterViewInit(): void {
    const lastVisitedUrl = localStorage.getItem('lastVisitedUrl');
    if (lastVisitedUrl) {
      this.router.navigateByUrl(lastVisitedUrl);
    }
  }

  public toggleColorMode(): void {
    let newColor: 'dark_mode' | 'light_mode';
    if (this.themePreference.color === 'light_mode') {
      newColor = 'dark_mode';
    } else {
      newColor = 'light_mode';
    }
    this.themePreference.color = newColor;
  }

  public invertColorMode(): 'light_mode' | 'dark_mode' {
    return this.themePreference.color === 'light_mode'
      ? 'dark_mode'
      : 'light_mode';
  }
}

type ThemePreference = {
  color: 'dark_mode' | 'light_mode';
};
