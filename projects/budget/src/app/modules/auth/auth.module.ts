import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth/auth.effects';
import { authFeature } from './state/auth/auth.reducer';
import { budgetFeature } from '../budget/state/budget.reducer';
import { StoreModule } from '@ngrx/store'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(budgetFeature)
  ]
})
export class AuthModule { }
