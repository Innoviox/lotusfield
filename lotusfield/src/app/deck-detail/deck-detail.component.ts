import { Component, OnInit } from '@angular/core';
import {IDeck} from "../ideck";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.less']
})
export class DeckDetailComponent implements OnInit {
  deck: IDeck | undefined

  constructor(private router: Router, private route: ActivatedRoute) {
    // @ts-ignore
    this.deck = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
  }

}
