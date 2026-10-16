// =====================================================
// LÓGICA DO CARRINHO
// =====================================================

import type { CartItem } from '../types/cart'
import type { Product } from '../data/products'

const STORAGE_KEY = 'lavillus-cart'

export function getCart(): CartItem[] {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw) as CartItem[]
  } catch {
    return []
  }
}

function saveCart(cart: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  window.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }))
}

export function addToCart(product: Product, quantity: number = 1) {
  const cart = getCart()
  const existing = cart.find((item) => item.product.id === product.id)

  if (existing) {
    existing.quantity += quantity
  } else {
    cart.push({ product, quantity })
  }

  saveCart(cart)
}

export function removeFromCart(productId: string) {
  const cart = getCart().filter((item) => item.product.id !== productId)
  saveCart(cart)
}

export function updateQuantity(productId: string, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(productId)
    return
  }
  const cart = getCart()
  const item = cart.find((i) => i.product.id === productId)
  if (item) {
    item.quantity = quantity
    saveCart(cart)
  }
}

export function clearCart() {
  saveCart([])
}

export function getCartCount(): number {
  return getCart().reduce((sum, item) => sum + item.quantity, 0)
}