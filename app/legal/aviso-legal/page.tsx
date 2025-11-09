import Link from 'next/link';

export default function AvisoLegal() {
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
            Aviso Legal
          </h1>
          <p className="text-gray-400 mt-4">Última actualización: Noviembre 2025</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            1. Datos Identificativos
          </h2>
          <div className="text-gray-300 space-y-2 leading-relaxed">
            <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos identificativos del titular de este sitio web:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Titular:</strong> Alberto García López</li>
              <li><strong>NIF/CIF:</strong> 71999579B</li>
              <li><strong>Domicilio social:</strong> Proaza 33114, Carretera general 140 2C</li>
              <li><strong>Correo electrónico:</strong> alberto@outflymarketing.com</li>
              <li><strong>Sitio web:</strong> outflymarketing.com</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            2. Objeto
          </h2>
          <p className="text-gray-300 leading-relaxed">
            El presente aviso legal regula el uso y utilización del sitio web outflymarketing.com, del que es titular Outfly Marketing. La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            3. Condiciones de Uso
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través del sitio web y a no emplearlos para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Realizar actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>Provocar daños en los sistemas físicos y lógicos del sitio web, de sus proveedores o de terceras personas.</li>
              <li>Introducir o difundir virus informáticos o cualesquiera otros sistemas que sean susceptibles de provocar daños.</li>
              <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            4. Propiedad Intelectual e Industrial
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Todos los contenidos del sitio web, tales como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Outfly Marketing, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            5. Exclusión de Garantías y Responsabilidad
          </h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>Outfly Marketing no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Errores u omisiones en los contenidos.</li>
              <li>Falta de disponibilidad del sitio web o la transmisión de virus o programas maliciosos o lesivos.</li>
              <li>Falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            6. Modificaciones
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Outfly Marketing se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que presta como la forma en la que estos aparezcan presentados o localizados.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            7. Enlaces
          </h2>
          <p className="text-gray-300 leading-relaxed">
            En el caso de que en el sitio web se dispusieran enlaces o hipervínculos hacia otros sitios de Internet, Outfly Marketing no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#00D4FF]">
            8. Legislación Aplicable y Jurisdicción
          </h2>
          <p className="text-gray-300 leading-relaxed">
            La relación entre Outfly Marketing y el usuario se regirá por la normativa española vigente. Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, serán de aplicación la legislación española, sometiéndose las partes a los Juzgados y Tribunales españoles que resulten competentes conforme a derecho.
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
