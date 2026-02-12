import { useEffect, useState } from 'react';
import type { Edge } from '../types/board.types';

interface EdgeLayerProps {
  edges: Edge[];
}

export default function EdgeLayer({ edges }: EdgeLayerProps) {
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setTick(t => t + 1);
    window.addEventListener('mousemove', handleUpdate);
    return () => window.removeEventListener('mousemove', handleUpdate);
  }, []);

  return (
    <svg className="w-full h-full">
      {edges.map((edge, index) => {
        const fromElement = document.getElementById(edge.from);
        const toElement = document.getElementById(edge.to);

        if (!fromElement || !toElement) return null;

        const rectFrom = fromElement.getBoundingClientRect();
        const rectTo = toElement.getBoundingClientRect();

        const x1 = rectFrom.left + rectFrom.width / 2;
        const y1 = rectFrom.top + rectFrom.height / 2;
        const x2 = rectTo.left + rectTo.width / 2;
        const y2 = rectTo.top + rectTo.height / 2;

        return (
          <line
            key={`${edge.from}-${edge.to}-${index}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#003822"
            strokeWidth="1"
            opacity="0.2"
            className="transition-all"
          />
        );
      })}
    </svg>
  );
}
