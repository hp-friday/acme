import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CourseCenterRoutingModule} from './course-center-routing.module';
import {CourseCategoryComponent} from '../course-center/course-category/course-category.component';
import {CourseCardComponent} from '../course-center/course-card/course-card.component';
import {SideMenuComponent} from '../course-center/side-menu/side-menu.component';
import {CourseCenterComponent} from './course-center/course-center.component';
import {CourseCardHippiComponent} from './course-card-hippi/course-card-hippi.component';

@NgModule({
  declarations: [
    CourseCategoryComponent,
    CourseCardComponent,
    SideMenuComponent,
    CourseCenterComponent,
    CourseCardHippiComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CourseCenterRoutingModule,
  ]
})
export class CourseCenterModule { }
