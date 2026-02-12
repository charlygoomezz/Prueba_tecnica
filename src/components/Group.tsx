import type { Card as CardType, Group as GroupType } from '../types/board.types';
import CardComponent from './Card'; // Importación directa del componente
import CreateButton from './CreateButton';

interface GroupProps {
  group: GroupType;
  cards: CardType[];
  addCard: (groupId: string) => void;
}

export default function Group({ group, cards, addCard }: GroupProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-xl w-72 shrink-0 flex flex-col max-h-full">
      <h2 className="font-bold text-gray-700 mb-4 px-1 text-center">{group.title}</h2>

      <div className="flex-1 overflow-y-auto pr-1">
        {cards.map(card => (
          <CardComponent key={card.id} card={card} />
        ))}
        {cards.length === 0 && (
          <p className="text-gray-400 text-xs text-center py-4">No cards yet!</p>
        )}
      </div>
      <CreateButton onClick={() => addCard(group.id)} label="+ Add card" variant="card" />
    </div>
  );
}
