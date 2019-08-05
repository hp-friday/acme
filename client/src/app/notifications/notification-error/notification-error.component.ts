import {Component, OnInit} from '@angular/core';
import {NotificationBaseComponent} from '../base-notification.component';

@Component({
  selector: 'app-notification-error',
  templateUrl: './notification-error.component.html',
  styleUrls: ['./notification-error.component.scss']
})
export class NotificationErrorComponent extends NotificationBaseComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
