import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {MaterialModule} from './modules/material/material.module';
import {UtilModule} from './modules/util/util.module';
import {AttendanceModule} from './modules/attendance/attendance.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    UtilModule,
    AttendanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
