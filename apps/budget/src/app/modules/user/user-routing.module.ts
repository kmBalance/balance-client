import { NgModule, inject } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { BaseContainerComponent } from '../core/containers/base-container/base-container.component';
import { NavigationComponent } from '../core/components/navigation/navigation.component';
import { NavigationResolver } from '../core/resolvers/navigation.resolver';
import { ModuleNavigationResolver } from '../core/resolvers/module-navigation.resolver';
import { DashboardComponent } from './containers/dashboard/dashboard.component';


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
      title: 'Dashboard',
      component: DashboardComponent
    },
    // {
    //   path: 'files',
    //   title: 'Files',
    //   loadChildren: () => import('./files/files.module').then(m => m.FilesModule)
    // }
  ],
};

const routes: Routes = [
  root
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
