import { createReducer, on, createFeature } from '@ngrx/store';
import { actions } from './file.actions';


export const FileFeatureKey = "files"

const state = {
  paychecks: ['']
}
export type FileState = typeof state

export const fileFeature = createFeature({
  name: FileFeatureKey,
  reducer: createReducer(
    state,
    on(actions.paycheckUploaded, (state, action) => ({ ...state, paycheks: state.paychecks.concat([action.uri]) })),
  
  )
})
