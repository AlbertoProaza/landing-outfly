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

      // Eliminar la estela después de 600ms
      setTimeout(() => {
        setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
      }, 600);
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
          className="absolute w-3 h-3 rounded-full bg-[#00D4FF] opacity-60 animate-trail-fade"
          style={{
            left: trail.x - 6,
            top: trail.y - 6,
            boxShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF',
          }}
        />
      ))}
    </div>
  );
}
