import { CARD_GRADIENTS } from '../constants';
import type { Card } from '../types/board.types';

interface CardProps {
  card: Card;
  onClick: (id: string) => void;
  isSelected: boolean;
}

export default function Card({ card, onClick, isSelected }: CardProps) {
  const gradient =
    CARD_GRADIENTS.find(gradient => gradient.id === card.colorId)?.classes ||
    CARD_GRADIENTS[0].classes;

  return (
    <div
      id={card.id}
      onClick={() => onClick(card.id)}
      className={`max-w-xs mx-auto bg-white rounded-xl p-4 mb-3 transition-all duration-200 cursor-pointer border
        ${
          isSelected
            ? 'border-sky-200 ring ring-blue-500/10 shadow-lg'
            : 'border-gray-100 shadow-sm hover:border-gray-300 hover:shadow-md'
        }`}
    >
      <div className="flex items-center space-x-4">
        <div className={`h-12 w-12 rounded-full shadow-lg ring-2 ring-gray-200 ${gradient}`}></div>
        <div>
          <h3 className="text-sm font-bold text-gray-900">{card.name}</h3>
          <p className="text-gray-500 font-medium text-xs">{card.username}</p>
        </div>
      </div>
    </div>
  );
}
