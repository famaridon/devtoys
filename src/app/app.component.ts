import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Renderer2 } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { UserPreference, UserPreferenceService } from 'src/app/core/user-preference.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'devtoys';
  public colorMode: 'light_mode' | 'dark_mode' = 'light_mode';


  public readonly menu: Category[]=  [
    {
      label: 'Converters',
      icon: 'glyphs',
      menuItems: [
        {
          path: 'base64',
          label: 'Base64'
        },
        {
          path: 'uuid',
          label: 'UUID'
        },
      ]
    },
    {
      label: 'Formatters',
      icon: 'format_indent_increase',
      menuItems: [
        {
          path: 'json-formatter',
          label: 'JSON'
        },
      ]
    },
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    private userPreferenceService: UserPreferenceService) {
    this.userPreferenceService.userPreference$.subscribe((userPreference) => {
      this.colorMode = userPreference.color;
      this.renderer.removeClass(document.body, 'light_mode');
      this.renderer.removeClass(document.body, 'dark_mode');
      this.renderer.addClass(document.body, userPreference.color);
    });
  }

  public toggleColorMode(): void {
    this.userPreferenceService.toggleColorMode();
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
}
