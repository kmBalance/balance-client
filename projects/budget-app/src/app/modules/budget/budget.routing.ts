import { Route, RouterModule, Routes } from '@angular/router';
import { BudgetDashboardComponent } from './components/budget-dashboard/budget-dashboard.component';
import { BudgetContainerComponent } from './containers/budget-container/budget-container.component';
// import { UserNavigationComponent } from './components/user-navigation/user-navigation.component';

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
      //     component: BudgetDashboardComponent,
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
  root,
  // {
  //   path: '',
  //   component: UserSystemOptionsComponent,
  //   outlet: 'system-options',
  // },
  // {
  //   path: '',
  //   component: UserNavigationComponent,
  //   outlet: 'site-navigation',
  // },
];

export const BudgetRoutes = RouterModule.forChild(routes);
