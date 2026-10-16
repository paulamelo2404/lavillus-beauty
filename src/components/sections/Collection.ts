// =====================================================
// COLLECTION — Capas das linhas + catálogo completo
// =====================================================

import { lines } from '../../data/lines'
import { products } from '../../data/products'
import { LineCard } from '../collection/LineCard'
import { LineFilter } from '../collection/LineFilter'
import { ProductItem } from '../collection/ProductItem'

// =====================================================
// RENDERIZAÇÃO DA SEÇÃO
// =====================================================
export function Collection(): string {
  return `
    <section id="collection" class="relative bg-cream-100
                                     py-20 sm:py-24 lg:py-32
                                     px-4 sm:px-6 lg:px-8">

      <div class="max-w-7xl mx-auto">

        <!-- CABEÇALHO -->
        <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <p class="font-sans text-[10px] sm:text-xs
                    tracking-[0.3em] sm:tracking-[0.4em]
                    text-gold-600 mb-4">
            THE COLLECTION
          </p>

          <h2 class="font-serif text-coffee-800 leading-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Professional formulas
            <br />
            for <span class="text-gold-600">every hair need</span>.
          </h2>
        </div>

        <!-- CAPAS DAS LINHAS -->
        <div id="lines-showcase"
             class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                    gap-5 sm:gap-6 lg:gap-8
                    mb-20 sm:mb-24 lg:mb-32">
          ${lines.map(LineCard).join('')}
        </div>

        <!-- DIVISOR -->
        <div class="flex items-center justify-center gap-4 mb-14 sm:mb-16">
          <div class="h-px w-12 sm:w-16 bg-gold-400"></div>
          <div class="w-2 h-2 rotate-45 bg-gold-500"></div>
          <div class="h-px w-12 sm:w-16 bg-gold-400"></div>
        </div>

        <!-- CATÁLOGO -->
        <div id="all-products">
          <div class="text-center mb-10 sm:mb-14">
            <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl text-coffee-800">
              All Products
            </h3>
            <p class="font-sans text-xs sm:text-sm text-coffee-700 mt-3">
              Filter by line or view everything at once.
            </p>
          </div>

          ${LineFilter()}

          <div id="products-grid"
               class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                      gap-6 sm:gap-8">
            ${products.map(ProductItem).join('')}
          </div>

          <div id="products-empty" class="hidden text-center py-16">
            <p class="font-sans text-coffee-700">
              No products found for this line.
            </p>
          </div>
        </div>

      </div>
    </section>
  `
}

// =====================================================
// INICIALIZAÇÃO — filtros + scroll das capas
// =====================================================
export function initCollection() {
  const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-btn')
  const productCards = document.querySelectorAll<HTMLElement>('.product-card')
  const emptyMessage = document.getElementById('products-empty')

  // ---------- FILTROS ----------
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter
      if (!filter) return

      filterButtons.forEach((b) => {
        b.classList.remove('active', 'bg-gold-500/10', 'text-gold-700', 'border-gold-400')
        b.classList.add('border-gold-200', 'text-coffee-700')
      })
      btn.classList.add('active', 'bg-gold-500/10', 'text-gold-700', 'border-gold-400')
      btn.classList.remove('border-gold-200', 'text-coffee-700')

      let visibleCount = 0
      productCards.forEach((card) => {
        const productId = card
          .querySelector('[data-add-to-cart]')
          ?.getAttribute('data-add-to-cart')
        if (!productId) return

        const product = products.find((p) => p.id === productId)
        if (!product) return

        if (filter === 'all' || product.line === filter) {
          card.style.display = ''
          visibleCount++
        } else {
          card.style.display = 'none'
        }
      })

      if (emptyMessage) {
        emptyMessage.classList.toggle('hidden', visibleCount > 0)
      }
    })
  })

  // ---------- CLIQUE NAS CAPAS ----------
  document
    .querySelectorAll<HTMLElement>('[data-line-filter]')
    .forEach((card) => {
      card.addEventListener('click', () => {
        const lineId = card.dataset.lineFilter
        if (!lineId) return

        setTimeout(() => {
          const targetBtn = document.querySelector<HTMLButtonElement>(
            `.filter-btn[data-filter="${lineId}"]`
          )
          targetBtn?.click()
        }, 300)
      })
    })
}