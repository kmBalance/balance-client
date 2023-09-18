import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitViewComponent } from './split-view/split-view.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SplitViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,

  ]
})
export class SplitViewModule { }
