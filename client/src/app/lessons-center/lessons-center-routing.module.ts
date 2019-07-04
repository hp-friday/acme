import {RouterModule, Routes} from '@angular/router';
import {LessonsCenterComponent} from './lessons-center/lessons-center.component';
import {LessonsCenterHomeComponent} from './lessons-center-home/lessons-center-home.component';
import {LessonsListComponent} from './lessons-list/lessons-list.component';
import {LessonsDetailComponent} from './lessons-detail/lessons-detail.component';
import {NgModule} from '@angular/core';
import {LessonDetailResolverService} from './services/lesson-detail-resolver.service';
import {CanDeactivateGuard} from '../can-deactivate.guard';
import {LessonsMenuComponent} from './lessons-menu/lessons-menu.component';
import {LessonsInfoComponent} from './lessons-info/lessons-info.component';


const lessonsCenterRoutes: Routes = [
  {
    path: 'show',
    component: LessonsCenterComponent,
    children: [
      {
        path: '',
        component: LessonsMenuComponent,
        outlet: 'lessonsMenu',
      },
      {
        path: ':id',
        component: LessonsMenuComponent,
        outlet: 'lessonsMenu',
      },

      {
        path: ':id',
        component: LessonsDetailComponent,
        outlet: 'lessonsDetail',
        canDeactivate: [CanDeactivateGuard],
          resolve: {
            lesson: LessonDetailResolverService
          }
      },

      {
        path: '',
        component: LessonsInfoComponent,
      },
      {
        path: ':id',
        component: LessonsInfoComponent,
        resolve: {
          lesson: LessonDetailResolverService
        }
      },


      // {
      //   path: ':id',
      //   component: LessonsDetailComponent,
      //   outlet: 'lessonsDetail',
      //   // canDeactivate: [CanDeactivateGuard],
      //   // resolve: {
      //   //   lesson: LessonDetailResolverService
      //   // }
      // },
     ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(lessonsCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LessonsCenterRoutingModule {
}
