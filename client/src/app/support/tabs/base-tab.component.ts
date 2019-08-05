import {EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Constants} from '../global-constants';
import {Subscription} from 'rxjs';
import {DialogService} from '../../services/dialog.service';

export class BaseTabComponent implements OnDestroy {

  readonly constants = Constants;
  public activatedIndex = -1;

  @Input() params = {active: false, title: ''};
  @Output() activationRequest = new EventEmitter<Number>();

  private selfClose = new Function();
  protected changed = false;
  public active = false;
  protected readonly _subscriptions: Array<Subscription> = [];

  constructor(protected _dialogService: DialogService ) {
    this.constants = Constants;
  }

  isChanged() {
    return Boolean(this.changed) && this.changed;
  }

  onActivated() {
    // not working: events must have parent/child-relation, then they have "No routes"
    this.activationRequest.emit(this.activatedIndex);
  }

  ngOnDestroy() {
    this._subscriptions.forEach( subscription => subscription.unsubscribe());
  }

}
