import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      breadcrumb: 'About'
    }
  },
  {
    path: 'extras-center',
    loadChildren: () => import('./extras-center/extras-center.module').then(mod => mod.ExtrasCenterModule),
    data: { preload: true, breadcrumb: '' }
  },
  {
    path: 'settings-center',
    loadChildren: () => import('./settings-center/settings-center.module').then(mod => mod.SettingsCenterModule),
    data: { preload: true, breadcrumb: '' }
  },
  {
    path: 'lessons-center',
    loadChildren: () => import('./lessons-center/lessons-center.module').then(mod => mod.LessonsCenterModule),
    data: { preload: true, breadcrumb: '' }
  },
  {
    path: 'course-center',
    loadChildren: () => import('./course-center/course-center.module').then(mod => mod.CourseCenterModule),
    data: { preload: true, breadcrumb: '' }
  },



  // {
  //   path: 'course',
  //   component: CourseComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: CourseCardComponent,
  //     },
  //     // {
  //     //   path: 'hippi',
  //     //   component: CourseCardHippiComponent
  //     // },
  //     {
  //       path: ':id',
  //       component: CourseCategoryComponent,
  //     },
  //     {
  //       path: '',
  //       outlet: 'sidemenu',
  //       component: SideMenuComponent,
  //     },
  //     {
  //       path: ':id',
  //       outlet: 'sidemenu',
  //       component: SideMenuComponent,
  //     },
  //   ]
  // },
  //
  // {
  //   path: 'lessons',
  //   component: LessonListComponent,
  //   children: [
  //     {
  //       path: ':id',
  //       outlet: 'lessonMenu',
  //       component: LessonsMenuComponent,
  //     },
  //     {
  //       path: '',
  //       outlet: 'lessonMenu',
  //       component: LessonsMenuComponent,
  //     },
  //
  //
  //
  //
  //   ]
  //
  // },
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
