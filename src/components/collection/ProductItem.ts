// =====================================================
// PRODUCT ITEM — Card individual de produto
// =====================================================

import type { Product } from '../../data/products'

export function ProductItem(product: Product): string {
  return `
    <div class="product-card group flex flex-col
                bg-cream-50 border border-gold-200 rounded-sm
                hover:border-gold-400 hover:shadow-md
                transition-all duration-300 overflow-hidden">

      <!-- IMAGEM -->
      <div class="relative aspect-square bg-cream-100 overflow-hidden">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="w-full h-full object-contain p-6
                 group-hover:scale-105
                 transition-transform duration-500"
          onerror="this.style.display='none'"
        />
      </div>

      <!-- INFO -->
      <div class="flex flex-col flex-1 p-5 sm:p-6">

        <p class="font-sans text-[9px] sm:text-[10px]
                  tracking-[0.25em] text-gold-600 mb-2 uppercase">
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

        <!-- ATIVOS -->
        <div class="flex flex-wrap gap-2 mb-5">
          ${product.actives
            .map(
              (active) => `
            <span class="font-sans text-[9px] sm:text-[10px]
                         tracking-wider uppercase
                         text-gold-700 bg-gold-100
                         px-2 py-1 rounded-sm">
              ${active}
            </span>
          `
            )
            .join('')}
        </div>

        <!-- BOTÃO ADD TO CART -->
        <button
          data-add-to-cart="${product.id}"
          class="w-full py-3
                 bg-gold-500 text-white
                 font-sans text-xs tracking-widest uppercase
                 rounded-sm
                 hover:bg-gold-600 transition-all duration-300"
        >
          Add to Cart
        </button>

      </div>
    </div>
  `
}