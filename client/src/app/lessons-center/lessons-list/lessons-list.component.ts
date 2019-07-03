import { Component, OnInit } from '@angular/core';
import {LessonService} from '../services/lessons.service';
import {ActivatedRoute} from '@angular/router';
import {Lesson} from '../Lesson';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  lessons$: Observable<Lesson[]>;;
  selectedId: number;
  selectedLesson: Lesson;

  constructor(public service: LessonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.lessons$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getLessons();
      })
    );
  }

  public selectLesson(lesson) {
    this.selectedId = lesson.id;
    this.selectedLesson = lesson;
    // this.router.navigate([{outlets: {primary: lesson.id, lessonMenu: lesson.id}}],
    //   {relativeTo: this.route});

  }
}
