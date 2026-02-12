import { useState } from 'react';
import type { Group, Card } from '../types/board.types';
import { v4 as uuidv4 } from 'uuid';
import { CARD_GRADIENTS, NAMES, USERNAMES } from '../constants';

export const useBoard = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  const getRandom = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

  const addGroups = () => {
    const newGroup: Group = {
      id: uuidv4(),
      title: `Group ${groups.length + 1}`,
    };
    setGroups([...groups, newGroup]);
    console.log('grupo creado');
  };

  const addCards = (groupId: string) => {
    const newCard: Card = {
      id: uuidv4(),
      groupId,
      name: getRandom(NAMES),
      username: getRandom(USERNAMES),
      colorId: getRandom(CARD_GRADIENTS).id,
    };
    setCards([...cards, newCard]);
  };

  return {
    addGroups,
    groups,
    addCards,
    cards,
  };
};
