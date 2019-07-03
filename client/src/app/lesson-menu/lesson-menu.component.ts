import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-menu',
  templateUrl: './lesson-menu.component.html',
  styleUrls: ['./lesson-menu.component.css']
})
export class LessonMenuComponent implements OnInit {

  private what = '';

  constructor(route: ActivatedRoute) {
    console.log('lesson menu activated');
    route.params.subscribe( params => {
        console.log('side menu id parameter', params.id);
        this.what = params.id;
      }
    );
  }


  ngOnInit() {
  }



}
