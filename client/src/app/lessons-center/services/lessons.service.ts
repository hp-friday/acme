import { Injectable } from '@angular/core';
import {Lesson} from '../Lesson';
import {LESSONS} from '../mock-lessons';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private lessons$: BehaviorSubject<Lesson[]> = new BehaviorSubject<Lesson[]>(LESSONS);

  constructor() { }

  public getLessons() {
    return this.lessons$;
  }

  getLesson(id: number | string) {
    return this.getLessons().pipe(
      map(lessons => lessons.find(lesson => lesson.id === +id))
    );
  }

  addLesson(name: string, description: string, level: string) {
    name = name.trim();
    description = description.trim();
    level = level.trim();
    const id = LESSONS.length + 1;
    const lesson = { id, name, description, level };
    LESSONS.push(lesson);
    this.lessons$.next(LESSONS);
  }


}
