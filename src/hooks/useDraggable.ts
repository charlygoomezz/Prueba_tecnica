import { useState, useEffect } from 'react';

export const useDraggable = (
  initialPos: { x: number; y: number },
  onDrag: (id: string, x: number, y: number) => void,
  id: string
) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('.card-item')) return;

    setIsDragging(true);
    setOffset({
      x: e.clientX - initialPos.x,
      y: e.clientY - initialPos.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const nextX = e.clientX - offset.x;
        const nextY = e.clientY - offset.y;
        onDrag(id, nextX, nextY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset, id, onDrag]);

  return { handleMouseDown, isDragging };
};
