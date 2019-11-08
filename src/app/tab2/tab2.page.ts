import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public flipped : boolean = false;

  public frontContent : string;
  public backContent : string;

  constructor() {
    this.frontContent = 'howdy';
    this.backContent = 'broskie';
  }

  public flip() {
    this.flipped = !this.flipped;
  }
  
}
