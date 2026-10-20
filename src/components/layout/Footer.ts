// =====================================================
// FOOTER — Rodapé do site
// =====================================================

export function Footer(): string {
  const year = new Date().getFullYear()

  return `
    <footer class="bg-coffee-900 text-cream-200
                   py-12 sm:py-16
                   px-4 sm:px-6 lg:px-8
                   border-t border-gold-600/30">

      <div class="max-w-7xl mx-auto">

        <!-- TOPO DO FOOTER: LOGO + LINKS -->
        <div class="grid grid-cols-1 md:grid-cols-3
                    gap-10 sm:gap-12
                    mb-10 sm:mb-12">

          <!-- LOGO + TAGLINE -->
          <div class="text-center md:text-left">
            <a href="#" class="inline-flex flex-col items-center md:items-start leading-none mb-4">
              <span class="font-serif tracking-widest text-gold-400
                           text-xl sm:text-2xl">
                LAVILLU'S
              </span>
              <span class="font-sans tracking-[0.4em] text-cream-200 mt-1
                           text-[10px]">
                BEAUTY
              </span>
            </a>
            <p class="font-sans text-xs sm:text-sm text-cream-200/70
                      leading-relaxed mt-4">
              Brazilian professional hair care.
              Beauty · Care · Confidence.
            </p>
          </div>

          <!-- LINKS RÁPIDOS -->
          <div class="text-center md:text-left">
            <h3 class="font-sans text-[10px] sm:text-xs
                       tracking-[0.3em] text-gold-400 uppercase mb-4">
              Explore
            </h3>
            <ul class="space-y-2 font-sans text-sm text-cream-200/80">
              <li><a href="#about" class="hover:text-gold-400 transition">About Us</a></li>
              <li><a href="#collection" class="hover:text-gold-400 transition">Collection</a></li>
              <li><a href="#distributor" class="hover:text-gold-400 transition">Distributors</a></li>
              <li><a href="#international" class="hover:text-gold-400 transition">International</a></li>
            </ul>
          </div>

          <!-- CONTATO -->
          <div class="text-center md:text-left">
            <h3 class="font-sans text-[10px] sm:text-xs
                       tracking-[0.3em] text-gold-400 uppercase mb-4">
              Get in Touch
            </h3>
            <ul class="space-y-2 font-sans text-sm text-cream-200/80">
              <li>
                <a href="https://wa.me/5516981404969" target="_blank" rel="noopener" class="hover:text-gold-400 transition">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com/lavillusbeauty" target="_blank" rel="noopener" class="hover:text-gold-400 transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        <!-- DIVISOR -->
        <div class="border-t border-gold-600/20 pt-6">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p class="font-sans text-[10px] sm:text-xs text-cream-200/60 text-center sm:text-left">
              © ${year} Lavillu's Beauty. All rights reserved.
            </p>

            <p class="font-sans text-[10px] sm:text-xs text-cream-200/60 text-center sm:text-right">
              Made in Brazil 🇧🇷 · Shipped worldwide
            </p>

          </div>
        </div>

      </div>
    </footer>
  `
}