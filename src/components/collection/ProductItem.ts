// =====================================================
// PRODUCT ITEM — Card individual com imagem vertical
// =====================================================

import type { Product } from '../../data/products'

export function ProductItem(product: Product): string {
  return `
    <div class="product-card group flex flex-col
                bg-[#fdfaf6] border border-gray-200 rounded-sm
                hover:border-gold-400 hover:shadow-xl
                transition-all duration-500 overflow-hidden">

      <div class="relative aspect-4/5 bg-[#fdfaf6] overflow-hidden flex items-center justify-center p-6">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="w-full h-full object-contain mix-blend-multiply
                 group-hover:scale-105 transition-transform duration-700 ease-out"
          onerror="this.style.display='none'"
        />
      </div>

      <div class="flex flex-col flex-1 p-5 sm:p-6 border-t border-gray-100 bg-white">

        <p class="font-sans text-[9px] sm:text-[10px]
                  tracking-[0.25em] text-gold-600 mb-2 uppercase font-semibold">
          ${product.size}
        </p>

        <h3 class="font-serif text-lg sm:text-xl
                   text-coffee-800 leading-tight mb-3">
          ${product.name}
        </h3>

        <p class="font-sans text-xs sm:text-sm
                  text-coffee-700 leading-relaxed mb-4 flex-1">
          ${product.description}
        </p>

        <div class="flex flex-wrap gap-1.5 mb-5">
          ${product.actives
            .map(
              (active) => `
            <span class="font-sans text-[8px] sm:text-[9px]
                         tracking-wider uppercase
                         text-coffee-700 bg-gray-100
                         px-2 py-1 rounded-sm">
              ${active}
            </span>
          `
            )
            .join('')}
        </div>

        <button
          data-add-to-cart="${product.id}"
          class="w-full py-3
                 border border-gold-500 text-gold-600
                 font-sans text-xs tracking-widest uppercase font-semibold
                 rounded-sm bg-transparent
                 hover:bg-gold-500 hover:text-white transition-all duration-300"
        >
          Add to Cart
        </button>

      </div>
    </div>
  `
}