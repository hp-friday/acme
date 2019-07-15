import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Lesson} from '../Lesson';

@Component({
  selector: 'app-lessons-info',
  templateUrl: './lessons-info.component.html',
  styleUrls: ['./lessons-info.component.scss']
})
export class LessonsInfoComponent implements OnInit {
  private selectedId = '';
  private selectedLesson;


  constructor(private route: ActivatedRoute) {

    console.log('lessons info activated');

    route.params.subscribe( params => {
        console.log('lessons info id parameter', params.id);
        this.selectedId = params.id;
      }
    );
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { lesson: Lesson }) => {
        this.selectedLesson = data.lesson;
      });
  }

}
