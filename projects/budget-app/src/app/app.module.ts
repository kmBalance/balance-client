import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { rootStore } from './app.state';
import { LottieCacheModule, LottieModule } from 'ngx-lottie';
import { CoreModule } from './modules/core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { PatientEffects } from './modules/patient/state/patient.effects';
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
     AppRoutingModule,
     CoreModule,
    // // AppRoutes,
     rootStore,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSnackBarModule,
    FlexLayoutModule,
    // StoreDevtoolsModule.instrument(),
     LottieModule.forRoot({ player: playerFactory }),
     LottieCacheModule.forRoot(),
     EffectsModule.forRoot([PatientEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
