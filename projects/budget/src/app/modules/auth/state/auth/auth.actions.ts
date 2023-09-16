import { createAction, union, createActionGroup, props } from "@ngrx/store";
import { ApiFilter, Paged } from "../../../core/types/api/api";
import { IIdentity } from "../../types/identity";

type ACTIONS = 'Load Auth' | 'Auth Loaded'

export const actions = createActionGroup({
  source: 'Auth',
  events: {
    // defining an event with payload using the `props` function
    'Load': props<{ userId: string, password: string }>(),
    // defining an event with payload using the props factory
    'Loaded': (identity: IIdentity) => ({ identity })
  }
})
