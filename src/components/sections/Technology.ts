// =====================================================
// TECHNOLOGY — Ativos e tecnologia da marca (responsivo)
// =====================================================
// Mobile-first: grid 1 coluna no celular, 2 no tablet, 4 no desktop.
// =====================================================

// Lista dos 4 ativos principais
const actives = [
  {
    name: 'Coffee Extract',
    description: 'Stimulates hair growth, strengthens and revitalizes.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    `,
  },
  {
    name: 'Hyaluronic Acid',
    description: 'Deep hydration and long-lasting softness.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
      </svg>
    `,
  },
  {
    name: 'Vitamin E',
    description: 'Antioxidant protection and healthier hair.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
      </svg>
    `,
  },
  {
    name: 'Hydro-Collagen',
    description: 'Rebuilds the fiber and restores elasticity.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"></path>
      </svg>
    `,
  },
]

export function Technology(): string {
  return `
    <section id="technology" class="relative bg-linear-to-b
                                    from-cream-100 via-cream-50 to-cream-100
                                    py-20 sm:py-24 lg:py-32
                                    px-4 sm:px-6 lg:px-8">

      <div class="max-w-7xl mx-auto">

        <!-- ============================= -->
        <!-- CABEÇALHO -->
        <!-- ============================= -->
        <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">

          <p class="font-sans text-[10px] sm:text-xs
                    tracking-[0.3em] sm:tracking-[0.4em]
                    text-gold-600 mb-4">
            THE TECHNOLOGY
          </p>

          <h2 class="font-serif text-coffee-800 leading-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Powered by Nature.
            <br />
            <span class="text-gold-600">Advanced</span> Technology.
          </h2>

          <p class="font-sans text-coffee-700 leading-relaxed
                    text-sm sm:text-base md:text-lg
                    mt-6 sm:mt-8 max-w-2xl mx-auto">
            Innovation meets nature through Brazilian Gold Premium and
            Botanic Activation technology — a blend of premium actives
            that revitalizes, fortifies and enhances hair.
          </p>

        </div>

        <!-- ============================= -->
        <!-- GRID DOS 4 ATIVOS -->
        <!-- Mobile: 1 col | sm: 2 cols | lg: 4 cols -->
        <!-- ============================= -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                    gap-6 sm:gap-8 lg:gap-6
                    max-w-6xl mx-auto">

          ${actives
            .map(
              (active) => `
            <div class="group text-center p-6 sm:p-8
                        bg-cream-50 border border-gold-200 rounded-sm
                        hover:border-gold-400 hover:shadow-md
                        transition-all duration-300">

              <!-- Ícone -->
              <div class="flex items-center justify-center mb-5">
                <div class="w-14 h-14 sm:w-16 sm:h-16
                            rounded-full border border-gold-400
                            group-hover:bg-gold-500 group-hover:border-gold-500
                            flex items-center justify-center
                            text-gold-600 group-hover:text-white
                            transition-all duration-300">
                  ${active.icon}
                </div>
              </div>

              <!-- Nome -->
              <h3 class="font-serif text-lg sm:text-xl text-coffee-800 mb-3">
                ${active.name}
              </h3>

              <!-- Descrição -->
              <p class="font-sans text-xs sm:text-sm text-coffee-700 leading-relaxed">
                ${active.description}
              </p>

            </div>
          `
            )
            .join('')}

        </div>

        <!-- ============================= -->
        <!-- FRASE DE FECHAMENTO -->
        <!-- ============================= -->
        <div class="text-center mt-14 sm:mt-16 lg:mt-20">
          <p class="font-sans text-xs sm:text-sm
                    tracking-[0.2em] sm:tracking-[0.3em]
                    text-coffee-700 uppercase">
            Results you can feel, from the first use.
          </p>
        </div>

      </div>
    </section>
  `
}