// =====================================================
// HEADER — Dourado metálico animado com fonte serifada
// =====================================================

import { getCartCount } from '../../utils/cart'
import gsap from 'gsap'

export function Header(): string {
  return `
    <header
      class="fixed top-0 left-0 right-0 z-40
             border-b border-[#b89545]/50
             overflow-hidden flex flex-col shadow-md"
    >
      <!-- FUNDO DOURADO METÁLICO ANIMADO (Tom mais forte) -->
      <div id="header-bg" class="absolute inset-0 z-[-1]"
           style="background: linear-gradient(110deg, #d4af37 0%, #f5ebd4 25%, #c19a3f 50%, #f5ebd4 75%, #d4af37 100%); 
                  background-size: 300% 300%;
                  box-shadow: inset 0 0 40px rgba(0,0,0,0.05);">
      </div>

      <div class="max-w-7xl w-full mx-auto
                  px-4 sm:px-6 lg:px-8
                  py-3 sm:py-4
                  flex items-center justify-between">

        <!-- LOGO -->
        <a href="#" class="shrink-0">
          <img 
            src="/hero/logomarron.png" 
            alt="Lavillu's Beauty" 
            class="h-12 sm:h-16 lg:h-20 w-auto object-contain"
          />
        </a>

        <!-- MENU DESKTOP (lg+) - Agora com fonte serifada e maior -->
        <nav class="hidden lg:flex items-center gap-8 xl:gap-10
                    font-serif text-base lg:text-lg xl:text-xl text-coffee-900 font-medium tracking-wide">
          <a href="#about" class="hover:text-white hover:drop-shadow-md transition-all duration-300">About Us</a>
          <a href="#technology" class="hover:text-white hover:drop-shadow-md transition-all duration-300">Technology</a>
          <a href="#collection" class="hover:text-white hover:drop-shadow-md transition-all duration-300">Collection</a>
          <a href="#distributor" class="hover:text-white hover:drop-shadow-md transition-all duration-300">Distributors</a>
          <a href="#international" class="hover:text-white hover:drop-shadow-md transition-all duration-300">International</a>
          <a href="#contact" class="hover:text-white hover:drop-shadow-md transition-all duration-300">Contact</a>
        </nav>

        <!-- AÇÕES À DIREITA -->
        <div class="flex items-center gap-3 sm:gap-4">

          <!-- BOTÃO DO CARRINHO -->
          <button
            id="cart-button"
            class="relative flex items-center gap-2
                   text-coffee-900 hover:text-white transition-colors duration-300"
            aria-label="Open cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="20" height="20"
                 class="sm:w-6 sm:h-6"
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
                     bg-coffee-900 text-white font-bold rounded-full
                     text-[9px] sm:text-[11px]
                     w-4 h-4 sm:w-5 sm:h-5
                     flex items-center justify-center"
            >
              ${getCartCount()}
            </span>
          </button>

          <!-- BOTÃO HAMBÚRGUER -->
          <button
            id="menu-toggle"
            class="lg:hidden text-coffee-900 hover:text-white transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg id="menu-icon-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg id="menu-icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="hidden">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

        </div>
      </div>

      <!-- MENU MOBILE -->
      <div id="mobile-menu" class="lg:hidden overflow-hidden max-h-0 transition-all duration-300 ease-out bg-[#e5c76e] border-t border-[#b89545]/50">
        <nav class="px-6 py-6 flex flex-col gap-4 font-serif text-lg text-coffee-900 font-medium">
          <a href="#about" class="hover:text-white transition py-2 border-b border-[#b89545]/30">About Us</a>
          <a href="#technology" class="hover:text-white transition py-2 border-b border-[#b89545]/30">Technology</a>
          <a href="#collection" class="hover:text-white transition py-2 border-b border-[#b89545]/30">Collection</a>
          <a href="#distributor" class="hover:text-white transition py-2 border-b border-[#b89545]/30">Distributors</a>
          <a href="#international" class="hover:text-white transition py-2 border-b border-[#b89545]/30">International</a>
          <a href="#contact" class="hover:text-white transition py-2">Contact</a>
        </nav>
      </div>

    </header>
  `
}

export function initHeader() {
  // Atualiza o contador do carrinho
  const updateCount = () => {
    const el = document.getElementById('cart-count')
    if (el) el.textContent = String(getCartCount())
  }
  window.addEventListener('cart:updated', updateCount)

  // Lógica do Menu Mobile
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

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        isOpen = false
        mobileMenu.style.maxHeight = '0px'
        iconOpen.classList.remove('hidden')
        iconClose.classList.add('hidden')
      })
    })
  }

  // =====================================================
  // ANIMAÇÃO GSAP — FUNDO DOURADO METÁLICO
  // =====================================================
  const bg = document.getElementById('header-bg')
  
  if (bg) {
    // Faz o gradiente se mover de forma lenta e elegante
    gsap.to(bg, {
      backgroundPosition: "100% 50%",
      duration: 10,        // 10 segundos para ir
      ease: "sine.inOut",  // Movimento super suave
      repeat: -1,          // Infinito
      yoyo: true           // Vai e volta
    })
  }
}