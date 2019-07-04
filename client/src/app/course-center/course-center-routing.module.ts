import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CourseCenterComponent} from './course-center/course-center.component';
import {CourseCardComponent} from './course-card/course-card.component';
import {CourseCategoryComponent} from './course-category/course-category.component';
import {SideMenuComponent} from './side-menu/side-menu.component';

const courseCenterRoutes: Routes = [
        {
          path: 'show',
          component: CourseCenterComponent,
          children: [
            {
              path: '',
              component: CourseCardComponent,
            },
            // {
            //   path: 'hippi',
            //   component: CourseCardHippiComponent
            // },
            {
              path: ':id',
              component: CourseCategoryComponent,
            },
            {
              path: '',
              outlet: 'sidemenu',
              component: SideMenuComponent,
            },
            {
              path: ':id',
              outlet: 'sidemenu',
              component: SideMenuComponent,
            },
            ]
        }
  ];


@NgModule({
  imports: [
    RouterModule.forChild(courseCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CourseCenterRoutingModule { }
