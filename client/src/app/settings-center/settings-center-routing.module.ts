import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SettingsCenterComponent} from './settings-center/settings-center.component';

const settingsCenterRoutes: Routes = [
  {
    path: 'show',
    component: SettingsCenterComponent,
    data: {
      breadcrumb: 'Settings'
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(settingsCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsCenterRoutingModule {
}
