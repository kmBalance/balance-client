import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetContainerComponent } from './containers/budget-container/budget-container.component';
import { BudgetChartComponent } from './components/budget-chart/budget-chart.component';
import { BudgetIncomeComponent } from './components/budget-income/budget-income.component';
import { BudgetExpensesComponent } from './components/budget-expenses/budget-expenses.component';
import { BudgetAggregateContainerComponent } from './containers/budget-aggregate-container/budget-aggregate-container.component';
import { BudgetDashboardComponent } from './containers/budget-dashboard/budget-dashboard.component';


@NgModule({
  declarations: [
    BudgetContainerComponent,
    BudgetChartComponent,
    BudgetIncomeComponent,
    BudgetExpensesComponent,
    BudgetAggregateContainerComponent,
    BudgetDashboardComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule
  ]
})
export class BudgetModule { }
