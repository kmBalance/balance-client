import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEnvironment } from 'libs/types/environment';
import { BehaviorSubject, ReplaySubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private environment$!: ReplaySubject<IEnvironment>;
  constructor(private http: HttpClient) { 
    this.environment$ = new ReplaySubject(1);
  }

  initialize() {
    return this.http.get<IEnvironment>('./assets/config.json').pipe(
      map((config) => {
        this.environment$.next(config);
      })
    );
  }
}
