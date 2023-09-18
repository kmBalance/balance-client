import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarLayoutModule } from './modules/core/layouts/toolbar-layout/toolbar-layout.module';

import player from 'lottie-web';
import { rootStore } from './app.state';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './modules/auth/state/auth/auth.effects';
import { SnackBarService } from './modules/core/services/snackbar/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SplitViewModule } from './modules/core/layouts/split-view/split-view.module';
import { CoreModule } from './modules/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_CARD_CONFIG } from '@angular/material/card';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player; 
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarLayoutModule,
    SplitViewModule,
    HttpClientModule,
    rootStore,
    MatSnackBarModule,
    CoreModule,
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects]),
    
    IonicModule.forRoot()
  ],
  providers: [SnackBarService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill', floatlabel: 'always'}},
    {provide: MAT_CARD_CONFIG, useValue: {appearance: 'raised'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
