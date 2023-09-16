import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IIdentity } from '../types/identity';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get(userId: string, password: string): Observable<IIdentity> {
    return this.http.get('/api/users').pipe(
      map(data => (data as IIdentity[])[0] as IIdentity)
    )
  }
}
