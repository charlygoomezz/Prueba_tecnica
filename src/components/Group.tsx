import { useDraggable } from '../hooks/useDraggable';
import type { Card as CardType, Group as GroupType } from '../types/board.types';
import CardComponent from './Card';
import CreateButton from './CreateButton';

interface GroupProps {
  group: GroupType;
  cards: CardType[];
  addCard: (groupId: string) => void;
  dragAndDrop: (id: string, x: number, y: number) => void;
  onCardClick: (id: string) => void;
  selectedCardId: string | null;
}

export default function Group({
  group,
  cards,
  addCard,
  dragAndDrop,
  onCardClick,
  selectedCardId,
}: GroupProps) {
  const { handleMouseDown } = useDraggable({ x: group.x, y: group.y }, dragAndDrop, group.id);

  return (
    <div
      onMouseDown={handleMouseDown}
      className="absolute bg-gray-100 p-4 rounded-2xl w-80 flex flex-col shadow-md"
      style={{
        left: group.x,
        top: group.y,
        cursor: 'grab',
      }}
    >
      <h2 className="font-bold text-gray-700 mb-4 px-1 text-center select-none">{group.title}</h2>

      <div className="flex-1 overflow-y-auto pr-1 ">
        {cards.map(card => (
          <CardComponent
            key={card.id}
            card={card}
            onClick={onCardClick}
            isSelected={selectedCardId === card.id}
          />
        ))}
      </div>

      <CreateButton
        onClick={() => addCard(group.id)}
        label={cards.length >= 5 ? 'Limit reached' : '+ Add card'}
        variant="card"
        disabled={cards.length >= 5}
      />
    </div>
  );
}
