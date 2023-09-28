import { createReducer, on, createFeature } from '@ngrx/store';
import { actions } from './budget.actions';
import { IBudget } from '../../core/types';

export const BudgetFeatureKey = "budget"

const state = {
  [BudgetFeatureKey]: null as unknown as IBudget
}
export type BudgetState = typeof state

export const budgetFeature = createFeature({
  name: BudgetFeatureKey,
  reducer: createReducer(
    state,
    on(actions.loaded, (state, action) => ({ ...state, budget: action.budget })),
  
  )
})
