// =====================================================
// LINE FILTER — Abas de filtro por linha
// =====================================================

import { lines } from '../../data/lines'

export function LineFilter(): string {
  return `
    <div class="flex flex-wrap items-center justify-center
                gap-2 sm:gap-3 mb-10 sm:mb-14">

      <!-- ABA "ALL" -->
      <button
        data-filter="all"
        class="filter-btn active
               font-sans text-[10px] sm:text-xs
               tracking-widest uppercase
               px-4 sm:px-5 py-2.5 sm:py-3
               border border-gold-400 rounded-sm
               text-gold-700 bg-gold-500/10
               hover:bg-gold-500 hover:text-white
               transition-all duration-300">
        All
      </button>

      <!-- ABAS DAS LINHAS -->
      ${lines
        .map(
          (line) => `
        <button
          data-filter="${line.id}"
          class="filter-btn
                 font-sans text-[10px] sm:text-xs
                 tracking-widest uppercase
                 px-4 sm:px-5 py-2.5 sm:py-3
                 border border-gold-200 rounded-sm
                 text-coffee-700
                 hover:border-gold-400 hover:text-gold-600
                 transition-all duration-300">
          ${line.name}
        </button>
      `
        )
        .join('')}

    </div>
  `
}