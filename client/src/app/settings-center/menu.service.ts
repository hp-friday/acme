import {Injectable} from '@angular/core';
import {settingsCenterRoutes} from './settings-center-routes';
import {Route} from '@angular/router';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public routeDefinitions: Route[]

  ;

  constructor() {
    this.routeDefinitions = settingsCenterRoutes[0].children;
      // .splice(1);
  }

  public commingOut() {
    for (const x of this.routeDefinitions) {
      console.log(x.path);
    }



  }


}
