import Link from 'next/link';

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header con degradados */}
      <div className="relative bg-black border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#00D4FF] opacity-[0.08] blur-[100px]"></div>
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#FF0088] opacity-[0.06] blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-[#FF0088] transition-colors duration-300 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-bold">
            Política de Cookies
          </h1>
          <p className="text-gray-400 mt-4">Última actualización: Noviembre 2025</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            1. ¿Qué son las Cookies?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Permiten que el sitio web recuerde tus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y otras preferencias de visualización) durante un período de tiempo, para que no tengas que volver a configurarlas cada vez que regreses al sitio o navegues de una página a otra.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            2. ¿Qué Cookies Utilizamos?
          </h2>
          <div className="text-gray-300 space-y-6 leading-relaxed">
            
            {/* Cookies Técnicas */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-semibold text-white mb-3">
                Cookies Técnicas (Necesarias)
              </h3>
              <p className="mb-3">
                Son esenciales para el funcionamiento del sitio web. Sin estas cookies, no podemos garantizar el correcto funcionamiento de la web.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Finalidad:</strong> Mantener la sesión activa, seguridad, preferencias del usuario.</li>
                <li><strong>Duración:</strong> Sesión (se eliminan al cerrar el navegador).</li>
                <li><strong>Consentimiento:</strong> No requieren consentimiento (técnicamente necesarias).</li>
              </ul>
            </div>

            {/* Cookies Analíticas */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-semibold text-white mb-3">
                Cookies Analíticas
              </h3>
              <p className="mb-3">
                Nos permiten analizar el uso del sitio web para medir y mejorar el rendimiento.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Proveedor:</strong> Google Analytics (_ga, _gid, _gat)</li>
                <li><strong>Finalidad:</strong> Estadísticas de visitas, páginas más vistas, tiempo de permanencia.</li>
                <li><strong>Duración:</strong> Hasta 2 años.</li>
                <li><strong>Consentimiento:</strong> Requieren consentimiento del usuario.</li>
                <li><strong>Más información:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:text-[#FF0088]">Política de Privacidad de Google</a></li>
              </ul>
            </div>

            {/* Cookies de Terceros */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-semibold text-white mb-3">
                Cookies de Terceros
              </h3>
              <p className="mb-3">
                Servicios externos integrados en nuestra web pueden instalar sus propias cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Calendly:</strong> Para gestionar las citas agendadas.</li>
                <li><strong>YouTube/Vimeo:</strong> Si se reproducen vídeos embebidos.</li>
                <li><strong>Redes sociales:</strong> Si compartes contenido en redes sociales.</li>
              </ul>
              <p className="mt-3">
                Estas cookies están sujetas a las políticas de privacidad de los terceros correspondientes.
              </p>
            </div>

            {/* Cookies Publicitarias */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-semibold text-white mb-3">
                Cookies Publicitarias
              </h3>
              <p>
                Actualmente <strong>NO</strong> utilizamos cookies publicitarias ni de remarketing. Si en el futuro las implementamos, te informaremos y solicitaremos tu consentimiento específico.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            3. Tabla Resumen de Cookies
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300 border border-white/10">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 py-3 text-left border-b border-white/10">Cookie</th>
                  <th className="px-4 py-3 text-left border-b border-white/10">Tipo</th>
                  <th className="px-4 py-3 text-left border-b border-white/10">Duración</th>
                  <th className="px-4 py-3 text-left border-b border-white/10">Finalidad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-3">_ga</td>
                  <td className="px-4 py-3">Analítica</td>
                  <td className="px-4 py-3">2 años</td>
                  <td className="px-4 py-3">Distinguir usuarios únicos</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-3">_gid</td>
                  <td className="px-4 py-3">Analítica</td>
                  <td className="px-4 py-3">24 horas</td>
                  <td className="px-4 py-3">Distinguir usuarios únicos</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-3">_gat</td>
                  <td className="px-4 py-3">Analítica</td>
                  <td className="px-4 py-3">1 minuto</td>
                  <td className="px-4 py-3">Limitar porcentaje de solicitudes</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-3">calendly_session</td>
                  <td className="px-4 py-3">Técnica</td>
                  <td className="px-4 py-3">Sesión</td>
                  <td className="px-4 py-3">Gestión de citas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            4. ¿Cómo Gestionar las Cookies?
          </h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo mediante la configuración de las opciones de tu navegador:
            </p>
            
            <div className="space-y-3 ml-4">
              <p><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:text-[#FF0088]">Instrucciones</a></p>
              <p><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:text-[#FF0088]">Instrucciones</a></p>
              <p><strong>Safari (macOS):</strong> <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:text-[#FF0088]">Instrucciones</a></p>
              <p><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:text-[#FF0088]">Instrucciones</a></p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
              <p className="text-yellow-200">
                <strong>⚠️ Advertencia:</strong> Si bloqueas todas las cookies, es posible que algunas funcionalidades del sitio web no estén disponibles.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            5. Consentimiento
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Al continuar navegando por este sitio web sin modificar la configuración de las cookies en tu navegador, aceptas el uso de cookies conforme a esta política. Si no estás de acuerdo, te recomendamos que abandones la navegación o configures tu navegador según tus preferencias.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            6. Actualizaciones
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Esta Política de Cookies puede ser modificada en función de cambios legislativos, reglamentarios o con la finalidad de adaptarla a las instrucciones de la Agencia Española de Protección de Datos. Te recomendamos revisarla periódicamente.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            7. Más Información
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Si tienes dudas sobre esta Política de Cookies, puedes contactarnos en: <a href="mailto:albertoproaza04@gmail.com" className="text-[#00D4FF] hover:text-[#FF0088]">albertoproaza04@gmail.com</a>
          </p>
        </section>

        {/* Botón volver */}
        <div className="pt-8 border-t border-white/10">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#FF0088] rounded-full font-[family-name:var(--font-montserrat)] font-semibold hover:scale-105 transition-transform duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
