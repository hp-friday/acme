import {Routes} from '@angular/router';
import {SettingsCenterComponent} from './settings-center/settings-center.component';
import {SystemComponent} from './system/system.component';
import {DefaultsComponent} from './defaults/defaults.component';
import {DocumentationComponent} from './documentation/documentation.component';

export const settingsCenterRoutes: Routes = [
  {
    path: 'show',
    component: SettingsCenterComponent,
    data: {
      breadcrumb: 'Settings'
    },
    children: [
      {
        path: 'System',
        component: SystemComponent,
        outlet: 'tabbody',
        data: {
          breadcrumb: 'System'
        }
      },
      {
        path: 'Defaults',
        component: DefaultsComponent,
        outlet: 'tabbody',
        data: {
          breadcrumb: 'Defaults'
        }
      },
      {
        path: 'Documentation',
        component: DocumentationComponent,
        outlet: 'tabbody',
        data: {
          breadcrumb: 'Documentation'
        }
      },

    ]
  }
];
