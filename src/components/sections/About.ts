// =====================================================
// ABOUT US — Sobre a marca (responsivo)
// =====================================================
// Mobile-first: empilha no celular, lado a lado no desktop.
// =====================================================

export function About(): string {
  return `
    <section id="about" class="relative bg-cream-50
                              py-20 sm:py-24 lg:py-32
                              px-4 sm:px-6 lg:px-8">

      <div class="max-w-7xl mx-auto">

        <!-- ============================= -->
        <!-- CABEÇALHO DA SEÇÃO -->
        <!-- ============================= -->
        <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">

          <p class="font-sans text-[10px] sm:text-xs
                    tracking-[0.3em] sm:tracking-[0.4em]
                    text-gold-600 mb-4">
            ABOUT US
          </p>

          <h2 class="font-serif text-coffee-800 leading-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Excellence that transforms
            <span class="text-gold-600">the professional</span>
          </h2>

        </div>

        <!-- ============================= -->
        <!-- TEXTO INSTITUCIONAL -->
        <!-- ============================= -->
        <div class="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6
                    font-sans text-coffee-700 leading-relaxed
                    text-sm sm:text-base md:text-lg">

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

        <!-- ============================= -->
        <!-- 3 PILARES -->
        <!-- Mobile: empilhados | md+: lado a lado -->
        <!-- ============================= -->
        <div class="grid grid-cols-1 md:grid-cols-3
                    gap-8 sm:gap-10 lg:gap-12
                    mt-16 sm:mt-20 lg:mt-24
                    max-w-6xl mx-auto">

          <!-- PILAR 1: PROFISSIONAL -->
          <div class="text-center px-4">
            <div class="flex items-center justify-center mb-5">
              <div class="w-14 h-14 sm:w-16 sm:h-16
                          rounded-full border border-gold-400
                          flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24"
                     viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="1.2"
                     stroke-linecap="round" stroke-linejoin="round"
                     class="text-gold-600">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <h3 class="font-serif text-xl sm:text-2xl text-coffee-800 mb-3">
              For Professionals
            </h3>
            <p class="font-sans text-sm text-coffee-700 leading-relaxed">
              Products that elevate the standard of the salon and deliver
              salon-quality results every day.
            </p>
          </div>

          <!-- PILAR 2: DISTRIBUIDOR -->
          <div class="text-center px-4">
            <div class="flex items-center justify-center mb-5">
              <div class="w-14 h-14 sm:w-16 sm:h-16
                          rounded-full border border-gold-400
                          flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24"
                     viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="1.2"
                     stroke-linecap="round" stroke-linejoin="round"
                     class="text-gold-600">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </div>
            <h3 class="font-serif text-xl sm:text-2xl text-coffee-800 mb-3">
              For Distributors
            </h3>
            <p class="font-sans text-sm text-coffee-700 leading-relaxed">
              A brand with potential, credibility and full support to grow
              in your market.
            </p>
          </div>

          <!-- PILAR 3: INTERNACIONAL -->
          <div class="text-center px-4">
            <div class="flex items-center justify-center mb-5">
              <div class="w-14 h-14 sm:w-16 sm:h-16
                          rounded-full border border-gold-400
                          flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24"
                     viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="1.2"
                     stroke-linecap="round" stroke-linejoin="round"
                     class="text-gold-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
            </div>
            <h3 class="font-serif text-xl sm:text-2xl text-coffee-800 mb-3">
              For International Partners
            </h3>
            <p class="font-sans text-sm text-coffee-700 leading-relaxed">
              The strength and innovation of Brazilian beauty, delivered
              to new markets around the world.
            </p>
          </div>

        </div>

        <!-- ============================= -->
        <!-- FRASE DE FECHAMENTO -->
        <!-- ============================= -->
        <div class="text-center mt-16 sm:mt-20 lg:mt-24">
          <p class="font-serif italic text-gold-600
                    text-xl sm:text-2xl md:text-3xl">
            "From Brazilian beauty to the world."
          </p>
        </div>

      </div>
    </section>
  `
}