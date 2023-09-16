import { createReducer, on, createFeature } from '@ngrx/store';
import { IIdentity } from '../../types/identity';
import { actions } from './auth.actions';

export const AuthFeatureKey = "auth"

const state = {
  [AuthFeatureKey]: null as unknown as IIdentity
}
export type AuthState = typeof state

export const authFeature = createFeature({
  name: AuthFeatureKey,
  reducer: createReducer(
    state,
    on(actions.loaded, (state, action) => ({ ...state, auth: action.identity })),

  )
})
