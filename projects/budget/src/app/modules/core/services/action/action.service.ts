import { Injectable } from '@angular/core';
import { IIdentity } from '../../../auth/types/identity';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Action, NavigationArray } from '../../types/navigation/navigation';
import { THEME_OPTION, ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root'
})

export class ActionService {
  constructor(private readonly themeService: ThemeService) { }
  
  getActions(data: IIdentity): Observable<Array<Action<any,any>>> {
    
    return of([
      {
        key: "TOGGLE_THEME",
        description: "Toggle theme",
        action: (theme: THEME_OPTION) => this.themeService.setTheme(theme)
      }
    ])
  }

}
