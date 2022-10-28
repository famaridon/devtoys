import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, Renderer2, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { Category, MenuService } from 'src/app/core/menu.service';
import { NotificationService } from 'src/app/core/notification.service';
import {
  UserPreference,
  UserPreferenceService,
} from 'src/app/core/user-preference.service';
import { VersionService } from 'src/app/core/version.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public title = 'devtoys';
  public colorMode: 'light_mode' | 'dark_mode' = 'light_mode';
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
    private userPreferenceService: UserPreferenceService,
    private versionService: VersionService,
    private notificationService: NotificationService, // injected to load it
    private router: Router,
    private menuService: MenuService
  ) {
    this.menu = this.menuService.menu;
    this.userPreferenceService.userPreference$.subscribe((userPreference) => {
      this.colorMode = userPreference.color;
      this.renderer.removeClass(document.body, 'light_mode');
      this.renderer.removeClass(document.body, 'dark_mode');
      this.renderer.addClass(document.body, userPreference.color);
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
    this.userPreferenceService.toggleColorMode();
  }

  public invertColorMode(): 'light_mode' | 'dark_mode' {
    return this.colorMode === 'light_mode' ? 'dark_mode' : 'light_mode';
  }
}
