import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//  import { PatientRoutes } from './modules/patient/patient.routing';
import { NavigationResolver } from './modules/core/resolvers/navigation.resolver';
import { ActionResolver } from './modules/core/resolvers/action.resolver';
import { NavigationComponent } from './modules/core/components/navigation/navigation.component';
import { ModuleNavigationResolver } from './modules/core/resolvers/module-navigation.resolver';
import { environment } from '.environments/environment';
import { AuthenticationGuard } from './modules/auth/guards/authenticaton.guard';
import { MsalGuard } from '@azure/msal-angular';
import { MobileViewComponent } from './modules/core/containers/layouts/mobile-view/mobile-view.component';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { SplitViewComponent } from './modules/core/containers/layouts/split-view/split-view.component';
import { ActionComponent } from './modules/core/components/action/action.component';
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

const outlets: Routes = [{
  path: '',
  outlet: 'actions',
  component: ActionComponent,
  resolve: { actions: () => inject(ActionResolver).resolve()}
},
{
  path: '',
  outlet: 'navigation',
  component: NavigationComponent,
  resolve: { routes: NavigationResolver }
},
{
  path: '',
  outlet: 'module-navigation',
  pathMatch: 'full',
  runGuardsAndResolvers: 'always',
  component: NavigationComponent,
  resolve: { routes: ModuleNavigationResolver, menuType: () => "SECONDARY"}
}
]

const routes: Routes = [
  // {
  //   path: 'login', 
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./modules/auth/auth.module').then((m) => m.AuthModule),
  //     },
      
  //   ],
  // },
  {
    path: '',
    redirectTo: 'budget',
    pathMatch: 'prefix',
  },
  {
    path: '',
    canActivate: [
      MsalGuard
    ],
    component: mobile() ? MobileViewComponent: SplitViewComponent,
    children: [
      ...outlets,
      {
        path: 'budget',

        loadChildren: () =>
          import('./modules/budget/budget.module').then((m) => m.BudgetModule),
      },
      {
        path: 'user',

        loadChildren: () =>
          import('./modules/user/user.module').then((m) => m.UserModule),
      },
      // {
      //   path: '**',
      //   loadComponent: () => import('./modules/core/components/not-found/not-found.component').then(mod => mod.NotFoundComponent)
      // }
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
