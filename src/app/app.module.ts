import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {MaterialModule} from './modules/material/material.module';
import {UtilModule} from './modules/util/util.module';
import {AttendanceModule} from './modules/attendance/attendance.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    UtilModule,
    AttendanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
