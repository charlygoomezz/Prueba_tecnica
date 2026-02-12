export interface Card {
  id: string;
  groupId: string;
  name: string;
  username: string;
  colorId: string;
}

export interface Group {
  id: string;
  title: string;
  x: number;
  y: number;
}

export interface BoardState {
  groups: Group[];
  cards: Card[];
}
