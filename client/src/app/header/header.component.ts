import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Route, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {extrasRoutes} from '../extras-center/extras-center-routing.module';
import {settingsRoutes} from '../settings-center/settings-center-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public children: Route[];
  public extras: Route[];
  public rootPath: string;

  constructor(private router: Router) {
    this.children =settingsRoutes[0].children;
    this.extras = extrasRoutes[0].children;
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
          console.log('Navigated to : ' + (event as NavigationEnd).url);
          if (((event as NavigationEnd).url).substr(0, 21) === '/settings-center/show') {
            this.rootPath = (event as NavigationEnd).url.substr(0, 21)
          }
          if (((event as NavigationEnd).url).substr(0, 19) === '/extras-center/show') {
            this.rootPath = (event as NavigationEnd).url.substr(0, 19)
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
      ],
      { state: {data: { pid } }}
      // ,
      // {relativeTo: this.route}
      );

    console.log(pid);
  }

}
