import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  private what = '';


  constructor(route: ActivatedRoute) {

      console.log('side menu activated');

      route.params.subscribe( params => {
          console.log('side menu id parameter', params.id);
          this.what = params.id;
        }
      );
  }


  ngOnInit() {
  }

}
