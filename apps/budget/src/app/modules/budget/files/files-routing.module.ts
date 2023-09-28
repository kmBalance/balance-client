import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { BaseContainerComponent } from '../../core/containers/base-container/base-container.component';
import { FilesComponent } from './containers/files/files.component';

const root: Route = {
  path: '',
  component: FilesComponent,
  title: 'File Upload'
  
};

const routes: Routes = [
  root
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
