import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-menu',
  templateUrl: './lessons-menu.component.html',
  styleUrls: ['./lessons-menu.component.css']
})
export class LessonsMenuComponent implements OnInit {

  private what = 'Sapperlott';

  constructor(route: ActivatedRoute) {
    console.log('lessons menu activated');
    route.params.subscribe( params => {
        console.log('lesson id parameter', params.id);
        this.what = params.id ? params.id : 'Sapperlott';
      }
    );
  }


  ngOnInit() {
  }



}
