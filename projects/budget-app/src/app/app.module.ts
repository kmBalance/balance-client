import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { ToolbarLayoutModule } from './modules/core/layouts/toolbar-layout/toolbar-layout.module';
import { EffectsModule } from '@ngrx/effects';
// import { PatientEffects } from './modules/patient/state/patient.effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import player from 'lottie-web';
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
    ToolbarLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
