import { Component, OnInit } from '@angular/core';
import {DialogService} from '../../services/dialog.service';
import {BaseTabComponent} from '../../support/tabs/base-tab.component';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent extends BaseTabComponent implements OnInit {


  constructor(_dialogService: DialogService) {
    super(_dialogService)
  }

  ngOnInit() {
    // not working: events must have parent/child-relation, then they have "No routes"
    this.activatedIndex = 2;
    this.onActivated();
  }


}
