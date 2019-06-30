import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CourseComponent} from './course/course.component';
import {CourseCardComponent} from './course-card/course-card.component';
import {CourseCardHippiComponent} from './course-card-hippi/course-card-hippi.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {CourseCategoryComponent} from './course-category/course-category.component';

//const routes: Routes = [];


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'course',
    component: CourseComponent,
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
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes,  {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutes: Routes = [
  ...routes
];
