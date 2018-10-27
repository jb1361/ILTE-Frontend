import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAttendanceComponent } from './component/view-attendance/view-attendance.component';
import {UtilModule} from '../util/util.module';
import {HeaderBarComponent} from '../layout/component/header-bar/header-bar.component';

@NgModule({
  imports: [
    CommonModule,
    UtilModule
  ],
  declarations: [ViewAttendanceComponent, HeaderBarComponent]
})
export class AttendanceModule { }
