import { Component, OnInit } from '@angular/core';
import {ICard} from "../icard";
import {IDeck} from "../ideck";
import {Subscription} from "rxjs";
import {DeckService} from "../deck-service.service";

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.less']
})
export class DeckComponent implements OnInit {
  decks: IDeck[] = [];

  sub!: Subscription;

  constructor(private deckService: DeckService) {
    console.log("constructing")
  }

  ngOnInit(): void {
    this.sub = this.deckService.getDecks().subscribe({
      next: decks => {
        this.decks = decks;
      },
      error: err => console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
