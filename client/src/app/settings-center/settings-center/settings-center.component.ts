import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

import {_} from '../../support/common-functions';
import {settingsRoutes} from '../settings-center-routing.module';

@Component({
  selector: 'app-settings-center',
  templateUrl: './settings-center.component.html',
  styleUrls: ['./settings-center.component.scss']
})
export class SettingsCenterComponent implements OnInit {


  public currentRoutePath = '';

  public children: any[];
  public rootPath: string;


  // not router-based tabset/tab (ng-book-example: working with an Array of tabs)
  // @ContentChildren(BaseTabComponent) tabs: QueryList<BaseTabComponent>;


  constructor(private route: ActivatedRoute, private router: Router) {

    // todo: circular reference warning, because of components imports
    this.children = settingsRoutes[0].children;
  }

  // not router-based tabset/tab (ng-book-example)
  // ngAfterContentInit(): void {
  //   this.tabs.toArray()[0].active = true;
  // }

  // not router-based tabset/tab (ng-book-example)
  // setActive(tab: BaseTabComponent): void {
  //   this.tabs.toArray().forEach((t) => t.active = false);
  //   tab.active = true;
  // }

  // not working: events must have parent/child-relation, then they have "No routes"
  // activateTab($event) {
  //   this.activatedIndex = $event.value()
  // }


  ngOnInit() {
    // console.log('configured routes: ', this.router.config);
    // //
    // this.router.events.subscribe((res) => {
    //   this.activeLinkIndex = this.children.indexOf(this.children.find(tab => tab.link === '.' + this.router.url));
    //   console.log(this.activeLinkIndex);
    // });


    // does not always work, sometimes ngOnInit is not hit, and this.rootPath is undefined
    // - so use string ''/settings-center/show'' in doNavigate instead of this.rootPath
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
          console.log('Navigated to : ' + (event as NavigationEnd).url);
          if (((event as NavigationEnd).url).substr(0, 21) === '/settings-center/show') {
            this.rootPath = (event as NavigationEnd).url;
            //this.currentRoutePath = ((event as NavigationEnd).url).substr(21)
            // this.service.commingOut();
            var status = history.state.data;
            if (_.isDefined(status)) {
              this.currentRoutePath = history.state.data["pid"]
            }
          }
        }
      );
  }


  doNavigate(pid: string) {

    //this.currentRoutePath = pid;

    this.router.navigate(['/settings-center/show',
        {
          outlets:
          // {primary: lesson.id.toString(),  lessonsDetail: lesson.id.toString()}
          //   {primary: this.rootPath.substr(1) + '/', tabbody: pid }
            {tabbody: [pid]}
        }
      ],
      {state: {data: {pid}}}
      // ,
      // {relativeTo: this.route}
    );
  }


}
