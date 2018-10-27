import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAttendanceComponent } from './component/view-attendance/view-attendance.component';
import {UtilModule} from '../util/util.module';
import {HeaderBarComponent} from '../layout/component/header-bar/header-bar.component';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [ViewAttendanceComponent, HeaderBarComponent]
})
export class AttendanceModule { }
