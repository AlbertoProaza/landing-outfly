'use client';

import { useState } from 'react';

export default function PlanGrowth() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      {/* Fondo animado con degradados neón */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF0088] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#FF0088]/20 border border-[#00D4FF]/30 text-[#00D4FF] font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider">
              Plan Growth
            </span>
          </div>
          
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Sistema de prospección en frío
            <span className="block mt-2 bg-gradient-to-r from-[#00D4FF] to-[#FF0088] bg-clip-text text-transparent">
              automatizado
            </span>
          </h2>
          
          <p className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Consigue de <span className="text-[#00D4FF] font-bold">3 a 5 reuniones semanales</span> con clientes cualificados{' '}
            <span className="text-[#FF0088] font-bold">sin gastar en anuncios</span>
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
