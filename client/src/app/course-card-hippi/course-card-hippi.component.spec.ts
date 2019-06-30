import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardHippiComponent } from './course-card-hippi.component';

describe('CourseCardHippiComponent', () => {
  let component: CourseCardHippiComponent;
  let fixture: ComponentFixture<CourseCardHippiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardHippiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardHippiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
