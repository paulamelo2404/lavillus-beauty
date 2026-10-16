// =====================================================
// INTEGRAÇÃO COM WHATSAPP
// =====================================================

import type { CartItem } from '../types/cart'
import { getCart } from './cart'

const WHATSAPP_NUMBER = '5516981404969'

export function sendOrderToWhatsApp() {
  const cart = getCart()

  if (cart.length === 0) {
    alert('Seu carrinho está vazio.')
    return
  }

  const itemsList = cart
    .map((item: CartItem) => `• ${item.quantity}x ${item.product.name} (${item.product.size})`)
    .join('\n')

  const message = `Hello! I would like more information about these products:\n\n${itemsList}\n\nCould you send me prices and conditions?`

  const encoded = encodeURIComponent(message)
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`

  window.open(url, '_blank')
}