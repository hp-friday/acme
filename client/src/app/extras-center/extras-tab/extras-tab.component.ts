import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-extras-tab',
  templateUrl: './extras-tab.component.html',
  styleUrls: ['./extras-tab.component.scss']
})
export class ExtrasTabComponent implements OnInit {

  active = false;
  name: string;

  private what: any;


  constructor(route: ActivatedRoute) {

    route.url.subscribe( url => {
        this.what = route.url.pipe(map(segments => segments.join('')));
      }
    );

  }

  ngOnInit() {
  }

}
