import { Component, OnInit } from '@angular/core';
import {BaseTabComponent} from '../../support/tabs/base-tab.component';
import {DialogService} from '../../services/dialog.service';
import {NotificationType} from '../../notifications/notifications-interfaces';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent extends BaseTabComponent implements OnInit {


  calc2 = '8';


  constructor(_dialogService: DialogService) {
    super(_dialogService)
  }

  ngOnInit() {
    // not working: events must have parent/child-relation, then they have "No routes"
    this.activatedIndex = 0;
    this.onActivated();
  }

  testClick() {
    this.changed = true;
  }

  makeWarningNotification(message) {
    this._dialogService.notify(NotificationType.WARNING, message);
  }

  makeErrorNotification(message) {
    this._dialogService.notify(NotificationType.ERROR, message);
  }

  makeInfoNotification(message) {
    this._dialogService.notify(NotificationType.INFORMATION, message);
  }

  makeSuccessNotification(message) {
    this._dialogService.notify(NotificationType.SUCCESS, message);
  }

  testAlert(message) {
    this._dialogService.alert(message, () => {
      setTimeout(() => {
        this._dialogService.alert('test2');
      }, 0);

    });
  }

  testHistoryPerson(message) {

  }

  testConfirm(message) {
    this._dialogService.confirm(message,
      () => {
        console.log('Confirmed');
      },
      () => {
        console.log('Canceled');
      }
    );
  }

  testConfirmOptional(message) {
    this._dialogService.confirmOptional(message, [
      {
        title: "btnOk",
        onClick: () => {
          console.log('Yes');
        }
      },
      {
        title: "btnNo",
        onClick: () => {
          console.log('No');
        }
      },
      {
        title: "btnCancel",
        onClick: () => {
          console.log('Cancel');
        }
      }
    ]);
  }

  testPrompt(message) {
    this._dialogService.prompt(message,
      (text) => {
        console.log('Prompt text = ', text);
      },
      () => {
        console.log('Prompt canceled');
      }
    );
  }

  resetContexts() {
    // this._contextsService.reset();
  }

}
