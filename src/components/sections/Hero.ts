// =====================================================
// HERO — Primeira dobra com vídeo de fundo
// =====================================================

export function Hero(): string {
  return `
    <section
      id="hero"
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-coffee-900"
    >

      <!-- VÍDEO DE FUNDO 100% SÓLIDO -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero/hero-video.mp4" type="video/mp4" />
      </video>

      <!-- FILTRO ESCURO APENAS ATRÁS DO TEXTO (Gradiente radial) -->
      <!-- Isso deixa as bordas do vídeo 100% visíveis e escurece só o centro -->
      <div class="absolute inset-0 z-10" 
           style="background: radial-gradient(circle at center, rgba(42, 30, 21, 0.6) 0%, rgba(42, 30, 21, 0.2) 60%, transparent 100%);">
      </div>

      <!-- CONTEÚDO CENTRAL -->
      <!-- Mudei o 'items-center' pra puxar um pouco pra cima e corrigir o espaço vazio embaixo -->
      <div class="relative z-20 w-full max-w-6xl mx-auto text-center
                  px-4 sm:px-6 lg:px-8
                  pt-20 pb-16 sm:pt-24 sm:pb-20 flex flex-col items-center">

        <!-- Subtítulo -->
        <p class="font-sans text-[10px] sm:text-xs lg:text-sm
                  tracking-[0.4em] sm:tracking-[0.5em] lg:tracking-[0.6em]
                  text-white font-semibold mb-4 sm:mb-6">
          BRAZILIAN PROFESSIONAL HAIR CARE
        </p>

        <!-- Título MAIOR e Branco -->
        <h1 class="font-serif font-medium text-white leading-[1.05]
                   text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
          Professional Care.
          <br />
          <span class="text-gold-400">Extraordinary</span> Results.
        </h1>

        <!-- Parágrafo Branco -->
        <p class="font-sans text-white/90 leading-relaxed
                  text-sm sm:text-base md:text-lg
                  max-w-xl md:max-w-2xl mx-auto
                  mt-6 sm:mt-8 font-medium">
          Advanced hair technology crafted in Brazil — for professionals,
          distributors and partners who demand excellence.
        </p>

        <!-- BOTÕES -->
        <div class="flex flex-col sm:flex-row items-center justify-center
                    gap-4 sm:gap-6 mt-10 sm:mt-12 w-full sm:w-auto">

          <!-- Botão Primário -->
          <a
            href="#collection"
            class="w-full sm:w-auto text-center
                   px-8 sm:px-10 py-4 sm:py-5
                   bg-gold-500 text-white
                   font-sans text-xs sm:text-sm tracking-widest uppercase font-bold
                   rounded-sm
                   hover:bg-gold-400 transition-all duration-300
                   shadow-[0_4px_20px_rgba(184,144,58,0.4)] hover:shadow-[0_4px_30px_rgba(184,144,58,0.7)]"
          >
            Explore the Collection
          </a>

          <!-- Botão Secundário (Glassmorphism) -->
          <a
            href="https://wa.me/5516981404969"
            target="_blank"
            rel="noopener"
            class="w-full sm:w-auto text-center
                   px-8 sm:px-10 py-4 sm:py-5
                   border border-white/50 text-white bg-white/10 backdrop-blur-md
                   font-sans text-xs sm:text-sm tracking-widest uppercase font-bold
                   rounded-sm
                   hover:bg-white hover:text-coffee-900 transition-all duration-300"
          >
            Talk to Us
          </a>
        </div>

      </div>

      <!-- SETA INDICANDO SCROLL (Branca) -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2
                  text-white animate-bounce z-20">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="28" height="28"
             viewBox="0 0 24 24"
             fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

    </section>
  `
}