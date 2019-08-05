import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {settingsCenterRoutes} from './settings-center-routes';

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

export const settingsRoutes: Routes = [
  ...settingsCenterRoutes
];
