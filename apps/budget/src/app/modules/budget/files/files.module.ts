import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import { BehaviorSubject } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FilesComponent } from './containers/files/files.component';
import { FilesRoutingModule } from './files-routing.module';
import { IonicModule } from '@ionic/angular';
import { DragDropDirective } from './directives/drag-drop.directive';
import { CoreModule } from '../../core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { FileEffects } from './store/file.effects';
import { fileFeature } from './store/file.reducer';
import { StoreModule } from '@ngrx/store'
import { FileFacade } from './store/file.facade';



@NgModule({
  declarations: [
    UploadComponent,
    FilesComponent,
    DragDropDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FilesRoutingModule, 
    IonicModule,
    MatButtonModule,
    EffectsModule.forFeature([FileEffects]),
    StoreModule.forFeature(fileFeature),
    MatFormFieldModule, MatInputModule, MatSelectModule, MatDividerModule, MatCardModule,
    CoreModule
  ],
  providers: [
    FileFacade
  ]
})
export class FilesModule {

}
