import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarLayoutComponent } from './toolbar-layout/toolbar-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToolbarLayoutComponent
  ],
  exports: [
    ToolbarLayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    RouterModule,
    
  ]
})
export class ToolbarLayoutModule { }
