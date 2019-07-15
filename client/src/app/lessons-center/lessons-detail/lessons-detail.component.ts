import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Lesson} from '../Lesson';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '../../dialog.service';
import {Observable} from 'rxjs';
import {CanComponentDeactivate} from '../../can-deactivate.guard';
import {LessonService} from '../services/lessons.service';
import {Level} from '../Level';

@Component({
  selector: 'app-lessons-detail',
  templateUrl: './lessons-detail.component.html',
  styleUrls: ['./lessons-detail.component.scss']
})
export class LessonsDetailComponent implements OnInit, CanComponentDeactivate {

  lesson: Lesson;
  levels$: Observable<Level[]>;
  submitted = true;  // set to false and when change behaviour of validation: during entry or after submit...


  detailForm = this.fb.group({
    nameControl: [''],
    descControl: ['', Validators.required],
    levelControl: [''],
    passwordControl: ['', [Validators.required, Validators.minLength(6)]],
    confirmControl: ['', Validators.required],
  }, {
    validator: MustMatch('passwordControl', 'confirmControl')
  });


  constructor(
    private service: LessonService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { lesson: Lesson }) => {
        this.detailForm.patchValue({
            nameControl: data.lesson ? data.lesson.name : '',
            descControl: data.lesson ? data.lesson.description : '',
            levelControl: data.lesson ? data.lesson.level : '',
          }
        );
        this.lesson = data.lesson;
      });
    this.levels$ = this.service.getLevels();
  }


  cancel() {
    this.gotoLessons();
  }

  save() {
    this.lesson.name = this.detailForm.get('nameControl').value;
    this.lesson.description = this.detailForm.get('descControl').value;
    this.lesson.level = this.detailForm.get('levelControl').value;
    this.gotoLessons();
  }

  get f() {
    return this.detailForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.detailForm.invalid) {
      return;
    }
    this.lesson.name = this.detailForm.get('nameControl').value;
    this.lesson.description = this.detailForm.get('descControl').value;
    this.lesson.level = this.detailForm.get('levelControl').value;

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.detailForm.value, null, 4));
    this.gotoLessons();
  }

  onReset() {
    this.submitted = false;
    this.detailForm.reset();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`)

    // if no lesson
    if (!this.lesson) {
      return true;
    }

    // or the lesson is unchanged
    if (this.lesson.name === this.detailForm.get('nameControl').value) {
      if (this.lesson.description === this.detailForm.get('descControl').value) {
        if (this.lesson.level === this.detailForm.get('levelControl').value) {
          return true;
        }
      }
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
    this.router.navigate(['../', {id: lessonId, foo: 'foo'}], {relativeTo: this.route});
  }


}

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}
