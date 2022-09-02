import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Renderer2 } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

const DARK_MODE_KEY = 'darkMode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'devtoys';
  public darkMode = false;

  public readonly menu: Array<MenuItem> = [
    {
      path: 'base64',
      label: 'Base64'
    },
    {
      path: 'uuid',
      label: 'UUID'
    },
    {
      path: 'json-formatter',
      label: 'JSON'
    },
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private renderer: Renderer2) {
    this.toggleDarkMode(localStorage.getItem(DARK_MODE_KEY) === 'true' ? true : false);
    onstorage = (event) => { 
      if(event.key === DARK_MODE_KEY){
        this.toggleDarkMode(event.newValue === 'true' ? true : false);
      }
    };
   }

  public toggleDarkMode(event: boolean): void{
    this.darkMode = event;
    if(this.darkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem(DARK_MODE_KEY, "true");
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.setItem(DARK_MODE_KEY, "false");
    }
  }
}

interface MenuItem {
  path: string;
  label: string;
}
