import {Input, OnInit} from '@angular/core';

export abstract class NotificationBaseComponent implements OnInit {

  @Input('message') message = '';
  hidden = false;

  constructor() {

  }

  ngOnInit() {
  }

  close() {
    this.hidden = true;
  }
}
