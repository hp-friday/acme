import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {extrasCenterRoutes} from './extras-center-routes';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(extrasCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExtrasCenterRoutingModule {
}

export const extrasRoutes: Routes = [
  ...extrasCenterRoutes
];
