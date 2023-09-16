import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store'
import { BudgetRoutingModule } from './budget-routing.module';
import { ChartComponent } from './components/chart/chart.component';
import { IncomeComponent } from './components/income/income.component';
import {  ExpensesComponent } from './components/expenses/expenses.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { budgetFeature } from './state/budget.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BudgetEffects } from './state/budget.effects';
import { UserBudgetFacade } from './state/userBudget.facade';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TimelineComponent } from './components/timeline/timeline.component';


@NgModule({
  declarations: [
    ChartComponent,
    IncomeComponent,
    ExpensesComponent,
    DashboardComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    EffectsModule.forFeature([BudgetEffects]),
    StoreModule.forFeature(budgetFeature),
    NgxChartsModule
  ],
  providers: [UserBudgetFacade]
})
export class BudgetModule { }
