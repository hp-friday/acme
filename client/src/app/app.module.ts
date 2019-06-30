import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseCardHippiComponent } from './course-card-hippi/course-card-hippi.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CourseCategoryComponent } from './course-category/course-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CourseCardComponent,
    CourseCardHippiComponent,
    SideMenuComponent,
    CourseCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
