import {Component, OnInit} from '@angular/core';
import {NotificationBaseComponent} from '../base-notification.component';

@Component({
  selector: 'app-notification-info',
  templateUrl: './notification-info.component.html',
  styleUrls: ['./notification-info.component.scss']
})
export class NotificationInfoComponent extends NotificationBaseComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
