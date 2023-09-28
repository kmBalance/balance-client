import { createAction, union, createActionGroup, props } from "@ngrx/store";
import { ApiFilter, Paged } from "../../core/types/api/api";
import { IBudget } from "../../core/types/budget/budget";

type ACTIONS = 'Load Budget' | 'Budget Loaded'

export const actions = createActionGroup({
  source: 'Budget',
  events: {
    // defining an event with payload using the `props` function
    'Load': props<{ userId: string, budgetId?: string }>(),
    // defining an event with payload using the props factory
    'Loaded': (budget: IBudget) => ({ budget })
  }
})