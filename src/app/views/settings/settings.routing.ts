import { Routes } from '@angular/router';
import { AccountTypeListComponent } from './account-type-list/account-type-list.component';

export const SettingsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'accountTypes',
      component: AccountTypeListComponent,
      data: { title: 'Accounts Types', breadcrumb: 'ACCOUNT_TYPES' }
  }]
}
];