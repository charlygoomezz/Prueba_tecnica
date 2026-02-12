import { useId, useState } from 'react';
import type { Group } from '../types/board.types';

export const useBoard = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const id = useId();

  const addGroups = () => {
    const newGroup: Group = {
      id: id,
      title: `Group ${groups.length + 1}`,
    };
    setGroups([...groups, newGroup]);
    console.log('grupo creado');
  };
  return {
    addGroups,
  };
};
