import Link from 'next/link';

export default function CondicionesGenerales() {
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
            Condiciones Generales de Contratación
          </h1>
          <p className="text-gray-400 mt-4">Última actualización: Noviembre 2025</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            1. Objeto
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Las presentes Condiciones Generales regulan la contratación de los servicios de prospección B2B, lead generation y gestión de reuniones comerciales ofrecidos por Outfly Marketing (en adelante, "el Prestador") a través de su sitio web outflymarketing.com.
          </p>
          <p className="text-gray-300 leading-relaxed">
            La contratación de cualquier servicio implica la aceptación expresa de estas Condiciones Generales, así como de la Política de Privacidad y el Aviso Legal publicados en el sitio web.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            2. Partes Contratantes
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p><strong>El Prestador:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Denominación social: Outfly Marketing</li>
              <li>NIF/CIF: [Pendiente de completar]</li>
              <li>Domicilio: [Dirección completa]</li>
              <li>Email: albertoproaza04@gmail.com</li>
              <li>Teléfono: +34 XXX XXX XXX</li>
            </ul>
            <p className="pt-4"><strong>El Cliente:</strong> Persona física o jurídica que contrata los servicios de Outfly Marketing.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            3. Servicios Ofrecidos
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>Outfly Marketing ofrece los siguientes servicios:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Prospección B2B:</strong> Identificación y contacto con potenciales clientes empresariales.</li>
              <li><strong>Lead Generation:</strong> Generación de oportunidades comerciales cualificadas.</li>
              <li><strong>Gestión de Reuniones:</strong> Agendamiento de reuniones comerciales con prospectos cualificados.</li>
              <li><strong>Email Marketing:</strong> Campañas de email outreach personalizadas.</li>
              <li><strong>LinkedIn Outreach:</strong> Prospección a través de LinkedIn.</li>
            </ul>
            <p className="pt-4">
              Los detalles específicos de cada servicio (alcance, duración, precio, entregables, etc.) se especificarán en una propuesta comercial o contrato individualizado que formará parte integrante de estas Condiciones Generales.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            4. Proceso de Contratación
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li><strong>Solicitud de información:</strong> El Cliente contacta con el Prestador a través del formulario web, email o llamada telefónica.</li>
              <li><strong>Reunión de descubrimiento:</strong> Se agenda una reunión inicial para analizar las necesidades del Cliente.</li>
              <li><strong>Propuesta comercial:</strong> El Prestador envía una propuesta detallada con el alcance del servicio, precio, plazos y condiciones específicas.</li>
              <li><strong>Aceptación:</strong> El Cliente acepta la propuesta mediante firma electrónica, email de confirmación o pago de la primera factura.</li>
              <li><strong>Ejecución:</strong> Se inicia la prestación del servicio conforme a lo acordado.</li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            5. Precios y Forma de Pago
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p><strong>5.1. Precios:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Los precios se especificarán en la propuesta comercial individualizada.</li>
              <li>Todos los precios incluyen IVA (21%) salvo que se indique lo contrario.</li>
              <li>Los precios pueden variar según el alcance del proyecto, duración y recursos necesarios.</li>
            </ul>

            <p className="pt-4"><strong>5.2. Forma de Pago:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Transferencia bancaria a la cuenta indicada en la factura.</li>
              <li>Pago online mediante tarjeta de crédito/débito o plataforma de pago autorizada.</li>
              <li>Domiciliación bancaria (para servicios recurrentes).</li>
            </ul>

            <p className="pt-4"><strong>5.3. Plazos de Pago:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Servicios puntuales: 50% al inicio, 50% a la entrega.</li>
              <li>Servicios mensuales: Facturación el día 1 de cada mes con vencimiento a 7 días.</li>
              <li>El impago de una factura puede resultar en la suspensión temporal del servicio hasta su regularización.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            6. Obligaciones del Prestador
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>El Prestador se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Prestar los servicios con la diligencia profesional exigible.</li>
              <li>Cumplir con los plazos y entregables acordados en la propuesta comercial.</li>
              <li>Mantener la confidencialidad de la información del Cliente.</li>
              <li>Informar de manera transparente sobre el progreso y resultados del servicio.</li>
              <li>Cumplir con la normativa aplicable en materia de protección de datos (RGPD).</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            7. Obligaciones del Cliente
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>El Cliente se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Facilitar toda la información necesaria para la correcta prestación del servicio.</li>
              <li>Realizar el pago de las facturas en los plazos establecidos.</li>
              <li>Responder a las comunicaciones del Prestador en un plazo razonable.</li>
              <li>Asistir a las reuniones agendadas con prospectos cualificados.</li>
              <li>No utilizar los servicios para fines ilícitos o contrarios a la ética profesional.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            8. Garantías y Resultados
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>
              Outfly Marketing se compromete a realizar sus mejores esfuerzos para alcanzar los objetivos acordados. Sin embargo, dado que los servicios de prospección B2B dependen de múltiples factores externos (mercado, competencia, receptividad de prospectos, etc.), <strong>no se garantizan resultados específicos</strong> (número exacto de reuniones, conversiones, ventas, etc.) salvo que se pacte expresamente en la propuesta comercial.
            </p>
            <p>
              En caso de que se establezcan garantías específicas (p. ej., "mínimo 3 reuniones cualificadas al mes"), estas se detallarán claramente en la propuesta comercial.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            9. Duración y Resolución del Contrato
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p><strong>9.1. Duración:</strong></p>
            <p>La duración del servicio se especificará en la propuesta comercial. Puede ser:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Servicios puntuales: hasta la entrega final.</li>
              <li>Servicios mensuales: renovación automática cada mes salvo cancelación.</li>
              <li>Contratos anuales: duración fija con posibilidad de renovación.</li>
            </ul>

            <p className="pt-4"><strong>9.2. Cancelación por el Cliente:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Servicios mensuales: preaviso de 15 días antes del próximo ciclo de facturación.</li>
              <li>Servicios anuales: no admiten cancelación anticipada salvo pacto contrario.</li>
              <li>La cancelación no exime del pago de servicios ya prestados o en curso.</li>
            </ul>

            <p className="pt-4"><strong>9.3. Resolución por el Prestador:</strong></p>
            <p>El Prestador podrá resolver el contrato en caso de:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Impago de facturas superior a 15 días desde su vencimiento.</li>
              <li>Incumplimiento grave de las obligaciones del Cliente.</li>
              <li>Uso indebido o ilícito de los servicios.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            10. Confidencialidad
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Ambas partes se comprometen a mantener la confidencialidad de toda la información intercambiada durante la prestación del servicio, especialmente datos comerciales, estrategias de negocio, listados de contactos y cualquier información sensible. Esta obligación se mantendrá vigente incluso después de la finalización del contrato.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            11. Protección de Datos
          </h2>
          <p className="text-gray-300 leading-relaxed">
            El tratamiento de datos personales se rige por la <Link href="/legal/politica-privacidad" className="text-[#00D4FF] hover:text-[#FF0088]">Política de Privacidad</Link> publicada en el sitio web, conforme al RGPD y la LOPDGDD. El Cliente garantiza que dispone de las autorizaciones necesarias para ceder los datos de contactos de terceros al Prestador con fines de prospección.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            12. Propiedad Intelectual
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Los materiales, plantillas, metodologías y herramientas utilizadas por el Prestador son propiedad exclusiva de Outfly Marketing. El Cliente únicamente tendrá derecho a utilizar los entregables específicos acordados en la propuesta comercial (p. ej., listados de contactos, informes de campaña).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            13. Limitación de Responsabilidad
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>El Prestador no será responsable de:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pérdidas de negocio, lucro cesante o daños indirectos derivados de la no consecución de objetivos comerciales.</li>
              <li>Acciones u omisiones de terceros (prospectos, proveedores de servicios externos).</li>
              <li>Casos de fuerza mayor o circunstancias imprevisibles que impidan la correcta prestación del servicio.</li>
            </ul>
            <p className="pt-4">
              En todo caso, la responsabilidad del Prestador quedará limitada al importe total facturado al Cliente por el servicio en cuestión.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            14. Modificación de las Condiciones
          </h2>
          <p className="text-gray-300 leading-relaxed">
            El Prestador se reserva el derecho de modificar estas Condiciones Generales en cualquier momento. Los cambios serán notificados a los Clientes activos con al menos 15 días de antelación. La continuidad en la contratación del servicio tras la notificación implica la aceptación de las nuevas condiciones.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            15. Legislación Aplicable y Jurisdicción
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Estas Condiciones Generales se rigen por la legislación española. Para cualquier controversia derivada de la interpretación o ejecución de estas condiciones, las partes se someten expresamente a los Juzgados y Tribunales que resulten competentes conforme a derecho.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            16. Contacto
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Para cualquier duda o consulta sobre estas Condiciones Generales, puedes contactarnos en:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
            <li>Email: <a href="mailto:albertoproaza04@gmail.com" className="text-[#00D4FF] hover:text-[#FF0088]">albertoproaza04@gmail.com</a></li>
            <li>Teléfono: +34 XXX XXX XXX</li>
            <li>Formulario web: <Link href="/#contacto" className="text-[#00D4FF] hover:text-[#FF0088]">outflymarketing.com</Link></li>
          </ul>
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
