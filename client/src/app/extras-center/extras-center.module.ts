import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExtrasTabsetComponent} from './extras-tabset/extras-tabset.component';
import {ExtrasTabComponent} from './extras-tab/extras-tab.component';
import {ExtrasCenterRoutingModule} from './extras-center-routing.module';

@NgModule({
  declarations: [
    ExtrasTabsetComponent,
    ExtrasTabComponent,
  ],
  imports: [
    CommonModule,
    ExtrasCenterRoutingModule
  ]
})
export class ExtrasCenterModule { }
