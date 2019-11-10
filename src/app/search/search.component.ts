import { Component, OnInit } from '@angular/core';

import { data } from '../cards/card.data';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  test = true
  cards = data;
  filteredCards = this.cards;
  constructor(
    public state: StateService,
  ) { }

  ngOnInit() {}

  filter(event) {
    const pattern = event.detail.value;
    this.filteredCards = this.cards.filter(f => {
      return f.category.toLocaleLowerCase().indexOf(pattern.toLocaleLowerCase()) !== -1 || 
              f.a.toLocaleLowerCase().indexOf(pattern.toLocaleLowerCase()) !== -1 ||
              f.b.toLocaleLowerCase().indexOf(pattern.toLocaleLowerCase()) !== -1 
    })
  }

  select(card) {
    this.state.subject.next(card.a);
  }

  close() {
    this.state.subject.next("close")
  }
}
