import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StyleManagerService } from './style-manager.service';

export type THEME_OPTION = "dark" | 'light'
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor( private styleManager: StyleManagerService) { }

  getThemeOptions(): Observable<Array<string>> {
    return of([
      'light',
      'dark'
    ])
  }

  setTheme(theme: THEME_OPTION) {
    console.log("setting theme")
    this.styleManager.setStyle(
      "theme",
      `assets/theme/_${theme}.theme.css`
    );
  }
}
