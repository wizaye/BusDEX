import React, { useState, useEffect } from 'react';

interface MousePosition {
  x: number | null;
  y: number | null;
}

interface UseMousePositionOptions {
  includeTouch?: boolean;
}

const useMousePosition = ({ includeTouch }: UseMousePositionOptions = {}) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent | TouchEvent) => {
      let x: number, y: number;
      if ('touches' in ev) {
        const touch = ev.touches[0];
        [x, y] = [touch.clientX, touch.clientY];
      } else {
        [x, y] = [(ev as MouseEvent).clientX, (ev as MouseEvent).clientY];
      }
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', updateMousePosition);

    if (includeTouch) {
      window.addEventListener('touchmove', updateMousePosition);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (includeTouch) {
        window.removeEventListener('touchmove', updateMousePosition);
      }
    };
  }, [includeTouch]);

  return mousePosition;
};

export default useMousePosition;
