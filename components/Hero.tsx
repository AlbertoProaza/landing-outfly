export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 py-16 md:py-20 overflow-hidden">
      {/* Fondo animado sutil con pequeños degradados neón */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00D4FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-56 h-56 bg-[#FF0088] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/4 w-60 h-60 bg-[#00D4FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-1/3 w-52 h-52 bg-[#FF0088] rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-6000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#00D4FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
        <div className="absolute top-10 right-1/4 w-44 h-44 bg-[#FF0088] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-1000"></div>
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
              <source src="/videos/video_web.mp4" type="video/mp4" />
              <source src="/videos/video_web.webm" type="video/webm" />
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

