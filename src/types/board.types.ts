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
export interface Edge {
  from: string;
  to: string;
}

export interface BoardState {
  groups: Group[];
  cards: Card[];
  nodes: Edge[];
}
