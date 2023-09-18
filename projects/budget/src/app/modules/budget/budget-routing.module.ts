import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { BaseContainerComponent } from '../core/containers/base-container/base-container.component';

const root: Route = {
  path: '',
  component: BaseContainerComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'dashboard',
      // title: 'Budget Dashboard',
      component: DashboardComponent
    },
    {
      path: 'files',
      loadChildren: () => import('./files/files.module').then(m => m.FilesModule)
    }
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
