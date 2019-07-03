import {RouterModule, Routes} from '@angular/router';
import {LessonsCenterComponent} from './lessons-center/lessons-center.component';
import {LessonsCenterHomeComponent} from './lessons-center-home/lessons-center-home.component';
import {LessonsListComponent} from './lessons-list/lessons-list.component';
import {LessonsDetailComponent} from './lessons-detail/lessons-detail.component';
import {NgModule} from '@angular/core';
import {LessonDetailResolverService} from './services/lesson-detail-resolver.service';
import {CanDeactivateGuard} from '../can-deactivate.guard';


const lessonsCenterRoutes: Routes = [
  {
    path: '',
    component: LessonsCenterComponent,
    children: [
      {
        path: '',
        component: LessonsListComponent,
        children: [
          {
            path: ':id',
            component: LessonsDetailComponent,
            outlet: 'lessonMenu',
            // canDeactivate: [CanDeactivateGuard],
            resolve: {
              lesson: LessonDetailResolverService
            }
          },
          {
            path: '',
            component: LessonsCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule ({
  imports: [
    RouterModule.forChild(lessonsCenterRoutes)
],
  exports: [
    RouterModule
    ]
})
export class LessonsCenterRoutingModule {}
