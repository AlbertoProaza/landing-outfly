'use client';

import { useEffect, useRef } from 'react';

interface Testimonial {
  text: string;
  name: string;
  position: string;
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      text: "Gracias a Outfly Marketing conseguimos 4 reuniones cualificadas en la primera semana. El equipo es profesional y los resultados son reales. Nuestro pipeline de ventas nunca había estado tan lleno.",
      name: "Carlos Mendoza",
      position: "CEO"
    },
    {
      text: "Llevábamos meses intentando conseguir clientes con anuncios sin resultados. En solo 2 semanas con Outfly cerramos nuestra primera venta y el ROI fue increíble. Totalmente recomendado.",
      name: "Laura Martínez",
      position: "Co-founder"
    },
    {
      text: "Lo mejor es que no tengo que preocuparme por la prospección. El equipo de Outfly hace las llamadas, cualifica los leads y yo solo me enfoco en cerrar. Han multiplicado nuestras ventas por 3.",
      name: "Miguel Ángel Torres",
      position: "Director Comercial"
    },
    {
      text: "Probamos varias agencias antes y ninguna dio resultados. Con Outfly en el primer mes ya tuvimos 12 reuniones cualificadas. Su sistema de prospección en frío realmente funciona.",
      name: "Ana Rodríguez",
      position: "Founder"
    },
    {
      text: "La calidad de los leads que nos traen es excepcional. No son solo contactos, son empresas que realmente necesitan nuestros servicios. Cerramos 2 de cada 3 reuniones que nos agenda Outfly.",
      name: "David Sánchez",
      position: "Co-founder"
    },
    {
      text: "Invertí menos de lo que gastaba en anuncios y conseguí el triple de resultados. El equipo es súper profesional y el proceso es transparente. Se nota que saben lo que hacen.",
      name: "Patricia Gómez",
      position: "CEO"
    },
  ];

  // Duplicar testimonios para efecto de loop infinito
  const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto-scroll suave
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Velocidad del scroll automático

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // Reset cuando llegue a la mitad (para loop infinito)
      const maxScroll = scrollContainer.scrollWidth / 3;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(autoScroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative bg-black py-20 md:py-28 overflow-hidden border-t border-white/10">
      {/* Fondo con degradados suaves */}
      <div className="absolute inset-0">
        {/* Degradado rosa superior izquierda */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#FF0088] opacity-[0.05] blur-[120px]"></div>
        
        {/* Degradado azul centro derecha */}
        <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-[550px] h-[550px] bg-[#00D4FF] opacity-[0.06] blur-[130px]"></div>
        
        {/* Degradado rosa inferior */}
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-[#FF0088] opacity-[0.04] blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#FF0088]/20 border border-[#00D4FF]/30 text-[#00D4FF] font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider">
              Testimonios
            </span>
          </div>
          
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          
          <p className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Empresas reales que han transformado su prospección en ventas
          </p>
        </div>

        {/* Carousel de testimonios */}
        <div className="relative">
          {/* Gradientes en los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Contenedor del scroll */}
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {repeatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 md:w-80 lg:w-96 group"
              >
                {/* Card con efecto burbuja transparente */}
                <div className="relative h-full p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#00D4FF]/40 hover:shadow-2xl hover:shadow-[#00D4FF]/10">
                  {/* Efecto de brillo sutil */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00D4FF]/5 to-[#FF0088]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Contenido */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Comillas decorativas */}
                    <div className="text-[#00D4FF] text-5xl md:text-6xl font-serif leading-none mb-4 opacity-30">
                      "
                    </div>
                    
                    {/* Texto del testimonio */}
                    <p className="font-[family-name:var(--font-montserrat)] text-white/90 text-base md:text-lg leading-relaxed mb-6 flex-grow">
                      {testimonial.text}
                    </p>
                    
                    {/* Separador */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#FF0088] mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Nombre y cargo */}
                    <div>
                      <p className="font-[family-name:var(--font-montserrat)] text-white font-bold text-lg mb-1">
                        {testimonial.name}
                      </p>
                      <p className="font-[family-name:var(--font-montserrat)] text-[#00D4FF] text-sm font-medium">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  {/* Indicador decorativo en la esquina */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="text-center mt-8">
          <p className="font-[family-name:var(--font-montserrat)] text-white/40 text-sm">
            ← Podrías ser nuestro próximo caso de éxito →
          </p>
        </div>
      </div>
    </section>
  );
}
