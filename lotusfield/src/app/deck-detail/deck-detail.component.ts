import { Component, OnInit } from '@angular/core';
import {IDeck} from "../ideck";
import {ActivatedRoute, Router} from "@angular/router";
import {DeckService} from "../deck-service.service";
import {filter, Subscription} from "rxjs";

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.less']
})
export class DeckDetailComponent implements OnInit {
  sub!: Subscription;
  deck: IDeck | undefined;
  id: number | undefined;

  constructor(private deckService: DeckService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.deckService.getDecks().subscribe({
      next: decks => {
        this.deck = decks.filter(i => i.id == this.id)[0];
      },
      error: err => console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
