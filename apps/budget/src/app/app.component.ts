import { Component } from '@angular/core';
import { AuthState, authFeature } from './modules/auth/state/auth/auth.reducer';
import { Store } from "@ngrx/store"
import { actions } from './modules/auth/state/auth/auth.actions';
import { environment } from '../../../../.environments/environment'
import { env } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-app';
  isDark: boolean = false;
  constructor(private store: Store<AuthState>) {
    console.log(environment.name)
  }

  ngOnInit() {
    this.store.dispatch(actions.load({userId: '', password: ''}))
  }
}
