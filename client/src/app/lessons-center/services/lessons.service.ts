import { Injectable } from '@angular/core';
import {Lesson} from '../Lesson';
import {LESSONS} from '../mock-lessons';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Level} from '../Level';
import {LEVELS} from '../mock-level';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private lessons$: BehaviorSubject<Lesson[]> = new BehaviorSubject<Lesson[]>(LESSONS);
  private levels$: BehaviorSubject<Level[]> = new BehaviorSubject<Level[]>(LEVELS);

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

  public getLevels() {
    return this.levels$;
  }

  getLevel(id: number | string) {
    return this.getLevels().pipe(
      map(levels => levels.find(level => level.id === +id))
    );
  }




}
