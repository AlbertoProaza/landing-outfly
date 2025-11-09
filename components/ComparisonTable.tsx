'use client';

import { useEffect, useRef, useState } from 'react';

interface ComparisonRow {
  feature: string;
  competitor: boolean | string;
  outfly: boolean | string;
  highlight?: boolean; // Para destacar ventajas únicas de Outfly
}

type TabType = 'outfly' | 'others';

export default function ComparisonTable() {
  const [visibleRows, setVisibleRows] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('outfly');
  const sectionRef = useRef<HTMLDivElement>(null);

  const comparisons: ComparisonRow[] = [
    {
      feature: 'Llamadas en frío por ti',
      competitor: true,
      outfly: 'Equipo de expertos realiza llamadas diarias con tono cercano y honesto',
    },
    {
      feature: 'Generación de base de datos de leads',
      competitor: true,
      outfly: 'Bases de datos verificadas de tu ICP (Nombre, Número, Email, LinkedIn...)',
    },
    {
      feature: 'Agendamiento de reuniones',
      competitor: true,
      outfly: 'Reuniones 100% cualificadas y listas para cerrar',
    },
    {
      feature: 'Creación o reformulación de oferta irresistible',
      competitor: false,
      outfly: true,
      highlight: true,
    },
    {
      feature: 'Sistema automático de cualificación por Email/WhatsApp',
      competitor: false,
      outfly: true,
      highlight: true,
    },
    {
      feature: 'Sistema de seguimiento automático para aumentar presentación',
      competitor: false,
      outfly: true,
      highlight: true,
    },
    {
      feature: 'Formación para tu equipo de ejecutivos de cuentas',
      competitor: false,
      outfly: true,
      highlight: true,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animar filas secuencialmente
            comparisons.forEach((_, index) => {
              setTimeout(() => {
                setVisibleRows((prev) => [...prev, index]);
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CheckIcon = () => (
    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );

  const CrossIcon = () => (
    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <section ref={sectionRef} className="relative bg-black py-20 md:py-28 overflow-hidden border-t border-white/10">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00D4FF] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#FF0088] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por qué elegirnos
          </h2>
          <p className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            No somos una agencia más. Somos tu equipo de ventas externo comprometido con tus resultados.
          </p>
        </div>

        {/* Tabs móviles */}
        <div className="md:hidden flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('others')}
            className={`flex-1 py-4 px-4 rounded-xl font-[family-name:var(--font-montserrat)] font-bold text-base transition-all duration-300 ${
              activeTab === 'others'
                ? 'bg-white/10 text-white scale-[1.02] shadow-lg border-2 border-white/30'
                : 'bg-white/5 text-white/50 border-2 border-white/10'
            }`}
          >
            Otras agencias
          </button>
          <button
            onClick={() => setActiveTab('outfly')}
            className={`flex-1 py-4 px-4 rounded-xl font-[family-name:var(--font-montserrat)] font-bold text-base transition-all duration-300 ${
              activeTab === 'outfly'
                ? 'bg-gradient-to-r from-[#00D4FF] to-[#FF0088] text-white scale-[1.02] shadow-lg shadow-cyan-500/30'
                : 'bg-white/5 text-white/50 border-2 border-white/10'
            }`}
          >
            Outfly Marketing
          </button>
        </div>

        {/* Tabla comparativa */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
          {/* Encabezados - Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-0">
            {/* Columna de características */}
            <div className="bg-white/5 p-6 border-b border-r border-white/10">
              <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-semibold text-white/50 uppercase tracking-wider">
                Características
              </h3>
            </div>

            {/* Otras agencias */}
            <div className="bg-white/5 p-6 border-b border-white/10 border-r">
              <h3 className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl font-bold text-white/70 text-center">
                Otras agencias
              </h3>
            </div>

            {/* Outfly Marketing */}
            <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#FF0088]/10 p-6 border-b border-white/10 relative">
              <div className="absolute top-2 right-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF0088] text-white text-xs font-bold uppercase">
                  Recomendado
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF0088] bg-clip-text text-transparent text-center">
                Outfly Marketing
              </h3>
            </div>
          </div>

          {/* Filas de comparación - Desktop */}
          <div className="hidden md:block">
            {comparisons.map((row, index) => {
              const isVisible = visibleRows.includes(index);
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-3 gap-0 border-b border-white/10 last:border-b-0 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${row.highlight ? 'bg-gradient-to-r from-transparent via-[#00D4FF]/5 to-transparent' : ''}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Característica */}
                  <div className="p-6 border-white/10 border-r">
                    <p className="font-[family-name:var(--font-montserrat)] text-base text-white font-medium">
                      {row.feature}
                    </p>
                  </div>

                  {/* Otras agencias */}
                  <div className="p-6 border-white/10 border-r flex items-center justify-center bg-white/[0.02]">
                    {typeof row.competitor === 'boolean' ? (
                      row.competitor ? (
                        <div className="text-green-500">
                          <CheckIcon />
                        </div>
                      ) : (
                        <div className="text-red-500">
                          <CrossIcon />
                        </div>
                      )
                    ) : (
                      <div className="flex items-start gap-2">
                        <div className="text-green-500 flex-shrink-0 mt-0.5">
                          <CheckIcon />
                        </div>
                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/60">
                          {row.competitor}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Outfly Marketing */}
                  <div className={`p-6 flex items-center justify-center ${row.highlight ? 'bg-gradient-to-r from-[#00D4FF]/5 to-[#FF0088]/5' : 'bg-white/[0.02]'}`}>
                    {typeof row.outfly === 'boolean' ? (
                      <div className="text-green-400">
                        <CheckIcon />
                      </div>
                    ) : (
                      <div className="flex items-start gap-2">
                        <div className="text-green-400 flex-shrink-0 mt-0.5">
                          <CheckIcon />
                        </div>
                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/80 font-medium">
                          {row.outfly}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Filas de comparación - Mobile */}
          <div className="md:hidden">
            {comparisons.map((row, index) => {
              const isVisible = visibleRows.includes(index);
              
              return (
                <div
                  key={index}
                  className={`border-b border-white/10 last:border-b-0 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${row.highlight && activeTab === 'outfly' ? 'bg-gradient-to-r from-[#00D4FF]/10 to-[#FF0088]/10' : ''}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Característica */}
                  <div className="p-4 border-b border-white/10 bg-white/5">
                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-white font-semibold text-center">
                      {row.feature}
                    </p>
                  </div>

                  {/* Contenido según tab activo */}
                  <div className="p-6">
                    {activeTab === 'others' ? (
                      // Mostrar columna de Otras Agencias
                      <div className="flex flex-col items-center justify-center min-h-[80px]">
                        {typeof row.competitor === 'boolean' ? (
                          row.competitor ? (
                            <div className="flex flex-col items-center gap-2">
                              <div className="text-green-500">
                                <CheckIcon />
                              </div>
                              <span className="font-[family-name:var(--font-montserrat)] text-sm text-white/60">Incluido</span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-2">
                              <div className="text-red-500">
                                <CrossIcon />
                              </div>
                              <span className="font-[family-name:var(--font-montserrat)] text-sm text-white/60">No incluido</span>
                            </div>
                          )
                        ) : (
                          <div className="flex flex-col items-center gap-3">
                            <div className="text-green-500">
                              <CheckIcon />
                            </div>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-white/70 text-center">
                              {row.competitor}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Mostrar columna de Outfly
                      <div className="flex flex-col items-center justify-center min-h-[80px]">
                        {typeof row.outfly === 'boolean' ? (
                          <div className="flex flex-col items-center gap-2">
                            <div className="text-green-400">
                              <CheckIcon />
                            </div>
                            <span className="font-[family-name:var(--font-montserrat)] text-sm text-[#00D4FF] font-semibold">✓ Incluido</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-3">
                            <div className="text-green-400">
                              <CheckIcon />
                            </div>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-white font-medium text-center">
                              {row.outfly}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
