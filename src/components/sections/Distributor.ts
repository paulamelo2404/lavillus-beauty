// =====================================================
// DISTRIBUTOR — Seja um distribuidor (responsivo)
// =====================================================

const benefits = [
  {
    title: 'Proven Brand',
    description: 'A Brazilian brand with credibility, identity and market potential.',
  },
  {
    title: 'Full Support',
    description: 'Marketing materials, training and commercial guidance.',
  },
  {
    title: 'Certified Quality',
    description: 'ANVISA, FDA and ECHA compliant — ready for global markets.',
  },
  {
    title: 'Export Ready',
    description: 'Logistics and documentation prepared for international distribution.',
  },
]

export function Distributor(): string {
  return `
    <section id="distributor" class="relative bg-linear-to-br
                                     from-coffee-900 via-coffee-800 to-coffee-900
                                     py-20 sm:py-24 lg:py-32
                                     px-4 sm:px-6 lg:px-8
                                     overflow-hidden">

      <!-- Brilho dourado decorativo -->
      <div class="absolute inset-0 opacity-20 pointer-events-none"
           style="background: radial-gradient(circle at 20% 30%, rgba(184,144,58,0.5), transparent 55%);">
      </div>
      <div class="absolute inset-0 opacity-20 pointer-events-none"
           style="background: radial-gradient(circle at 80% 70%, rgba(184,144,58,0.4), transparent 55%);">
      </div>

      <div class="relative z-10 max-w-7xl mx-auto">

        <!-- CABEÇALHO -->
        <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">

          <p class="font-sans text-[10px] sm:text-xs
                    tracking-[0.3em] sm:tracking-[0.4em]
                    text-gold-400 mb-4">
            BE A DISTRIBUTOR
          </p>

          <h2 class="font-serif text-white leading-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Grow with
            <span class="text-gold-400">Lavillu's</span>.
          </h2>

          <p class="font-sans text-cream-200 leading-relaxed
                    text-sm sm:text-base md:text-lg
                    mt-6 max-w-2xl mx-auto">
            Whether you're a cosmetics distributor, a professional hairstylist
            or manage a salon chain — we have the right partnership for you.
          </p>

        </div>

        <!-- 4 BENEFÍCIOS -->
        <!-- Mobile: 1 col | sm: 2 cols | lg: 4 cols -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                    gap-6 sm:gap-8
                    max-w-6xl mx-auto mb-14 sm:mb-16 lg:mb-20">

          ${benefits
            .map(
              (benefit) => `
            <div class="text-center px-4
                        p-6 sm:p-7
                        border border-gold-500/30 rounded-sm
                        hover:border-gold-400 transition-all duration-300">

              <div class="w-2 h-2 rotate-45 bg-gold-500 mx-auto mb-5"></div>

              <h3 class="font-serif text-lg sm:text-xl text-white mb-3">
                ${benefit.title}
              </h3>

              <p class="font-sans text-xs sm:text-sm text-cream-200 leading-relaxed">
                ${benefit.description}
              </p>

            </div>
          `
            )
            .join('')}

        </div>

        <!-- CTA -->
        <div class="text-center">
          <a
            href="https://wa.me/5516981404969?text=Hello!%20I%20would%20like%20to%20become%20a%20Lavillu's%20Beauty%20distributor."
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-3
                   px-8 sm:px-10 py-4 sm:py-5
                   bg-gold-500 text-white
                   font-sans text-xs sm:text-sm tracking-widest uppercase
                   rounded-sm
                   hover:bg-gold-400 transition-all duration-300
                   shadow-lg hover:shadow-xl"
          >
            Become a Distributor
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16" height="16" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <p class="font-sans text-[10px] sm:text-xs
                    tracking-[0.3em] text-cream-200/70 uppercase
                    mt-8">
            Talk with us on WhatsApp
          </p>
        </div>

      </div>
    </section>
  `
}