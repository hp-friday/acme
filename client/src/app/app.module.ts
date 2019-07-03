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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LessonMenuComponent } from './lesson-menu/lesson-menu.component';
import { LessonsCenterModule } from './lessons-center/lessons-center.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CourseCardComponent,
    CourseCardHippiComponent,
    SideMenuComponent,
    CourseCategoryComponent,
    HeaderComponent,
    FooterComponent,
    LessonMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LessonsCenterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
