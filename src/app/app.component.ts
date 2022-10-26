import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Renderer2, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, shareReplay } from 'rxjs';
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
export class AppComponent {
  public title = 'devtoys';
  public colorMode: 'light_mode' | 'dark_mode' = 'light_mode';
  @ViewChild('drawer')
  public drawer: MatDrawer | null = null;

  public readonly menu: Category[] = [
    {
      label: 'Encoder / Decoder',
      icon: 'EncodersDecoders.svg',
      menuItems: [
        {
          path: 'base64',
          icon: 'Base64EncoderDecoder.svg',
          label: 'Base64',
        },
        {
          path: 'imageBase64',
          icon: 'Base64EncoderDecoder.svg',
          label: 'Base64 Image',
        },
        {
          path: 'uri',
          icon: 'UrlEncoderDecoder.svg',
          label: 'URL',
        },
        {
          path: 'html',
          icon: 'HtmlEncoderDecoder.svg',
          label: 'HTML',
        },
        {
          path: 'jwt',
          icon: 'JwtDecoder.svg',
          label: 'JwT',
        },
      ],
    },
    {
      label: 'Generators',
      icon: 'Generators.svg',
      menuItems: [
        {
          path: 'uuid',
          icon: 'UuidGenerator.svg',
          label: 'UUID',
        },
        {
          path: 'lorem-ipsum',
          icon: 'LoremIpsumGenerator.svg',
          label: 'Lorem Ipsum',
        },
      ],
    },
    {
      label: 'Formatters',
      icon: 'Formatters.svg',
      menuItems: [
        {
          path: 'json-formatter',
          icon: 'JsonFormatter.svg',
          label: 'JSON',
        },
      ],
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    private userPreferenceService: UserPreferenceService,
    private versionService: VersionService,
    private notificationService: NotificationService, // injected to load it
    private router: Router
  ) {
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
        if (this.drawer?.mode == 'over' && this.drawer.opened) {
          this.drawer.close();
        }
      });
  }

  public toggleColorMode(): void {
    this.userPreferenceService.toggleColorMode();
  }

  public invertColorMode(): 'light_mode' | 'dark_mode' {
    return this.colorMode === 'light_mode' ? 'dark_mode' : 'light_mode';
  }
}

interface Category {
  label: string;
  icon: string;
  menuItems: MenuItem[];
}
interface MenuItem {
  path: string;
  label: string;
  icon: string;
}
