import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//  import { PatientRoutes } from './modules/patient/patient.routing';
import { ToolbarLayoutComponent } from './modules/core/layouts/toolbar-layout/toolbar-layout/toolbar-layout.component';
import { NavigationResolver } from './modules/core/resolvers/navigation.resolver';
import { SplitViewComponent } from './modules/core/layouts/split-view/split-view/split-view.component';
import { ActionComponent } from './modules/core/layouts/action/action.component';
import { ActionResolver } from './modules/core/resolvers/action.resolver';
import { NavigationComponent } from './modules/core/layouts/navigation/navigation.component';
// import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
// import { NavigationComponent } from './modules/core/components/navigation/navigation.component.spec';

const outlets = [{
  path: '',
  outlet: 'actions',
  component: ActionComponent,
  resolve: { actions: () => inject(ActionResolver).resolve()}
},
{
  path: '',
  outlet: 'navigation',
  component: NavigationComponent,
  resolve: { actions: () => inject(ActionResolver).resolve()}
}]

const routes: Routes = [
  {
    path: '',
    redirectTo: '/budget/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SplitViewComponent,
    children: [
      ...outlets,
      {
        path: 'budget',
        loadChildren: () =>
          import('./modules/budget/budget.module').then((m) => m.BudgetModule),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
