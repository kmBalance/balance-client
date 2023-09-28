import { NgModule, inject } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const root: Route = {
  path: '',
  component: LoginComponent,
};

const routes: Routes = [
  root
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
