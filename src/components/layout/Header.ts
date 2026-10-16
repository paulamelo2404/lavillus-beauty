// =====================================================
// HEADER — Cabeçalho fixo, responsivo com menu mobile
// =====================================================
// Mobile-first: pensado primeiro pra celular, depois cresce.
// Breakpoints Tailwind: sm=640px | md=768px | lg=1024px
// =====================================================

import { getCartCount } from '../../utils/cart'

export function Header(): string {
  return `
    <header
      class="fixed top-0 left-0 right-0 z-40
             bg-cream-50/95 backdrop-blur-sm
             border-b border-gold-200"
    >
      <div class="max-w-7xl mx-auto
                  px-4 sm:px-6 lg:px-8
                  py-3 sm:py-4
                  flex items-center justify-between">

        <!-- ============================= -->
        <!-- LOGO -->
        <!-- ============================= -->
        <a href="#" class="flex flex-col items-center leading-none shrink-0">
          <span class="font-serif tracking-widest text-gold-600
                       text-lg sm:text-xl lg:text-2xl">
            LAVILLU'S
          </span>
          <span class="font-sans tracking-[0.4em] text-coffee-700 mt-0.5 sm:mt-1
                       text-[8px] sm:text-[10px]">
            BEAUTY
          </span>
        </a>

        <!-- ============================= -->
        <!-- MENU DESKTOP (lg+) -->
        <!-- ============================= -->
        <nav class="hidden lg:flex items-center gap-6 xl:gap-8
                    font-sans text-sm text-coffee-700">
          <a href="#about" class="hover:text-gold-600 transition">About Us</a>
          <a href="#technology" class="hover:text-gold-600 transition">Technology</a>
          <a href="#collection" class="hover:text-gold-600 transition">Collection</a>
          <a href="#distributor" class="hover:text-gold-600 transition">Distributors</a>
          <a href="#international" class="hover:text-gold-600 transition">International</a>
          <a href="#contact" class="hover:text-gold-600 transition">Contact</a>
        </nav>

        <!-- ============================= -->
        <!-- AÇÕES À DIREITA (carrinho + hambúrguer) -->
        <!-- ============================= -->
        <div class="flex items-center gap-3 sm:gap-4">

          <!-- BOTÃO DO CARRINHO -->
          <button
            id="cart-button"
            class="relative flex items-center gap-2
                   text-coffee-700 hover:text-gold-600 transition"
            aria-label="Open cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="20" height="20"
                 class="sm:w-5.5 sm:h-5.5"
                 viewBox="0 0 24 24"
                 fill="none" stroke="currentColor"
                 stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span
              id="cart-count"
              class="absolute -top-2 -right-2 sm:-right-3
                     bg-gold-500 text-white font-bold rounded-full
                     text-[9px] sm:text-[10px]
                     w-4 h-4 sm:w-5 sm:h-5
                     flex items-center justify-center"
            >
              ${getCartCount()}
            </span>
          </button>

          <!-- BOTÃO HAMBÚRGUER (só aparece em telas < lg) -->
          <button
            id="menu-toggle"
            class="lg:hidden text-coffee-700 hover:text-gold-600 transition"
            aria-label="Toggle menu"
          >
            <!-- Ícone: 3 linhas (menu fechado) -->
            <svg id="menu-icon-open"
                 xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24"
                 viewBox="0 0 24 24"
                 fill="none" stroke="currentColor"
                 stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>

            <!-- Ícone: X (menu aberto) - começa escondido -->
            <svg id="menu-icon-close"
                 xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24"
                 viewBox="0 0 24 24"
                 fill="none" stroke="currentColor"
                 stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                 class="hidden">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

        </div>
      </div>

      <!-- ============================= -->
      <!-- MENU MOBILE (desliza de cima) -->
      <!-- ============================= -->
      <div
        id="mobile-menu"
        class="lg:hidden overflow-hidden max-h-0 transition-all duration-300 ease-out
               bg-cream-50 border-t border-gold-200"
      >
        <nav class="px-6 py-6 flex flex-col gap-4
                    font-sans text-sm text-coffee-700">
          <a href="#about" class="hover:text-gold-600 transition py-2 border-b border-gold-100">About Us</a>
          <a href="#technology" class="hover:text-gold-600 transition py-2 border-b border-gold-100">Technology</a>
          <a href="#collection" class="hover:text-gold-600 transition py-2 border-b border-gold-100">Collection</a>
          <a href="#distributor" class="hover:text-gold-600 transition py-2 border-b border-gold-100">Distributors</a>
          <a href="#international" class="hover:text-gold-600 transition py-2 border-b border-gold-100">International</a>
          <a href="#contact" class="hover:text-gold-600 transition py-2">Contact</a>
        </nav>
      </div>

    </header>
  `
}

// =====================================================
// INICIALIZAÇÃO — contador do carrinho + menu mobile
// =====================================================
export function initHeader() {

  // ---------- CONTADOR DO CARRINHO ----------
  const updateCount = () => {
    const el = document.getElementById('cart-count')
    if (el) el.textContent = String(getCartCount())
  }
  window.addEventListener('cart:updated', updateCount)

  // ---------- MENU MOBILE ----------
  const toggleBtn = document.getElementById('menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')
  const iconOpen = document.getElementById('menu-icon-open')
  const iconClose = document.getElementById('menu-icon-close')

  if (toggleBtn && mobileMenu && iconOpen && iconClose) {
    let isOpen = false

    toggleBtn.addEventListener('click', () => {
      isOpen = !isOpen

      if (isOpen) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px'
        iconOpen.classList.add('hidden')
        iconClose.classList.remove('hidden')
      } else {
        mobileMenu.style.maxHeight = '0px'
        iconOpen.classList.remove('hidden')
        iconClose.classList.add('hidden')
      }
    })

    // Fecha o menu ao clicar em qualquer link
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        isOpen = false
        mobileMenu.style.maxHeight = '0px'
        iconOpen.classList.remove('hidden')
        iconClose.classList.add('hidden')
      })
    })
  }
}