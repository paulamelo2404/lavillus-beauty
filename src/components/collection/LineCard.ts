// =====================================================
// LINE CARD — Layout Editorial Compacto (5 colunas no desktop)
// =====================================================

import type { Line } from '../../data/lines'

export function LineCard(line: Line): string {
  return `
    <a
      href="#all-products"
      data-line-filter="${line.id}"
      class="line-card group flex flex-col
             bg-cream-50 border border-gold-200 rounded-sm
             hover:border-gold-400 hover:shadow-lg
             transition-all duration-500 overflow-hidden"
    >
      <!-- IMAGEM (Quadrado) -->
      <div class="relative aspect-square w-full overflow-hidden bg-coffee-900">
        <img
          src="${line.cover}"
          alt="${line.name}"
          class="absolute inset-0 w-full h-full object-cover object-center
                 group-hover:scale-110 transition-transform duration-700 ease-out"
          onerror="this.style.display='none'"
        />
        
        <!-- Overlay de Hover -->
        <div class="absolute inset-0 bg-coffee-900/0 group-hover:bg-coffee-900/40
                    transition-colors duration-500 flex items-center justify-center">
          <span class="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-500
                       px-4 py-2 border border-white text-white
                       font-sans text-[10px] tracking-widest uppercase font-bold backdrop-blur-sm bg-black/20">
            Discover
          </span>
        </div>
      </div>

      <!-- INFORMAÇÕES -->
      <div class="flex flex-col flex-1 p-4 sm:p-5 text-center bg-cream-50">
        
        <p class="font-sans text-[7px] sm:text-[8px] lg:text-[9px]
                  tracking-[0.2em] text-gold-600 mb-2 uppercase font-semibold">
          ${line.tagline}
        </p>

        <h3 class="font-serif text-lg sm:text-xl
                   text-coffee-800 leading-tight mb-3 group-hover:text-gold-600 transition-colors duration-300">
          ${line.name}
        </h3>

        <!-- Linha decorativa -->
        <div class="w-6 h-px bg-gold-400 mx-auto mt-auto group-hover:w-12 transition-all duration-500"></div>

      </div>
    </a>
  `
}