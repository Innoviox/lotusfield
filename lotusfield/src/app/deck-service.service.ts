import { Injectable } from '@angular/core';
import {IDeck} from "./ideck";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  url = "assets/decks.json";

  constructor(private http: HttpClient) { }

  getDecks(): Observable<IDeck[]> {
    return this.http.get<IDeck[]>(this.url);
  }
}
