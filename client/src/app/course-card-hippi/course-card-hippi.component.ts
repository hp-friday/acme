import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-card-hippi',
  templateUrl: './course-card-hippi.component.html',
  styleUrls: ['./course-card-hippi.component.css']
})
export class CourseCardHippiComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) { }

  private inLove = "I'm in love";
  private iKitty = "I'm Kitty"

  ngOnInit() {
  }


  navigate(path) {
    this.router.navigate([{outlets: {primary: path, sidemenu:path}}],
      {relativeTo: this.route})
  }

}
