import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { BudgetContainerComponent } from './containers/budget-container/budget-container.component';
import { BudgetDashboardComponent } from './containers/budget-dashboard/budget-dashboard.component';

const root: Route = {
  path: '',
  component: BudgetContainerComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'dashboard',
      component: BudgetDashboardComponent
      // children: [
      //   {
      //     path: '',
      //     redirectTo: 'dashboard',
      //     pathMatch: 'prefix',
      //   },
      //   {
      //     path: 'dashboard',
      //     component: PatientDashboardComponent,
      //   },
      //   // {
      //   //   path: 'account-settings',
      //   //   component: AccountSettingsComponent,
      //   // },
      // ],
    },
  ],
};

const routes: Routes = [
  root
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
