import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map, switchMap,
  tap
} from 'rxjs/operators';

import { actions } from './file.actions';
// import { SnackBarService } from '../../core/service/snackbar.service';
import { PaycheckUploadService } from '../services/paycheck-upload.service'; 
@Injectable()
export class FileEffects {
  constructor(private actions$: Actions, private paycheckUploadService: PaycheckUploadService /*, private snackbar: SnackBarService*/) { }
  
  
  uploadPaychecks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.paycheckUpload),
      switchMap((action) =>
       this.paycheckUploadService.upload(action.files).pipe(
        map((response) => actions.paycheckUploaded(response))
       )
      )
    )
  );
}
