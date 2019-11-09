import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { StateService } from 'src/app/state.service';
import { data } from './data';

@Component({
  selector: 'app-tab2',
  templateUrl: 'card.page.html',
  styleUrls: ['card.page.scss']
})
export class CardPage {

  public index = 0;
  public flipped : boolean = false;

  public frontContent : SafeHtml;
  public backContent : SafeHtml;

  constructor(
    public state: StateService,
    public sanitizer: DomSanitizer,
  ) {
    const randomizedData = this.shuffle(data);
    this.frontContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].a);
    this.backContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].b);

    state.subject.subscribe((f) => {
      if (f === "next") {
        this.index = this.index + 1 >= data.length ? 0 : this.index + 1;
      } else if (f === "previous") {
        this.index = this.index - 1 < 0 ? data.length - 1 : this.index - 1;
      }
      this.flipped = false;
      this.frontContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].a);
      this.backContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].b);
    });
  }

  swipeLeft() {
    this.state.update("next");
    alert("next")
  }

  swipeRight() {
    this.state.update("previous");
  }

  flip() {
    this.flipped = !this.flipped;
  }
  
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  clickPrevious() {
    this.state.update("previous");
  }

  clickNext() {
    this.state.update("next");
  }
  
}
