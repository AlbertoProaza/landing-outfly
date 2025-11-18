'use client';

import { useEffect, useState } from 'react';

interface Trail {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail: Trail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      };

      setTrails((prev) => [...prev, newTrail]);

      // Eliminar la estela después de 300ms (más rápido)
      setTimeout(() => {
        setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
      }, 300);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#00D4FF] opacity-15 animate-trail-fade"
          style={{
            left: trail.x - 3,
            top: trail.y - 3,
            boxShadow: '0 0 4px rgba(0, 212, 255, 0.2)',
          }}
        />
      ))}
    </div>
  );
}
