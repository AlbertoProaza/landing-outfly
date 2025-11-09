'use client';

import { useState, useEffect } from 'react';

export default function PlanGrowth() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const subtitleTexts = [
    {
      text: (
        <>
          Consigue de <span className="text-[#00D4FF] font-bold">3 a 5 reuniones semanales</span> con clientes cualificados{' '}
          <span className="text-[#FF0088] font-bold">sin gastar en anuncios</span>
        </>
      ),
    },
    {
      text: (
        <>
          Actuamos como tus <span className="text-[#00D4FF] font-bold">SDR's externos</span> y traemos leads cualificados a tu{' '}
          <span className="text-[#FF0088] font-bold">equipo de ventas</span>
        </>
      ),
    },
  ];

  // Cambiar texto automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % subtitleTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [subtitleTexts.length]);

  const benefits = [
    {
      icon: '🎯',
      title: 'Creación de oferta',
      description: 'Diseñamos una propuesta de valor irresistible adaptada a tu mercado objetivo',
    },
    {
      icon: '📊',
      title: 'Generación de base de datos',
      description: 'Nombre de dueño, email, teléfono, LinkedIn... Todo lo que necesitas para conectar',
    },
    {
      icon: '📞',
      title: 'Guión de ventas para llamar en frío',
      description: 'Scripts probados y optimizados para maximizar conversiones en cada llamada',
    },
    {
      icon: '👥',
      title: 'Expertos llaman diariamente para ti',
      description: 'Nuestro equipo realiza las llamadas mientras tú te enfocas en cerrar',
    },
    {
      icon: '✨',
      title: 'Proceso de nutrición y cualificación',
      description: 'Filtramos y preparamos a los prospectos para que lleguen listos para comprar',
    },
    {
      icon: '🎓',
      title: 'Formación para cerrar más ventas',
      description: 'Capacitamos a tu equipo de ejecutivos de cuentas con técnicas probadas para aumentar conversiones',
    },
  ];

  return (
    <section className="relative bg-black py-20 md:py-28 overflow-hidden">
      {/* Fondo con degradados suaves */}
      <div className="absolute inset-0">
        {/* Degradado azul superior */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#00D4FF] opacity-[0.06] blur-[120px]"></div>
        
        {/* Degradado rosa centro */}
        <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-[500px] h-[500px] bg-[#FF0088] opacity-[0.05] blur-[100px]"></div>
        
        {/* Degradado azul inferior */}
        <div className="absolute bottom-0 left-1/3 w-[550px] h-[400px] bg-[#00D4FF] opacity-[0.04] blur-[110px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#FF0088]/20 border border-[#00D4FF]/30 text-[#00D4FF] font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider">
              Plan Growth
            </span>
          </div>
          
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight group cursor-default">
            <span className="inline-block transition-all duration-300 group-hover:scale-105">
              Sistema de prospección en frío
            </span>
            <span className="block mt-2 bg-gradient-to-r from-[#00D4FF] via-[#FF0088] to-[#00D4FF] bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-700 group-hover:bg-[position:100%_0] group-hover:scale-105 group-hover:tracking-wide">
              automatizado
            </span>
          </h2>
          
          <p className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl text-white/80 max-w-3xl mx-auto relative h-20 md:h-16">
            {subtitleTexts.map((item, index) => (
              <span
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentTextIndex
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {item.text}
              </span>
            ))}
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-[#00D4FF]/50 hover:scale-105 hover:shadow-2xl hover:shadow-[#00D4FF]/20">
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/0 to-[#FF0088]/0 group-hover:from-[#00D4FF]/10 group-hover:to-[#FF0088]/10 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icono */}
                  <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {benefit.icon}
                  </div>
                  
                  {/* Título */}
                  <h3 className="font-[family-name:var(--font-montserrat)] text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="font-[family-name:var(--font-montserrat)] text-white/70 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Indicador de hover en la esquina */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Línea de conexión animada (solo en desktop) */}
              {index < benefits.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00D4FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-16 md:mt-20 text-center">
          <button className="group relative font-[family-name:var(--font-montserrat)] text-lg md:text-xl font-semibold text-white px-12 py-5 md:px-16 md:py-6 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF0088] shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 active:scale-100">
            <span className="relative z-10">Quiero mi plan growth</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <p className="font-[family-name:var(--font-montserrat)] text-white/60 text-sm mt-4">
            Sin permanencia • Resultados garantizados
          </p>
        </div>
      </div>
    </section>
  );
}
