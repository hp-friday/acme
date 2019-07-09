import { Injectable } from '@angular/core';
import {Lesson} from '../Lesson';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {LessonService} from './lessons.service';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take, withLatestFrom} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LessonDetailResolverService implements Resolve<Lesson> {

  constructor(private service: LessonService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lesson>
| Promise<Lesson> | Lesson {
    const id = route.paramMap.get('id');

    return this.service.getLesson(id).pipe(
      take(1),
      mergeMap(lesson => {
        if (lesson) {
          return of(lesson);
        } else { // id not found
          this.router.navigate(['/lesson-center/show']);
          return EMPTY;
        }
      })
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class LessonBreadcrumbResolverService implements Resolve<string> {

  constructor( private service: LessonService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string>
    | Promise<string> | string {
    const id = route.paramMap.get('id');

    return this.service.getLesson(id).pipe(
      take(1),
      mergeMap(lesson => {
        if (lesson) {
          return of(lesson.name);
        } else { // id not found
          this.router.navigate(['/lesson-center/show']);
          return EMPTY;
        }
      })
    );
  }
}
