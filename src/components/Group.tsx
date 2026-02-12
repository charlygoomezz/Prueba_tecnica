import { useDraggable } from '../hooks/useDraggable';
import type { Card as CardType, Group as GroupType } from '../types/board.types';
import CardComponent from './Card';
import CreateButton from './CreateButton';

interface GroupProps {
  group: GroupType;
  cards: CardType[];
  addCard: (groupId: string) => void;
  dragAndDrop: (id: string, x: number, y: number) => void;
}

export default function Group({ group, cards, addCard, dragAndDrop }: GroupProps) {
  const isLimitReached = cards.length >= 3;

  const { handleMouseDown } = useDraggable({ x: group.x, y: group.y }, dragAndDrop, group.id);

  return (
    <div
      onMouseDown={handleMouseDown}
      className={`absolute bg-gray-100 p-4 rounded-2xl w-80 flex flex-col`}
      style={{
        left: group.x,
        top: group.y,
        cursor: 'cell',
      }}
    >
      <h2 className="font-bold text-gray-700 mb-4 px-1 text-center select-none">{group.title}</h2>

      <div className="flex-1 overflow-y-auto pr-1 max-h-[60vh]">
        {cards.map(card => (
          <div key={card.id} className="card-item">
            <CardComponent card={card} />
          </div>
        ))}
        {cards.length === 0 && (
          <p className="text-gray-400 text-xs text-center py-8 italic">No cards yet!</p>
        )}
      </div>

      <CreateButton
        onClick={() => addCard(group.id)}
        label={isLimitReached ? 'No more cards!' : '+ Add card'}
        variant="card"
        disabled={isLimitReached}
      />
    </div>
  );
}
