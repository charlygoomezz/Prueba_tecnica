import { useState } from 'react';
import type { Group, Card, Edge } from '../types/board.types';
import { v4 as uuidv4 } from 'uuid';
import { CARD_GRADIENTS, NAMES, USERNAMES } from '../constants';

export const useBoard = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const getRandom = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

  const addGroups = () => {
    const newGroup: Group = {
      id: uuidv4(),
      title: `Group ${groups.length + 1}`,
      x: 50 + groups.length * 340,
      y: 100,
    };
    setGroups([...groups, newGroup]);
  };

  const addCards = (groupId: string) => {
    const cardsInGroup = cards.filter(card => card.groupId === groupId);

    if (cardsInGroup.length >= 5) {
      alert('This group already has 5 cards');
      return;
    }

    const newCard: Card = {
      id: uuidv4(),
      groupId,
      name: getRandom(NAMES),
      username: getRandom(USERNAMES),
      colorId: getRandom(CARD_GRADIENTS).id,
    };
    setCards([...cards, newCard]);
  };

  const dragAndDrop = (id: string, x: number, y: number) => {
    setGroups(prev => prev.map(group => (group.id === id ? { ...group, x, y } : group)));
  };

  const connectCards = (cardId: string) => {
    if (!selectedCardId) {
      setSelectedCardId(cardId);
    } else if (selectedCardId === cardId) {
      setSelectedCardId(null);
    } else {
      setEdges([...edges, { from: selectedCardId, to: cardId }]);
      setSelectedCardId(null);
    }
  };

  return {
    addGroups,
    groups,
    addCards,
    cards,
    dragAndDrop,
    edges,
    selectedCardId,
    connectCards,
  };
};
