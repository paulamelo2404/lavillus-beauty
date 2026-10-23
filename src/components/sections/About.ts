// =====================================================
// ABOUT US — Sobre a marca (Imagem full width, texto à esquerda)
// =====================================================

export function About(): string {
  return `
    <!-- h-screen garante que ocupe a tela toda no desktop sem barra de rolagem -->
    <section id="about" class="relative bg-cream-50 overflow-hidden
                              lg:h-screen lg:min-h-150 lg:max-h-225
                              flex items-center
                              py-20 sm:py-24 lg:py-0
                              px-6 sm:px-12 lg:px-16">

      <!-- IMAGEM DE FUNDO -->
      <div class="absolute inset-0 z-0">
        <!-- Caminho atualizado para a pasta images -->
        <img 
          src="/images/about-bg.jpg" 
          alt="Hair background" 
          class="w-full h-full object-cover object-center"
        />
      </div>

      <!-- CONTEÚDO -->
      <div class="relative z-10 w-full max-w-7xl mx-auto flex justify-center lg:justify-start">
        
        <!-- Bloco do texto -->
        <div class="w-full lg:w-1/2 max-w-xl text-center lg:text-left">

          <!-- CABEÇALHO -->
          <div class="mb-8 lg:mb-10">
            <p class="font-sans text-[10px] sm:text-xs
                      tracking-[0.3em] sm:tracking-[0.4em]
                      text-gold-600 mb-4 font-bold">
              ABOUT US
            </p>
            
            <h2 class="font-serif text-coffee-900 leading-[1.1]
                       text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Excellence that transforms
              <br class="hidden sm:block" />
              <span class="text-gold-600 italic">the professional</span>
            </h2>
          </div>

          <!-- TEXTO -->
          <div class="space-y-4 sm:space-y-5
                      font-sans text-coffee-800 leading-relaxed
                      text-sm sm:text-base lg:text-lg">
            <p>
              Lavillu's was born for demanding professionals, distributors who
              value trust, and partners who seek quality, safety and results.
            </p>
            <p>
              We are a Brazilian brand created to develop professional solutions
              for the beauty market — combining technology, performance and care
              in products designed for those who never compromise on excellence.
            </p>
          </div>

          <!-- 3 PILARES -->
          <div class="grid grid-cols-1 sm:grid-cols-3
                      gap-6 sm:gap-4
                      mt-10 lg:mt-12
                      border-t border-gold-400/40 pt-6 lg:pt-8">

            <!-- PILAR 1 -->
            <div>
              <div class="mb-3 flex justify-center lg:justify-start">
                <div class="w-10 h-10 rounded-full border border-gold-400 bg-white/50
                            flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gold-600">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              <h3 class="font-serif text-base lg:text-lg text-coffee-900 mb-1">Professionals</h3>
              <p class="font-sans text-[11px] lg:text-xs text-coffee-700 leading-relaxed">
                Elevating the standard of the salon.
              </p>
            </div>

            <!-- PILAR 2 -->
            <div>
              <div class="mb-3 flex justify-center lg:justify-start">
                <div class="w-10 h-10 rounded-full border border-gold-400 bg-white/50
                            flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gold-600">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
              </div>
              <h3 class="font-serif text-base lg:text-lg text-coffee-900 mb-1">Distributors</h3>
              <p class="font-sans text-[11px] lg:text-xs text-coffee-700 leading-relaxed">
                Credibility and full support to grow.
              </p>
            </div>

            <!-- PILAR 3 -->
            <div>
              <div class="mb-3 flex justify-center lg:justify-start">
                <div class="w-10 h-10 rounded-full border border-gold-400 bg-white/50
                            flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gold-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="font-serif text-base lg:text-lg text-coffee-900 mb-1">Partners</h3>
              <p class="font-sans text-[11px] lg:text-xs text-coffee-700 leading-relaxed">
                Brazilian beauty to new markets.
              </p>
            </div>

          </div>

          <!-- FRASE -->
          <div class="mt-10 lg:mt-12">
            <p class="font-serif italic text-gold-600 text-lg lg:text-xl">
              "From Brazilian beauty to the world."
            </p>
          </div>

        </div>
      </div>
    </section>
  `
}