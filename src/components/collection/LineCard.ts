// =====================================================
// LINE CARD — Capa visual de cada linha
// =====================================================

import type { Line } from '../../data/lines'

export function LineCard(line: Line): string {
  return `
    <a
      href="#all-products"
      data-line-filter="${line.id}"
      class="line-card group relative block
             aspect-3/4 overflow-hidden rounded-sm
             border border-gold-200 hover:border-gold-400
             transition-all duration-500"
    >
      <!-- IMAGEM DE FUNDO -->
      <div class="absolute inset-0 bg-cream-200">
        <img
          src="${line.cover}"
          alt="${line.name}"
          class="w-full h-full object-cover
                 group-hover:scale-105
                 transition-transform duration-700"
          onerror="this.style.display='none'"
        />
      </div>

      <!-- OVERLAY ESCURO -->
      <div class="absolute inset-0 bg-linear-to-t
                  from-coffee-900/80 via-coffee-900/20 to-transparent">
      </div>

      <!-- CONTEÚDO -->
      <div class="relative h-full flex flex-col justify-end
                  p-5 sm:p-6 text-left">

        <p class="font-sans text-[9px] sm:text-[10px]
                  tracking-[0.3em] text-gold-300 mb-2 uppercase">
          ${line.tagline}
        </p>

        <h3 class="font-serif text-xl sm:text-2xl lg:text-3xl
                   text-white leading-tight mb-3">
          ${line.name}
        </h3>

        <span class="inline-flex items-center gap-2
                     font-sans text-[10px] sm:text-xs
                     tracking-widest text-gold-300 uppercase
                     group-hover:text-gold-200 transition">
          View Products
          <svg xmlns="http://www.w3.org/2000/svg"
               width="14" height="14" viewBox="0 0 24 24"
               fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>

      </div>
    </a>
  `
}