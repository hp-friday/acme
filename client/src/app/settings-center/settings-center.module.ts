import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsCenterRoutingModule} from './settings-center-routing.module';
import {SettingsCenterComponent} from './settings-center/settings-center.component';

@NgModule({
  declarations: [
    SettingsCenterComponent
  ],
  imports: [
    CommonModule,
    SettingsCenterRoutingModule
  ]
})
export class SettingsCenterModule { }
