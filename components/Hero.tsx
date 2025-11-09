export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 py-16 md:py-20 overflow-hidden">
      {/* Fondo con degradados suaves */}
      <div className="absolute inset-0 bg-black">
        {/* Degradado azul superior izquierdo */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#00D4FF] opacity-[0.08] blur-[120px]"></div>
        
        {/* Degradado rosa superior derecho */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#FF0088] opacity-[0.06] blur-[100px]"></div>
        
        {/* Degradado azul detrás del video */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00D4FF] opacity-[0.05] blur-[150px]"></div>
        
        {/* Degradado rosa inferior */}
        <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] bg-[#FF0088] opacity-[0.07] blur-[130px]"></div>
      </div>

      {/* Contenedor principal con animación de entrada (fade-in + slide-up) */}
      <div className="relative z-10 max-w-5xl w-full space-y-8 md:space-y-12 opacity-0 animate-fade-in">
        
        {/* Título principal - Montserrat, texto blanco, centrado */}
        <h1 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center leading-tight max-w-7xl mx-auto px-4">
          Consigue de 3 a 5 Reuniones Cualificadas a la semana SIN GASTAR EN ANUNCIOS
        </h1>

        {/* Contenedor del video responsive con aspect-ratio 16:9 */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/20 bg-black">
            {/* Video VSL HTML5 - Solo controles básicos */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              playsInline
            >
              <source src="/videos/VIDEO_WEB.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>

        {/* Botón CTA con degradado #00D4FF → #FF0088 y efectos hover */}
        <div className="flex justify-center pt-4">
          <a 
            href="https://calendly.com/albertoproaza04/llamada-con-alberto"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl font-semibold text-white px-10 py-4 md:px-14 md:py-5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF0088] shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 hover:brightness-110 active:scale-100 inline-block text-center"
          >
            Agendar llamada
          </a>
        </div>

      </div>
    </section>
  );
}

