import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsCenterRoutingModule} from './settings-center-routing.module';
import {SettingsCenterComponent} from './settings-center/settings-center.component';
import { SystemComponent } from './system/system.component';
import { DefaultsComponent } from './defaults/defaults.component';
import { DocumentationComponent } from './documentation/documentation.component';

@NgModule({
  declarations: [
    SettingsCenterComponent,
    SystemComponent,
    DefaultsComponent,
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    SettingsCenterRoutingModule
  ]
})
export class SettingsCenterModule { }
