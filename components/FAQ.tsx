'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primer FAQ abierto por defecto

  const faqItems: FAQItem[] = [
    {
      question: "¿Cómo funciona el sistema de prospección en frío?",
      answer: "Nuestro sistema automatizado se divide en 6 etapas: (1) Creamos una oferta irresistible adaptada a tu mercado, (2) Generamos una base de datos verificada de tu cliente ideal, (3) Desarrollamos guiones de ventas optimizados, (4) Nuestro equipo de expertos realiza las llamadas diariamente, (5) Cualificamos y nutrimos a los prospectos, y (6) Te entregamos reuniones 100% listas para cerrar."
    },
    {
      question: "¿Qué nos diferencia de otras agencias de marketing?",
      answer: "A diferencia de otras agencias que solo hacen anuncios o envían emails masivos, nosotros actuamos como tu equipo de SDRs externos. Realizamos llamadas en frío personalizadas, creamos ofertas irresistibles, formamos a tu equipo de ventas y tenemos un sistema de cualificación que garantiza que solo recibes reuniones con clientes reales listos para comprar."
    },
    {
      question: "¿Cuánto tiempo tarda en verse los primeros resultados?",
      answer: "Normalmente vemos las primeras reuniones agendadas en la primera semana de trabajo. El proceso completo de setup (creación de oferta, base de datos, guiones) toma 2-3 días, y las primeras llamadas comienzan inmediatamente después. La mayoría de nuestros clientes comienzan a recibir reuniones en la primera semana y cierran su primera venta en las primeras 2-3 semanas."
    },
    {
      question: "¿Qué tipo de empresas pueden beneficiarse de este servicio?",
      answer: "Lamentablemente este sistema no funciona para todos los sectores, funciona especialmente bien para empresas B2B con servicios o productos de alto valor (desde 1.000€ en adelante). Consultoras, agencias de marketing, empresas de software... Lo importante es que tengas capacidad para atender las reuniones que te vamos a generar."
    },
    {
      question: "¿Necesito tener experiencia previa en ventas para atender las reuniones?",
      answer: "No es necesario. Parte de nuestro servicio incluye la formación de tu equipo de ejecutivos de cuentas. Te enseñamos técnicas probadas para cerrar más ventas, cómo manejar objeciones y cómo maximizar el valor de cada reunión. Si eres el único en tu empresa, también te formamos a ti para que puedas cerrar efectivamente."
    },
    {
      question: "¿Qué pasa si los leads no son de calidad?",
      answer: "Tenemos un estricto proceso de cualificación de 3 niveles antes de agendarte una reunión. Verificamos presupuesto, necesidad real y autoridad de decisión. Si una reunión no cumple estos criterios, la reponemos sin costo adicional. Nuestro objetivo es tu éxito, no solo llenar tu calendario."
    },
    {
      question: "¿Hay permanencia o puedo cancelar cuando quiera?",
      answer: "No hay permanencia. Trabajamos mes a mes porque estamos seguros de los resultados que entregamos. Puedes cancelar el servicio cuando quieras. Aunque, recomendamos un mínimo de 2 meses para ver el potencial completo del sistema."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black py-20 md:py-28 overflow-hidden border-t border-white/10">
      {/* Fondo con degradados suaves */}
      <div className="absolute inset-0">
        {/* Degradado azul superior derecha */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[#00D4FF] opacity-[0.05] blur-[120px]"></div>
        
        {/* Degradado rosa centro izquierda */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-[600px] h-[500px] bg-[#FF0088] opacity-[0.04] blur-[130px]"></div>
        
        {/* Degradado azul inferior */}
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[350px] bg-[#00D4FF] opacity-[0.06] blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#FF0088]/20 border border-[#00D4FF]/30 text-[#00D4FF] font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider">
              FAQ
            </span>
          </div>
          
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          
          <p className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro sistema de prospección
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 md:space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="group"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* FAQ Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-[#00D4FF]/30">
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 md:px-8 md:py-8 text-left transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50 focus:ring-inset"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors duration-300">
                      {item.question}
                    </h3>
                    
                    {/* Icono expandir/contraer */}
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF0088] flex items-center justify-center transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}>
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <div className="border-t border-white/10 pt-6">
                      <p className="font-[family-name:var(--font-montserrat)] text-white/80 text-base md:text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="font-[family-name:var(--font-montserrat)] text-white/70 text-lg mb-8">
              Agenda una llamada gratuita y resolvemos todas tus dudas personalmente
            </p>
            
            <a
              href="https://calendly.com/albertoproaza04/llamada-con-alberto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-[family-name:var(--font-montserrat)] text-lg font-semibold text-white px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF0088] shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 active:scale-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Hablar con un experto
            </a>
            
            <p className="font-[family-name:var(--font-montserrat)] text-white/50 text-sm mt-4">
              Sin compromiso • Llamada gratuita de 15 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}