import { Injectable } from "@angular/core";
import { AuthState, authFeature } from "../../auth/state/auth/auth.reducer";
import { BudgetState, budgetFeature } from "./budget.reducer";
import { Store } from '@ngrx/store'
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { actions as BudgetActions } from './budget.actions'
// import{ Store } from ''

@Injectable()
export class UserBudgetFacade {

    userIdentity$ = this.authStore.select(authFeature.selectAuth);
    budget$ = this.budgetStore.select(budgetFeature.selectBudget);

    constructor(private budgetStore: Store<BudgetState>, private authStore: Store<AuthState>, private http: HttpClient) { }

    loadBudget() {
        this.userIdentity$.subscribe(data => {
            this.budgetStore.dispatch(BudgetActions.load({ userId: data?.userId }));
        })

    }
}