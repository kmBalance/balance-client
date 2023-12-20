import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store'
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FileState, fileFeature } from "./file.reducer";
import { actions } from "./file.actions";
// import{ Store } from ''

@Injectable()
export class FileFacade {

    paychecks$ = this.fileStore.select(fileFeature.selectPaychecks);
    // budget$ = this.budgetStore.select(budgetFeature.selectBudget);

    constructor(private fileStore: Store<FileState>, private http: HttpClient) { }

    uploadPaychecks(files: File[]): void {
            this.fileStore.dispatch(actions.paycheckUpload({ files: files }));
    }
}