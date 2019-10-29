import { Component, AfterViewInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { RouterModule } from '@angular/router';
import { slideFadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideFadeAnimation
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
