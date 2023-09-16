import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BaseContainerComponent } from './containers/base-container/base-container.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActionResolver } from './resolvers/action.resolver';
import { NavigationResolver } from './resolvers/navigation.resolver';
import { ActionComponent } from './layouts/action/action.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';



@NgModule({
  declarations: [
    BaseContainerComponent,
    ActionComponent,
    NavigationComponent
  ],
  exports: [
    MatSnackBarModule,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSnackBarModule
  ],
  providers:[ ActionResolver,
    NavigationResolver]

})
export class CoreModule { }
