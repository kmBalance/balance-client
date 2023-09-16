import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map, switchMap,
  tap
} from 'rxjs/operators';

import { actions } from './budget.actions';
// import { SnackBarService } from '../../core/service/snackbar.service';
import { BudgetService } from '../service/budget.service';
@Injectable()
export class BudgetEffects {
  constructor(private actions$: Actions, private budgetService: BudgetService /*, private snackbar: SnackBarService*/) { }
  
  
  loadBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      switchMap((action) =>
       this.budgetService.get(action.userId, action.budgetId).pipe(
        map((response) => actions.loaded(response))
       )
      )
    )
  );
}
