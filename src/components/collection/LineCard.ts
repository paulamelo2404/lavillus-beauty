// =====================================================
// LINE CARD — Layout Editorial (Imagem no topo, texto embaixo)
// =====================================================

import type { Line } from '../../data/lines'

export function LineCard(line: Line): string {
  return `
    <a
      href="#all-products"
      data-line-filter="${line.id}"
      class="line-card group flex flex-col
             bg-cream-50 border border-gold-200 rounded-sm
             hover:border-gold-400 hover:shadow-xl
             transition-all duration-500 overflow-hidden"
    >
      <!-- IMAGEM (Metade de cima) -->
      <div class="relative aspect-square w-full overflow-hidden bg-coffee-900">
        <img
          src="${line.cover}"
          alt="${line.name}"
          class="absolute inset-0 w-full h-full object-cover object-center
                 group-hover:scale-110 transition-transform duration-700 ease-out"
          onerror="this.style.display='none'"
        />
        
        <!-- Overlay de Hover (Escurece a imagem e mostra o botão) -->
        <div class="absolute inset-0 bg-coffee-900/0 group-hover:bg-coffee-900/40
                    transition-colors duration-500 flex items-center justify-center">
          <span class="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-500
                       px-6 py-3 border border-white text-white
                       font-sans text-xs tracking-widest uppercase font-bold backdrop-blur-sm bg-black/20">
            Discover
          </span>
        </div>
      </div>

      <!-- INFORMAÇÕES (Metade de baixo) -->
      <div class="flex flex-col flex-1 p-6 sm:p-8 text-center bg-cream-50">
        
        <p class="font-sans text-[9px] sm:text-[10px]
                  tracking-[0.3em] text-gold-600 mb-2 uppercase font-semibold">
          ${line.tagline}
        </p>

        <h3 class="font-serif text-2xl sm:text-3xl
                   text-coffee-800 leading-tight mb-4 group-hover:text-gold-600 transition-colors duration-300">
          ${line.name}
        </h3>

        <!-- Linha decorativa -->
        <div class="w-8 h-px bg-gold-400 mx-auto mt-auto group-hover:w-16 transition-all duration-500"></div>

      </div>
    </a>
  `
}