import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-settings-center',
  templateUrl: './settings-center.component.html',
  styleUrls: ['./settings-center.component.scss']
})
export class SettingsCenterComponent implements OnInit {



  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
