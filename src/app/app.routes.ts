import {Routes} from '@angular/router';
import { ViewAttendanceComponent } from './modules/attendance/component/view-attendance/view-attendance.component';
import {NotFoundComponent} from './modules/util/component/not-found/not-found.component';

export const ROUTES: Routes = [
  {path: '', component: ViewAttendanceComponent},

  {path: '**', component: NotFoundComponent}
];
