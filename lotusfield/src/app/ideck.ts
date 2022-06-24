import {ICard} from "./icard";

export interface IDeck {
  id: number,
  name: string
  cards: ICard[]
}
