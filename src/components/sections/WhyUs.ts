// =====================================================
// WHY US — Por que nossos produtos se destacam
// =====================================================

const pillars = [
  {
    title: 'Premium Ingredients',
    description: 'Carefully selected to nourish and protect your hair.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon>
        <line x1="2" y1="9" x2="22" y2="9"></line>
        <line x1="12" y1="22" x2="6" y2="3"></line>
        <line x1="12" y1="22" x2="18" y2="3"></line>
      </svg>
    `,
  },
  {
    title: 'Advanced Technology',
    description: 'Innovative formulas for visible and lasting results.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 3h6v5l4 9a3 3 0 0 1-2.8 4H7.8A3 3 0 0 1 5 17l4-9V3z"></path>
        <line x1="9" y1="3" x2="15" y2="3"></line>
      </svg>
    `,
  },
  {
    title: 'Proven Results',
    description: 'Stronger, healthier and more beautiful hair every day.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z"></path>
      </svg>
    `,
  },
  {
    title: 'Safe & Effective',
    description: 'Gentle care that delivers maximum performance.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    `,
  },
]

export function WhyUs(): string {
  return `
    <section id="why-us" class="relative bg-cream-50
                                py-20 sm:py-24 lg:py-32
                                px-4 sm:px-6 lg:px-8">

      <div class="max-w-7xl mx-auto">

        <!-- CABEÇALHO -->
        <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <p class="font-sans text-[10px] sm:text-xs
                    tracking-[0.3em] sm:tracking-[0.4em]
                    text-gold-600 mb-4">
            WHY OUR PRODUCTS STAND OUT
          </p>

          <h2 class="font-serif text-coffee-800 leading-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Quality you can
            <span class="text-gold-600">trust</span>.
          </h2>

          <p class="font-sans text-coffee-700 leading-relaxed
                    text-sm sm:text-base md:text-lg
                    mt-6 max-w-2xl mx-auto">
            We use advanced technology and premium ingredients to deliver real results.
          </p>
        </div>

        <!-- 4 PILARES -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                    gap-6 sm:gap-8 lg:gap-10
                    max-w-6xl mx-auto">

          ${pillars
            .map(
              (pillar) => `
            <div class="text-center px-4">

              <div class="flex items-center justify-center mb-5">
                <div class="w-16 h-16 sm:w-20 sm:h-20
                            rounded-full border border-gold-400
                            flex items-center justify-center
                            text-gold-600">
                  ${pillar.icon}
                </div>
              </div>

              <h3 class="font-serif text-lg sm:text-xl text-coffee-800 mb-3">
                ${pillar.title}
              </h3>

              <p class="font-sans text-xs sm:text-sm text-coffee-700 leading-relaxed">
                ${pillar.description}
              </p>

            </div>
          `
            )
            .join('')}

        </div>

        <!-- FAIXA DE CERTIFICAÇÕES -->
        <div class="mt-16 sm:mt-20 lg:mt-24
                    border-t border-b border-gold-200
                    py-8 sm:py-10">
          <p class="text-center font-sans text-[10px] sm:text-xs
                    tracking-[0.3em] text-coffee-700 uppercase mb-6">
            Certified Quality
          </p>
          <div class="flex flex-wrap items-center justify-center
                      gap-6 sm:gap-10 lg:gap-16
                      font-serif text-lg sm:text-xl lg:text-2xl
                      text-gold-600">
            <span>ANVISA</span>
            <span class="text-gold-300">•</span>
            <span>FDA</span>
            <span class="text-gold-300">•</span>
            <span>ECHA</span>
            <span class="text-gold-300">•</span>
            <span>GMP</span>
          </div>
        </div>

        <!-- FRASE FINAL -->
        <div class="text-center mt-14 sm:mt-16">
          <p class="font-serif italic text-gold-600
                    text-xl sm:text-2xl md:text-3xl">
            "Premium care. Proven quality. Beautiful you."
          </p>
        </div>

      </div>
    </section>
  `
}