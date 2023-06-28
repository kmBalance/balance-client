import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navigationResolver } from './modules/core/resolvers/navigation.resolver';
//  import { PatientRoutes } from './modules/patient/patient.routing';
import { ToolbarLayoutComponent } from './modules/core/layouts/toolbar-layout/toolbar-layout/toolbar-layout.component';
// import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
// import { NavigationComponent } from './modules/core/components/navigation/navigation.component.spec';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/budget/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ToolbarLayoutComponent,
    resolve: { navigation: navigationResolver },
    children: [
      // {
      //   path: 'patient',
      //   loadChildren: () =>
      //     import('./modules/patient/patient.module').then((m) => m.PatientModule),
      // },
      {
        path: 'budget',
        loadChildren: () =>
          import('./modules/budget/budget.module').then((m) => m.BudgetModule),
      },
      // {
      //   path: '',
      //     component: NavigationComponent,
      //     outlet: 'site-navigation',
      //     resolve: { navigation: navigationResolver()}
      //   },
    ],
  },
  // {
  //   path: '',
  //   component: UnauthenticatedLayoutComponent,
  //   children: [
  //     {
  //       path: 'authenticate',
  //       loadChildren: async () =>
  //         (await import('./modules/authentication/authentication.module')).AuthenticationModule,
  //     },
  //   ],
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
