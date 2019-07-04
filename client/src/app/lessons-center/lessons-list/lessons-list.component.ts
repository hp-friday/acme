import {Component, OnInit} from '@angular/core';
import {LessonService} from '../services/lessons.service';
import {ActivatedRoute, NavigationCancel, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {Lesson} from '../Lesson';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  lessons$: Observable<Lesson[]>;
  selectedId: number;
  selectedLesson: Lesson;

  intentionId: number;
  intentionLesson: Lesson;


  constructor(public service: LessonService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.lessons$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getLessons();
      }));

    this.router.events
      .subscribe(e => this.routerEvents(e));
  }

  routerEvents(e: any) {
    // if (e instanceof NavigationCancel) {}
    if (e instanceof NavigationEnd) {
      this.selectedId = this.intentionId;
      this.selectedLesson = this.intentionLesson;
    }
  }

  public selectLesson(lesson) {

//    this.router.navigateByUrl('/lessons-center/(' + lesson.id + '//lessonsMenu:' + lesson.id + ')' , {skipLocationChange: true});
    this.intentionId = lesson.id;
    this.intentionLesson = lesson;

    this.router.navigate([
        {
          outlets:
            {primary: lesson.id.toString(), lessonsMenu: lesson.id.toString(), lessonsDetail: lesson.id.toString()}
        }
      ],
      {relativeTo: this.route}).then(() => {});


    // this.router.navigate(['../', { id: lesson.id, foo: 'foo' }], { relativeTo: this.route });

  }
}
