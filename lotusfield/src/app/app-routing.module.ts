import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeckDetailComponent} from "./deck-detail/deck-detail.component";
import {DeckComponent} from "./deck/deck.component";

const routes: Routes = [
  { path: 'decks/:id', component: DeckDetailComponent },
  { path: '', component: DeckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
