import { createAction, union, createActionGroup, props } from "@ngrx/store";

type ACTIONS = 'Upload Paycheck' | 'Paycheck Uploaded'

export const actions = createActionGroup({
  source: 'Budget',
  events: {
    // defining an event with payload using the `props` function
    'paycheckUpload': props<{ files: File[] }>(),
    // defining an event with payload using the props factory
    'paycheckUploaded': (uri: string) => ({ uri })
  }
})