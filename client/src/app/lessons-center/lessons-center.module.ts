import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {LessonsCenterComponent} from './lessons-center/lessons-center.component';
import {LessonsListComponent} from './lessons-list/lessons-list.component';
import {LessonsCenterHomeComponent} from './lessons-center-home/lessons-center-home.component';
import {LessonsDetailComponent} from './lessons-detail/lessons-detail.component';
import {LessonsCenterRoutingModule} from './lessons-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LessonsCenterRoutingModule
  ],
  declarations: [
    LessonsCenterComponent,
    LessonsListComponent,
    LessonsCenterHomeComponent,
    LessonsDetailComponent
  ]
})
export class LessonsCenterModule { }
