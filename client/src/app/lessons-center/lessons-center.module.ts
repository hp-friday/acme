import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import {LessonsCenterComponent} from './lessons-center/lessons-center.component';
import {LessonsListComponent} from './lessons-list/lessons-list.component';
import {LessonsCenterHomeComponent} from './lessons-center-home/lessons-center-home.component';
import {LessonsDetailComponent} from './lessons-detail/lessons-detail.component';
import {LessonsCenterRoutingModule} from './lessons-center-routing.module';
import {LessonsMenuComponent} from './lessons-menu/lessons-menu.component';
import { LessonsInfoComponent } from './lessons-info/lessons-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LessonsCenterRoutingModule
  ],
  declarations: [
    LessonsCenterComponent,
    LessonsListComponent,
    LessonsCenterHomeComponent,
    LessonsDetailComponent,
    LessonsMenuComponent,
    LessonsInfoComponent
  ]
})
export class LessonsCenterModule { }
