import {Routes} from '@angular/router';
import {ExtrasTabsetComponent} from './extras-tabset/extras-tabset.component';
import {ExtrasTabComponent} from './extras-tab/extras-tab.component';

export const extrasCenterRoutes: Routes = [
  {
    path: 'show',
    component: ExtrasTabsetComponent,
    data: {
      breadcrumb: 'Extras'
    },
    children: [
      {
        path: 'Import',
        component: ExtrasTabComponent,
        outlet: 'tabbody',
        data: {
          breadcrumb: 'Import'
        }
      },
      {
        path: 'Export',
        component: ExtrasTabComponent,
        outlet: 'tabbody',
        data: {
          breadcrumb: 'Export'
        }
      },
      {
        path: 'Backup',
        component: ExtrasTabComponent,
        outlet: 'tabbody',
        data: {
          breadcrumb: 'Backup'
        }
      },

    ]
  }
];
