import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CalendarListComponent } from './calendar-list/calendar-list.component';

export const DataRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'accounts',
      component: AccountListComponent,
      data: { title: 'Accounts', breadcrumb: 'ACCOUNTS' }
    },
    {
      path: 'calendars',
      component: CalendarListComponent,
      data: { title: 'Calendars', breadcrumb: 'CALENDARS' } 
  }]
}
];