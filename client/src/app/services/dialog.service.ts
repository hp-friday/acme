import {ComponentFactoryResolver, EventEmitter, Injectable, ViewContainerRef} from '@angular/core';
import {Type} from '@angular/compiler/src/core';
import {isObject, isUndefined} from "util";
import {NotificationType} from '../notifications/notifications-interfaces';
import {NotificationWarningComponent} from '../notifications/notification-warning/notification-warning.component';
import {NotificationErrorComponent} from '../notifications/notification-error/notification-error.component';
import {NotificationInfoComponent} from '../notifications/notification-info/notification-info.component';
import {NotificationSuccessComponent} from '../notifications/notification-success/notification-success.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {


  private dialogRegister = new Map<DialogsMetaData, EventEmitter<Object>>();


  defaults = {
    NOTIFICATION_DESTROY_AFTER: 3000
  };


  private _notificationContainerElement: ViewContainerRef;


  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  getEmitter(metaData: DialogsMetaData): EventEmitter<Object> {
    let emitter = this.dialogRegister.get(metaData);
    if (isUndefined(emitter)) {
      emitter = new EventEmitter<Object>();
      this.dialogRegister.set(metaData, emitter);
    }

    return emitter;
  }

  initNotificationContainer(notificationContainerElement) {
    this._notificationContainerElement = notificationContainerElement;
  }

  alert(message: string, okCallback?: Function) {
    this.callDialog(DialogsMetaData.ALERT, {
      message: message,
      onOkCallback: okCallback
    });
  }

  prompt(message, okCallback: Function, cancelCallback?: Function) {
    this.callDialog(DialogsMetaData.PROMPT, {
      message: message,
      onOkCallback: okCallback,
      onCancelCallback: cancelCallback
    });
  }

  private callDialog(key: DialogsMetaData, data: any) {
    let emitter = this.dialogRegister.get(key);
    if (!isObject(emitter)) {
      throw "There is not dialog with such key - " + key;
    }
    emitter.next(data);
  }



  confirm(message, okCallback: () => void, cancelCallback?: () => void) {
    this.confirmOptional(
      message,
      [
        {
          title: 'ok',
          onClick: okCallback
        },
        {
          title: 'cancel',
          onClick: cancelCallback
        }
      ]
    );
  }

  confirmOptional(message, buttons: Array<{ title: string, onClick?: () => void }>) {
    this.callDialog(DialogsMetaData.CONFIRM, {
      message: message,
      buttons: buttons
    });
  }

  private _notify(type: Type, message: string) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(type);
    const componentRef = componentFactory.create(this._notificationContainerElement.parentInjector);
    this._notificationContainerElement.insert(componentRef.hostView);
    componentRef.instance['message'] = message;
    window.setTimeout(() => {
      componentRef.destroy();
    }, this.defaults.NOTIFICATION_DESTROY_AFTER);
  }

  notify(nType: NotificationType, message: string) {
    switch (nType) {
      case NotificationType.WARNING:
        this._notify(NotificationWarningComponent, message);
        break;
      case NotificationType.ERROR:
        this._notify(NotificationErrorComponent, message);
        break;
      case NotificationType.INFORMATION:
        this._notify(NotificationInfoComponent, message);
        break;
      case NotificationType.SUCCESS:
        this._notify(NotificationSuccessComponent, message);
        break;
    }
  }


}



export enum DialogsMetaData {
  ALERT = "ALERT",
  PROMPT = "PROMPT",
  CONFIRM = "CONFIRM",
}
