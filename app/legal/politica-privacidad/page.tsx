import Link from 'next/link';

export default function PoliticaPrivacidad() {
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
            Política de Privacidad
          </h1>
          <p className="text-gray-400 mt-4">Última actualización: Noviembre 2025</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            1. Responsable del Tratamiento
          </h2>
          <div className="text-gray-300 space-y-2 leading-relaxed">
            <p>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Responsable:</strong> Outfly Marketing</li>
              <li><strong>NIF/CIF:</strong> 71999579B</li>
              <li><strong>Domicilio:</strong> Proaza 33114, Carretera general 140 2C</li>
              <li><strong>Email:</strong> albertoproaza04@gmail.com</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            2. Datos que Recopilamos
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>Recopilamos los siguientes tipos de datos personales cuando utilizas nuestros servicios:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Datos de contacto:</strong> nombre, correo electrónico, teléfono, empresa.</li>
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia.</li>
              <li><strong>Datos de Calendly:</strong> información proporcionada al agendar una reunión.</li>
              <li><strong>Cookies:</strong> información almacenada en tu dispositivo (ver Política de Cookies).</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            3. Finalidad del Tratamiento
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>Utilizamos tus datos personales para las siguientes finalidades:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Gestionar las solicitudes de contacto y reuniones agendadas.</li>
              <li>Enviar comunicaciones comerciales sobre nuestros servicios (solo con tu consentimiento).</li>
              <li>Mejorar la experiencia de usuario y el funcionamiento del sitio web.</li>
              <li>Cumplir con obligaciones legales aplicables.</li>
              <li>Análisis estadístico y mejora de nuestros servicios.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            4. Legitimación del Tratamiento
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>La base legal para el tratamiento de tus datos personales es:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Consentimiento del interesado:</strong> al aceptar esta política y utilizar nuestros servicios.</li>
              <li><strong>Ejecución de un contrato:</strong> cuando solicitas información sobre nuestros servicios.</li>
              <li><strong>Interés legítimo:</strong> para análisis estadístico y mejora del sitio web.</li>
              <li><strong>Cumplimiento de obligaciones legales:</strong> cuando sea requerido por ley.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            5. Conservación de Datos
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recabados. En concreto:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
            <li>Datos de contacto: hasta que solicites su supresión o durante 3 años desde el último contacto.</li>
            <li>Datos de navegación: hasta 2 años desde su recopilación.</li>
            <li>Datos fiscales y contables: 6 años, según normativa tributaria.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            6. Destinatarios de los Datos
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>Tus datos personales podrán ser comunicados a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Proveedores de servicios:</strong> Vercel (hosting), Calendly (gestión de citas), Google Analytics (analítica web).</li>
              <li><strong>Autoridades públicas:</strong> cuando sea legalmente requerido.</li>
              <li>No se realizarán transferencias internacionales de datos fuera del Espacio Económico Europeo, salvo las mencionadas con las garantías adecuadas del RGPD.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            7. Derechos del Usuario
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>Como interesado, tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Acceso:</strong> conocer qué datos tuyos estamos tratando.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos ("derecho al olvido").</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos.</li>
              <li><strong>Limitación:</strong> solicitar la limitación del tratamiento.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado y legible.</li>
              <li><strong>No ser objeto de decisiones automatizadas:</strong> incluida la elaboración de perfiles.</li>
            </ul>
            <p className="pt-4">
              Para ejercer tus derechos, envía un correo a <a href="mailto:albertoproaza04@gmail.com" className="text-[#00D4FF] hover:text-[#FF0088]">albertoproaza04@gmail.com</a> adjuntando copia de tu DNI o documento equivalente.
            </p>
            <p>
              Tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si consideras que el tratamiento no se ajusta a la normativa vigente.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            8. Medidas de Seguridad
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Hemos implementado medidas técnicas y organizativas apropiadas para garantizar la seguridad de tus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            9. Modificaciones
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de la última actualización. Te recomendamos revisar periódicamente esta política.
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
