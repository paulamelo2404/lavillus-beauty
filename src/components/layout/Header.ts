// =====================================================
// HEADER — Cabeçalho fixo com menu e carrinho
// =====================================================

import { getCartCount } from '../../utils/cart'

export function Header(): string {
  return `
    <header class="fixed top-0 left-0 right-0 z-40 bg-cream-50/95 backdrop-blur-sm border-b border-gold-200">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <!-- LOGO -->
        <a href="#" class="flex flex-col items-center leading-none">
          <span class="font-serif text-2xl tracking-widest text-gold-600">
            LAVILLU'S
          </span>
          <span class="font-sans text-[10px] tracking-[0.4em] text-coffee-700 mt-1">
            BEAUTY
          </span>
        </a>

        <!-- MENU (desktop) -->
        <nav class="hidden lg:flex items-center gap-8 font-sans text-sm text-coffee-700">
          <a href="#about" class="hover:text-gold-600 transition">About Us</a>
          <a href="#technology" class="hover:text-gold-600 transition">Technology</a>
          <a href="#collection" class="hover:text-gold-600 transition">Collection</a>
          <a href="#distributor" class="hover:text-gold-600 transition">Distributors</a>
          <a href="#international" class="hover:text-gold-600 transition">International</a>
          <a href="#contact" class="hover:text-gold-600 transition">Contact</a>
        </nav>

        <!-- CARRINHO -->
        <button
          id="cart-button"
          class="relative flex items-center gap-2 font-sans text-sm text-coffee-700 hover:text-gold-600 transition"
          aria-label="Open cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span
            id="cart-count"
            class="absolute -top-2 -right-3 bg-gold-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            ${getCartCount()}
          </span>
        </button>

      </div>
    </header>
  `
}

// =====================================================
// Atualiza o contador do carrinho quando ele muda
// =====================================================
export function initHeader() {
  const updateCount = () => {
    const el = document.getElementById('cart-count')
    if (el) el.textContent = String(getCartCount())
  }

  // Escuta o evento global que o cart.ts dispara
  window.addEventListener('cart:updated', updateCount)
}