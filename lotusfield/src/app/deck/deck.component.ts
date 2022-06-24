import { Component, OnInit } from '@angular/core';
import {ICard} from "../icard";

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.less']
})
export class DeckComponent implements OnInit {
  cards: ICard[]

  constructor() {
    this.cards = [{"name": "Rith, the Awakener"}];
  }

  ngOnInit(): void {
  }

}
