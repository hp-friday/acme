import {Component, OnInit} from '@angular/core';
import {NotificationBaseComponent} from '../base-notification.component';

@Component({
  selector: 'app-notification-warning',
  templateUrl: './notification-warning.component.html',
  styleUrls: ['./notification-warning.component.scss']
})
export class NotificationWarningComponent extends NotificationBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {

  }

}
