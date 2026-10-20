// =====================================================
// CART DRAWER — Painel lateral (desktop) e inferior (mobile)
// =====================================================

import { getCart, removeFromCart, updateQuantity } from '../../utils/cart'
import { sendOrderToWhatsApp } from '../../utils/whatsapp'

export function CartDrawer(): string {
  return `
    <!-- OVERLAY (fundo escuro) -->
    <!-- No mobile, volta a aparecer pra dar foco no carrinho -->
    <div
      id="cart-overlay"
      class="fixed inset-0 bg-black/50 z-40 opacity-0 pointer-events-none transition-opacity duration-300"
    ></div>

    <!-- DRAWER -->
    <!-- Mobile: sobe de baixo (bottom), ocupa 80% da altura, largura total -->
    <!-- Desktop (sm+): abre da direita, ocupa altura total, largura de 420px -->
    <aside
      id="cart-drawer"
      class="fixed z-50 bg-cream-50 shadow-2xl flex flex-col
             transition-transform duration-300 ease-out
             
             bottom-0 left-0 right-0 h-[80vh] rounded-t-2xl translate-y-full
             
             sm:top-0 sm:right-0 sm:bottom-auto sm:left-auto 
             sm:h-full sm:w-105 sm:rounded-none sm:border-l sm:border-gold-200
             sm:translate-y-0 sm:translate-x-full"
    >

      <!-- CABEÇALHO DO CARRINHO -->
      <div class="flex items-center justify-between
                  px-5 sm:px-6 py-4 sm:py-5
                  border-b border-gold-200">
        <h2 class="font-serif text-xl sm:text-2xl text-coffee-800">
          Your Cart
        </h2>
        <button
          id="cart-close"
          class="text-coffee-700 hover:text-gold-600 transition p-1"
          aria-label="Close cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- LISTA DE ITENS -->
      <div id="cart-items" class="flex-1 overflow-y-auto px-5 sm:px-6 py-4">
        <!-- Preenchido via JS -->
      </div>

      <!-- RODAPÉ (TOTAL + BOTÃO WHATSAPP) -->
      <div class="border-t border-gold-200
                  px-5 sm:px-6 py-4 sm:py-5 space-y-4
                  pb-safe">
        <div class="flex items-center justify-between">
          <span class="font-sans text-sm text-coffee-700">Total items:</span>
          <span id="cart-total" class="font-serif text-xl text-gold-600">0</span>
        </div>

        <button
          id="checkout-whatsapp"
          class="w-full py-4
                 bg-[#25D366] text-white
                 font-sans text-xs tracking-widest uppercase
                 rounded-sm
                 hover:bg-[#1EBE5D] transition-all duration-300
                 flex items-center justify-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Finalize on WhatsApp
        </button>
      </div>

    </aside>
  `
}

export function initCartDrawer() {
  const drawer = document.getElementById('cart-drawer')
  const overlay = document.getElementById('cart-overlay')
  const openBtn = document.getElementById('cart-button')
  const closeBtn = document.getElementById('cart-close')
  const itemsContainer = document.getElementById('cart-items')
  const totalEl = document.getElementById('cart-total')
  const checkoutBtn = document.getElementById('checkout-whatsapp')

  if (!drawer || !overlay || !openBtn || !closeBtn || !itemsContainer || !totalEl || !checkoutBtn) {
    return
  }

  // ---------- ABRIR / FECHAR ----------
  function openCart() {
    // Mostra o fundo escuro
    overlay!.classList.remove('opacity-0', 'pointer-events-none')
    
    // Remove as classes que escondem o carrinho
    // Mobile: volta pra posição Y=0 (sobe)
    // Desktop: volta pra posição X=0 (vem da direita)
    drawer!.classList.remove('translate-y-full', 'sm:translate-x-full')
    renderCart()
  }

  function closeCart() {
    // Esconde o fundo
    overlay!.classList.add('opacity-0', 'pointer-events-none')
    
    // Volta o carrinho pra baixo (mobile) e pra direita (desktop)
    drawer!.classList.add('translate-y-full', 'sm:translate-x-full')
  }

  openBtn.addEventListener('click', openCart)
  closeBtn.addEventListener('click', closeCart)
  overlay.addEventListener('click', closeCart) // Clicar fora fecha

  // ---------- RENDERIZAR ITENS ----------
  function renderCart() {
    const cart = getCart()
    const total = cart.reduce((sum, item) => sum + item.quantity, 0)
    totalEl!.textContent = String(total)

    if (cart.length === 0) {
      itemsContainer!.innerHTML = `
        <div class="text-center py-16">
          <p class="font-sans text-sm text-coffee-700">
            Your cart is empty.
          </p>
        </div>
      `
      return
    }

    itemsContainer!.innerHTML = cart
      .map(
        (item) => `
      <div class="flex gap-4 py-4 border-b border-gold-100">
        <div class="w-16 h-16 bg-cream-100 rounded-sm flex items-center justify-center shrink-0 overflow-hidden">
          <img src="${item.product.image}" alt="${item.product.name}" class="w-full h-full object-contain p-1" onerror="this.style.display='none'" />
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-serif text-base text-coffee-800 leading-tight mb-1 truncate">
            ${item.product.name}
          </h3>
          <p class="font-sans text-xs text-coffee-700/70 mb-2">
            ${item.product.size}
          </p>
          <div class="flex items-center gap-3">
            <div class="flex items-center border border-gold-200 rounded-sm">
              <button
                data-qty-minus="${item.product.id}"
                class="px-2 py-1 text-coffee-700 hover:text-gold-600 transition"
              >−</button>
              <span class="px-2 text-sm font-sans text-coffee-800">${item.quantity}</span>
              <button
                data-qty-plus="${item.product.id}"
                class="px-2 py-1 text-coffee-700 hover:text-gold-600 transition"
              >+</button>
            </div>
            <button
              data-remove="${item.product.id}"
              class="font-sans text-[10px] tracking-widest uppercase text-coffee-700/60 hover:text-red-600 transition"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    `
      )
      .join('')
  }

  // ---------- BOTÕES DENTRO DO CARRINHO ----------
  itemsContainer.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    
    const minusBtn = target.closest('[data-qty-minus]') as HTMLElement
    if (minusBtn) {
      const id = minusBtn.dataset.qtyMinus!
      const item = getCart().find((i) => i.product.id === id)
      if (item) updateQuantity(id, item.quantity - 1)
      return
    }

    const plusBtn = target.closest('[data-qty-plus]') as HTMLElement
    if (plusBtn) {
      const id = plusBtn.dataset.qtyPlus!
      const item = getCart().find((i) => i.product.id === id)
      if (item) updateQuantity(id, item.quantity + 1)
      return
    }

    const removeBtn = target.closest('[data-remove]') as HTMLElement
    if (removeBtn) {
      const id = removeBtn.dataset.remove!
      removeFromCart(id)
      return
    }
  })

  // ---------- CHECKOUT WHATSAPP ----------
  checkoutBtn.addEventListener('click', () => {
    sendOrderToWhatsApp()
  })

  // ---------- ATUALIZAÇÃO EM TEMPO REAL ----------
  window.addEventListener('cart:updated', () => {
    renderCart()
  })
}