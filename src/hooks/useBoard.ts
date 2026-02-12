import { useState } from 'react';
import type { Group } from '../types/board.types';
import { v4 as uuidv4 } from 'uuid';

export const useBoard = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  const addGroups = () => {
    const newGroup: Group = {
      id: uuidv4(),
      title: `Group ${groups.length + 1}`,
    };
    setGroups([...groups, newGroup]);
    console.log('grupo creado');
  };

  return {
    addGroups,
    groups,
  };
};
