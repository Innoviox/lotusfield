import { Component, OnInit } from '@angular/core';
import {ICard} from "../icard";
import {IDeck} from "../ideck";

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.less']
})
export class DeckComponent implements OnInit {
  decks: IDeck[]

  constructor() {
    this.decks = [{id: 1, name: "Rith", cards: [{"name": "Rith, the Awakener"}]}];
  }

  ngOnInit(): void {
  }

}
