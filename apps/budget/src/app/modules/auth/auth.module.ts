import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth/auth.effects';
import { authFeature } from './state/auth/auth.reducer';
import { budgetFeature } from '../budget/state/budget.reducer';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './components/login/login.component'
import { providers } from './msal/configuration';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
    
  // StoreModule.forFeature(budgetFeature)
  ],
  providers: providers
})
export class AuthModule { }
