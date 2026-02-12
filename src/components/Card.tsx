import { CARD_GRADIENTS } from '../constants';
import type { Card } from '../types/board.types';

interface CardProps {
  card: Card;
}

export default function Card({ card }: CardProps) {
  const gradient =
    CARD_GRADIENTS.find(gradient => gradient.id === card.colorId)?.classes ||
    CARD_GRADIENTS[0].classes;

  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md border border-gray-100 p-4 mb-3 transition-transform hover:scale-105">
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
