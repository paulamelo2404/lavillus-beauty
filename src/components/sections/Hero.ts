// =====================================================
// HERO — Primeira dobra do site (responsivo)
// =====================================================
// Mobile-first: pensado primeiro pra celular, depois cresce.
// Breakpoints Tailwind: sm=640px | md=768px | lg=1024px | xl=1280px
// =====================================================

export function Hero(): string {
  return `
    <section
      id="hero"
      class="relative min-h-screen flex items-center justify-center overflow-hidden
             bg-linear-to-b from-cream-100 via-cream-50 to-cream-100
             px-4 sm:px-6 lg:px-8"
    >

      <!-- Brilho dourado decorativo no fundo (não interfere no clique) -->
      <div
        class="absolute inset-0 opacity-30 pointer-events-none"
        style="background: radial-gradient(circle at 70% 40%, rgba(184,144,58,0.25), transparent 60%);"
      ></div>

      <!-- CONTEÚDO CENTRAL -->
      <div class="relative z-10 w-full max-w-5xl mx-auto text-center
                  py-24 sm:py-28 lg:py-32">

        <!-- SUBTÍTULO SUPERIOR -->
        <!-- Celular: fonte pequena | Desktop: espaçamento maior entre letras -->
        <p class="font-sans text-[10px] sm:text-xs lg:text-sm
                  tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.5em]
                  text-gold-600 mb-4 sm:mb-6">
          BRAZILIAN PROFESSIONAL HAIR CARE
        </p>

        <!-- TÍTULO PRINCIPAL -->
        <!-- Celular: text-4xl | Tablet: text-6xl | Desktop: text-8xl -->
        <h1 class="font-serif font-medium text-coffee-800 leading-[1.05]
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Professional Care.
          <br />
          <span class="text-gold-600">Extraordinary</span> Results.
        </h1>

        <!-- PARÁGRAFO DESCRITIVO -->
        <!-- Celular: base | Tablet: lg | Largura máxima centralizada -->
        <p class="font-sans text-coffee-700 leading-relaxed
                  text-sm sm:text-base md:text-lg
                  max-w-xl md:max-w-2xl mx-auto
                  mt-6 sm:mt-8">
          Advanced hair technology crafted in Brazil — for professionals,
          distributors and partners who demand excellence.
        </p>

        <!-- BOTÕES -->
        <!-- Celular: empilhados (flex-col) | sm+: lado a lado (flex-row) -->
        <div class="flex flex-col sm:flex-row items-center justify-center
                    gap-3 sm:gap-4 mt-10 sm:mt-12">

          <!-- BOTÃO PRINCIPAL -->
          <a
            href="#collection"
            class="w-full sm:w-auto text-center
                   px-6 sm:px-8 py-3.5 sm:py-4
                   bg-gold-500 text-white
                   font-sans text-xs sm:text-sm tracking-widest uppercase
                   rounded-sm
                   hover:bg-gold-600 transition-all duration-300
                   shadow-md hover:shadow-lg"
          >
            Explore the Collection
          </a>

          <!-- BOTÃO SECUNDÁRIO -->
          <a
            href="https://wa.me/5516981404969"
            target="_blank"
            rel="noopener"
            class="w-full sm:w-auto text-center
                   px-6 sm:px-8 py-3.5 sm:py-4
                   border border-gold-500 text-gold-600
                   font-sans text-xs sm:text-sm tracking-widest uppercase
                   rounded-sm
                   hover:bg-gold-500 hover:text-white transition-all duration-300"
          >
            Talk to Us
          </a>
        </div>

      </div>

      <!-- SETA INDICANDO SCROLL -->
      <div class="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2
                  text-gold-500 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="20" height="20"
             viewBox="0 0 24 24"
             fill="none" stroke="currentColor"
             stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

    </section>
  `
}