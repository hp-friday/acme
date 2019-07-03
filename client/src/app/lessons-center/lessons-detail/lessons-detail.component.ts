import { Component, OnInit } from '@angular/core';
import {Lesson} from '../Lesson';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '../../dialog.service';
import {Observable} from 'rxjs';
import {CanComponentDeactivate} from '../../can-deactivate.guard';

@Component({
  selector: 'app-lessons-detail',
  templateUrl: './lessons-detail.component.html',
  styleUrls: ['./lessons-detail.component.css']
})
export class LessonsDetailComponent implements OnInit, CanComponentDeactivate {
  lesson: Lesson;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: {lesson: Lesson}) => {
          this.editName = data.lesson.name;
          this.lesson = data.lesson;
      });
  }


  cancel() {
    this.gotoLessons();
  }

  save() {
    this.lesson.name = this.editName;
    this.gotoLessons();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no lesson or the lesson is unchanged
    if (!this.lesson || this.lesson.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }


  gotoLessons() {
    const lessonId = this.lesson ? this.lesson.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: lessonId, foo: 'foo' }], { relativeTo: this.route });
  }



}
