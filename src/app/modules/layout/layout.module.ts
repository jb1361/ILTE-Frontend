import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './component/header-bar/header-bar.component';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [HeaderBarComponent],
  exports: [HeaderBarComponent]
})
export class LayoutModule { }
