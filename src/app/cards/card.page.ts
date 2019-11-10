import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

import { StateService } from 'src/app/state.service';
import { data } from './card.data';
import { SearchComponent } from '../search/search.component';

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
  public categoryContent : string;

  constructor(
    public state: StateService,
    public sanitizer: DomSanitizer,
    public modalController: ModalController,
  ) {
    const randomizedData = this.shuffle(data);
    this.frontContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].a);
    this.backContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].b);
    this.categoryContent = randomizedData[this.index].category;

    state.subject.subscribe((f) => {
      if (!f) {
      } else if (f === "next") {
        this.index = this.index + 1 >= data.length ? 0 : this.index + 1;
      } else if (f === "previous") {
        this.index = this.index - 1 < 0 ? data.length - 1 : this.index - 1;
      } else if( f === "close") {
        this.modalController.dismiss();
      } else {
        this.modalController.dismiss();
        this.index = randomizedData.findIndex(rd => rd.a === f)
      }
      this.flipped = false;
      this.frontContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].a);
      this.backContent = this.sanitizer.bypassSecurityTrustHtml(randomizedData[this.index].b);
      this.categoryContent = randomizedData[this.index].category;
    });
  }

  swipeLeft() {
    this.state.update("next");
  }

  swipeRight() {
    this.state.update("previous");
  }

  flip() {
    this.flipped = !this.flipped;
  }
  
  shuffle(origArray) {
    let array = [...origArray];
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
  
  async clickSearch() {
    const modal = await this.modalController.create({
      component: SearchComponent
    });
    return await modal.present();
  }

}
