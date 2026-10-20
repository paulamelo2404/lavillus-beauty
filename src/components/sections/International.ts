// =====================================================
// INTERNATIONAL — Logística internacional (responsivo)
// =====================================================

const logistics = [
  {
    title: 'Secure Shipping',
    description: 'Safe and tracked international delivery.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    `,
  },
  {
    title: 'Real-Time Tracking',
    description: 'Follow your order from our door to yours.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    `,
  },
  {
    title: 'Original Products',
    description: '100% authentic, directly from Brazil.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    `,
  },
  {
    title: 'Care Anywhere',
    description: 'Your beauty reaches you wherever you are.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    `,
  },
]

export function International(): string {
  return `
    <section id="international" class="relative bg-cream-50
                                       py-20 sm:py-24 lg:py-32
                                       px-4 sm:px-6 lg:px-8">

      <div class="max-w-7xl mx-auto">

        <!-- CABEÇALHO -->
        <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">

          <p class="font-sans text-[10px] sm:text-xs
                    tracking-[0.3em] sm:tracking-[0.4em]
                    text-gold-600 mb-4">
            INTERNATIONAL DELIVERY
          </p>

          <h2 class="font-serif text-coffee-800 leading-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Your beauty
            <span class="text-gold-600">without borders</span>.
          </h2>

          <p class="font-sans text-coffee-700 leading-relaxed
                    text-sm sm:text-base md:text-lg
                    mt-6 max-w-2xl mx-auto">
            Lavillu's Beauty delivers your favorite products safely and quickly
            to the USA, Canada and France.
          </p>

        </div>

        <!-- BANDEIRAS -->
        <div class="flex items-center justify-center flex-wrap
                    gap-6 sm:gap-10 lg:gap-16
                    mb-14 sm:mb-16 lg:mb-20">

          <div class="flex flex-col items-center gap-3">
            <span class="text-4xl sm:text-5xl lg:text-6xl leading-none">🇫🇷</span>
            <span class="font-sans text-[10px] sm:text-xs
                         tracking-[0.25em] text-coffee-700 uppercase">
              France
            </span>
          </div>

          <div class="flex flex-col items-center gap-3">
            <span class="text-4xl sm:text-5xl lg:text-6xl leading-none">🇨🇦</span>
            <span class="font-sans text-[10px] sm:text-xs
                         tracking-[0.25em] text-coffee-700 uppercase">
              Canada
            </span>
          </div>

          <div class="flex flex-col items-center gap-3">
            <span class="text-4xl sm:text-5xl lg:text-6xl leading-none">🇺🇸</span>
            <span class="font-sans text-[10px] sm:text-xs
                         tracking-[0.25em] text-coffee-700 uppercase">
              USA
            </span>
          </div>

        </div>

        <!-- 4 DIFERENCIAIS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                    gap-6 sm:gap-8 lg:gap-10
                    max-w-6xl mx-auto">

          ${logistics
            .map(
              (item) => `
            <div class="text-center px-4">
              <div class="flex items-center justify-center mb-5">
                <div class="w-14 h-14 sm:w-16 sm:h-16
                            rounded-full border border-gold-400
                            flex items-center justify-center
                            text-gold-600">
                  ${item.icon}
                </div>
              </div>
              <h3 class="font-serif text-lg sm:text-xl text-coffee-800 mb-3">
                ${item.title}
              </h3>
              <p class="font-sans text-xs sm:text-sm text-coffee-700 leading-relaxed">
                ${item.description}
              </p>
            </div>
          `
            )
            .join('')}

        </div>

        <!-- TAGLINE -->
        <div class="text-center mt-14 sm:mt-16 lg:mt-20">
          <p class="font-serif italic text-gold-600
                    text-xl sm:text-2xl md:text-3xl">
            "Global beauty. Real people."
          </p>
        </div>

      </div>
    </section>
  `
}