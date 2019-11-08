import { Component } from '@angular/core';

import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'nav.page.html',
  styleUrls: ['nav.page.scss']
})
export class NavPage {

  constructor(private state: StateService) {}

  clickPrevious() {
    this.state.update("previous");
  }

  clickNext() {
    this.state.update("next");
  }
}
