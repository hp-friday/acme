import { Component, OnInit } from '@angular/core';
import {BaseTabComponent} from '../../support/tabs/base-tab.component';
import {DialogService} from '../../services/dialog.service';

@Component({
  selector: 'app-defaults',
  templateUrl: './defaults.component.html',
  styleUrls: ['./defaults.component.scss']
})
export class DefaultsComponent extends BaseTabComponent implements OnInit {


  constructor(_dialogService: DialogService) {
    super(_dialogService)
  }

  ngOnInit() {
    // not working: events must have parent/child-relation, then they have "No routes"
    this.activatedIndex = 1;
    this.onActivated();
  }


}
