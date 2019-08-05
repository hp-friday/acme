import {Component, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {DialogService} from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Agent Mahoni';

  @ViewChild('notificationContainer', {
    read: ViewContainerRef, static: true
  })
  notificationContainer: ViewContainerRef;

  subscriptions: Array<Subscription> = [];

  constructor(
    private _dialogsService: DialogService,
  ) {
  }



  ngOnInit(): void {
    this._dialogsService.initNotificationContainer(this.notificationContainer);
  }



  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe())
  }










}
