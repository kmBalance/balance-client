import { Injectable } from '@angular/core';
import { IIdentity } from '../../../auth/types/identity';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavigationArray } from '../../types/navigation/navigation';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private http: HttpClient) { }
  
  getNavigationRoutes(data: IIdentity): Observable<NavigationArray> {
    return of([{ 'route': 'budget', 'title': 'Dashboard', 'icon': 'home'}, { 'route': 'user', 'title': 'user', 'icon': 'user'}])
  }


}
