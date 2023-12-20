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
import { ActionComponent } from './components/action/action.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from './services/theme/theme.service';
import { StyleManagerService } from './services/theme/style-manager.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from './components/action/theme-toggle/theme-toggle.component';
import { SanitizePipe } from './pipes/sanitize/sanitize.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MobileViewComponent } from './containers/layouts/mobile-view/mobile-view.component';
import { HttpProviders } from './http/http.providers';



@NgModule({
  declarations: [
    BaseContainerComponent,
    ActionComponent,
    NavigationComponent,
    ThemeToggleComponent,
    SanitizePipe,
    MobileViewComponent,
    // NotFoundComponent
  ],
  exports: [
    MatSnackBarModule,
    SanitizePipe

  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    MatSnackBarModule,
    FormsModule

  ],
  providers: [
    ActionResolver,
    NavigationResolver,
    ThemeService,
    StyleManagerService,
    ...HttpProviders
  ]

})
export class CoreModule { }
