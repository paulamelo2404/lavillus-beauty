// =====================================================
// CONTACT — Contato via WhatsApp e Instagram
// =====================================================

export function Contact(): string {
  return `
    <section id="contact" class="relative bg-linear-to-b
                                 from-cream-100 to-cream-50
                                 py-20 sm:py-24 lg:py-32
                                 px-4 sm:px-6 lg:px-8">

      <div class="max-w-4xl mx-auto text-center">

        <p class="font-sans text-[10px] sm:text-xs
                  tracking-[0.3em] sm:tracking-[0.4em]
                  text-gold-600 mb-4">
          CONTACT US
        </p>

        <h2 class="font-serif text-coffee-800 leading-tight
                   text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
          We are always here
          <br />
          <span class="text-gold-600">to assist you</span>.
        </h2>

        <p class="font-sans text-coffee-700 leading-relaxed
                  text-sm sm:text-base md:text-lg
                  mb-10 max-w-2xl mx-auto">
          Whether you are a cosmetics distributor, a professional hairstylist,
          or manage a salon chain, feel free to reach out with your questions and needs.
        </p>

        <!-- BOTÕES DE CONTATO -->
        <div class="flex flex-col sm:flex-row items-center justify-center
                    gap-4 sm:gap-6 max-w-2xl mx-auto">

          <!-- WHATSAPP -->
          <a
            href="https://wa.me/5516981404969"
            target="_blank"
            rel="noopener"
            class="w-full sm:w-auto flex items-center justify-center gap-3
                   px-8 py-4
                   bg-[#25D366] text-white
                   font-sans text-xs tracking-widest uppercase
                   rounded-sm
                   hover:bg-[#1EBE5D] transition-all duration-300
                   shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Talk on WhatsApp
          </a>

          <!-- INSTAGRAM -->
          <a
            href="https://instagram.com/lavillusbeauty"
            target="_blank"
            rel="noopener"
            class="w-full sm:w-auto flex items-center justify-center gap-3
                   px-8 py-4
                   border border-gold-500 text-gold-600
                   font-sans text-xs tracking-widest uppercase
                   rounded-sm
                   hover:bg-gold-500 hover:text-white transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow on Instagram
          </a>

        </div>

      </div>
    </section>
  `
}