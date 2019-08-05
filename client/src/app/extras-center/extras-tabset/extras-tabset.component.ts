import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router} from '@angular/router';
import {ExtrasTabComponent} from '../extras-tab/extras-tab.component';
import {settingsRoutes} from '../../settings-center/settings-center-routing.module';
import {extrasRoutes} from '../extras-center-routing.module';
import {filter} from 'rxjs/operators';
import {_} from '../../support/common-functions';

@Component({
  selector: 'app-extras-tabset',
  templateUrl: './extras-tabset.component.html',
  styleUrls: ['./extras-tabset.component.scss']
})
export class ExtrasTabsetComponent implements OnInit, AfterContentInit {

  // not router-based tabset/tab (ng-book-example: working with an Array of tabs)
  @ContentChildren(ExtrasTabComponent) tabs: QueryList<ExtrasTabComponent>;

  public currentRoutePath = '';
  public children: Route[];
  public rootPath: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.children = extrasRoutes[0].children;
  }

  ngOnInit() {
    console.log('configured routes: ', this.router.config);

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
          console.log('Navigated to : ' + (event as NavigationEnd).url);
          if (((event as NavigationEnd).url).substr(0, 19) === '/extras-center/show') {
            this.rootPath = (event as NavigationEnd).url.substr(0, 19);
            const currentUrl = (event as NavigationEnd).url

            if (currentUrl.includes('Export')) this.currentRoutePath = 'Export';
            if (currentUrl.includes('Import')) this.currentRoutePath = 'Import';
            if (currentUrl.includes('Backup')) this.currentRoutePath = 'Backup';
           }
        }
      );

    //
    // this.router.events.subscribe((res) => {
    //   this.activeLinkIndex = this.children.indexOf(this.children.find(tab => tab.link === '.' + this.router.url));
    //   console.log(this.activeLinkIndex);
    // });

  }

  ngAfterContentInit(): void {
    //this.tabs.toArray()[0].active = true;
  }

  setActive(tab: ExtrasTabComponent) : void {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }


  doNavigate(pid: string) {

    this.currentRoutePath = pid;

    this.router.navigate([ _.isDefined(this.rootPath) ? this.rootPath : '/extras-center/show',
        {
          outlets: {tabbody: [pid]}
        }
      ],
      {state: {data: {pid}}}
    );
  }


}
