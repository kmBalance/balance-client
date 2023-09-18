import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//  import { PatientRoutes } from './modules/patient/patient.routing';
import { ToolbarLayoutComponent } from './modules/core/layouts/toolbar-layout/toolbar-layout/toolbar-layout.component';
import { NavigationResolver } from './modules/core/resolvers/navigation.resolver';
import { SplitViewComponent } from './modules/core/layouts/split-view/split-view/split-view.component';
import { ActionComponent } from './modules/core/action/action.component';
import { ActionResolver } from './modules/core/resolvers/action.resolver';
import { NavigationComponent } from './modules/core/navigation/navigation.component';
import { MobileViewComponent } from './modules/core/layouts/mobile-view/mobile-view.component';
// import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
// import { NavigationComponent } from './modules/core/components/navigation/navigation.component.spec';
const mobile = () => {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  console.log(navigator.userAgent)

  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}

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
  resolve: { routes: () => inject(NavigationResolver).resolve()}
}]

const routes: Routes = [
  {
    path: '',
    redirectTo: '/budget/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: mobile() ? MobileViewComponent: SplitViewComponent,
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
