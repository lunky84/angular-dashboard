import { Component, AfterViewInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { RouterModule } from '@angular/router';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeAnimation
  ],
  host: {
      class:'classYouWantApplied'
  }
})
export class AppComponent implements AfterViewInit {
  title = 'basic';

  ngAfterViewInit() {
    Feather.replace();
  }
  
}
