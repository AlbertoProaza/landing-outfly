'use client';

import { useRef, useState, useEffect } from 'react';

export default function CompaniesSlider() {
  // Array de logos de empresas (solo 3 empresas)
  const companies = [
    { name: 'Empresa 1', logo: '/logos/company1.png' },
    { name: 'Empresa 2', logo: '/logos/company2.png' },
    { name: 'Empresa 3', logo: '/logos/company3.png' },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicamos las empresas múltiples veces para loop infinito suave
  const repeatedCompanies = [...companies, ...companies, ...companies, ...companies];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Multiplicador para velocidad
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Loop infinito: resetear posición cuando llegue al final
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0;
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = maxScroll;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-black py-16 md:py-20 overflow-hidden border-t border-white/10">
      {/* Título de la sección */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="font-[family-name:var(--font-montserrat)] text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
          Empresas que confían en nosotros
        </h2>
      </div>

      {/* Contenedor del carousel con drag horizontal */}
      <div className="relative overflow-hidden">
        {/* Gradientes en los bordes para efecto de fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Track del carousel - scrollable con drag */}
        <div
          ref={scrollRef}
          className="flex gap-12 md:gap-16 lg:gap-20 px-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {repeatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              {/* Placeholder para el logo */}
              <div className="w-full h-full flex items-center justify-center border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm pointer-events-none">
                <span className="font-[family-name:var(--font-montserrat)] text-white/40 text-sm font-semibold">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Texto adicional opcional */}
      <div className="max-w-7xl mx-auto px-4 mt-12 text-center">
        <p className="font-[family-name:var(--font-montserrat)] text-white/60 text-sm md:text-base">
          +100 empresas nos han elegido para incrementar sus ventas
        </p>
      </div>
    </section>
  );
}
