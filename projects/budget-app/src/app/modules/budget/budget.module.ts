import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { BudgetContainerComponent } from './containers/budget-container/budget-container.component';
import { BudgetDashboardComponent } from './components/budget-dashboard/budget-dashboard.component';
import { BudgetRoutes } from './budget.routing';



@NgModule({
  declarations: [
    BudgetContainerComponent,
    BudgetDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    BudgetRoutes
  ]
})
export class BudgetModule { }
