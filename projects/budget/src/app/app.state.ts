import { StoreModule } from '@ngrx/store';
import { authFeature } from './modules/auth/state/auth/auth.reducer';
import { budgetFeature } from './modules/budget/state/budget.reducer';



export const rootStore = StoreModule.forRoot({auth: authFeature.reducer, budget: budgetFeature.reducer }, {})
