import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Route, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MenuService} from '../settings-center/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public children: Route[];
  public rootPath: string;

  constructor(private router: Router, private service: MenuService, private route: ActivatedRoute) {
    this.children = service.routeDefinitions;
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
          console.log('Navigated to : ' + (event as NavigationEnd).url);
          if ((event as NavigationEnd).url === '/settings-center/show') {
            this.rootPath = (event as NavigationEnd).url;
            // this.service.commingOut();
          }
        }
      );
  }

  doNavigate(pid: string) {

    this.router.navigate([ this.rootPath,
        {
          outlets:
          // {primary: lesson.id.toString(),  lessonsDetail: lesson.id.toString()}
          //   {primary: this.rootPath.substr(1) + '/', tabbody: pid }
          { tabbody: [ pid ] }
        }
      ]
      // ,
      // {relativeTo: this.route}
      );

    console.log(pid);
  }

}
