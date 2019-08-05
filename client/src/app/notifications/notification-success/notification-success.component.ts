import {Component, OnInit} from '@angular/core';
import {NotificationBaseComponent} from '../base-notification.component';

@Component({
  selector: 'app-notification-success',
  templateUrl: './notification-success.component.html',
  styleUrls: ['./notification-success.component.scss']
})

export class NotificationSuccessComponent extends NotificationBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
