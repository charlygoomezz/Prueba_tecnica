export interface Card {
  id: string;
  groupId: string;
  name: string;
  text: string;
}

export interface Group {
  id: string;
  title: string;
}

export interface BoardState {
  groups: Group[];
  cards: Card[];
}
