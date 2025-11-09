'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Degradados de fondo suaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#00D4FF] opacity-[0.05] blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#FF0088] opacity-[0.04] blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Columna 1: Sobre Outfly */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
              Outfly Marketing
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Agencia especializada en prospección B2B. Conseguimos reuniones cualificadas para tu negocio sin necesidad de invertir en publicidad.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Redes sociales */}
              <a 
                href="https://www.linkedin.com/company/outflymarketing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-semibold text-white">
              Servicios
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                  Prospección B2B
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                  Lead Generation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                  Formación
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-semibold text-white">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:alberto@outflymarketing.com" className="hover:text-[#00D4FF] transition-colors duration-300">
                  alberto@outflymarketing.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>España</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-semibold text-white">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/legal/aviso-legal" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/legal/politica-privacidad" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/politica-cookies" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/legal/condiciones-generales" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">
                  Condiciones Generales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Outfly Marketing. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2">
              Hecho con 
              <span className="text-[#FF0088]">♥</span> 
              en España
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
