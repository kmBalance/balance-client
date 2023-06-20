import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { PatientRoutes } from './modules/patient/patient.routing';
import { MainLayoutComponent } from './modules/core/components/main-layout/main-layout.component';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { NavigationComponent } from './modules/core/components/navigation/navigation.component.spec';

 const routes: Routes = [
  {
    path: '',
    redirectTo: '/budget/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'patient',
        loadChildren: () =>
          import('./modules/patient/patient.module').then((m) => m.PatientModule),
      },
      {
        path: 'budget',
        loadChildren: () =>
          import('./modules/budget/budget.module').then((m) => m.BudgetModule),
      },
      {
        path: '',
          component: NavigationComponent,
          outlet: 'site-navigation',
        },
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
  {
    path: '**',
    component: NotFoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
