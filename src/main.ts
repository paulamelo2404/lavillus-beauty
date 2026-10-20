// =====================================================
// PONTO DE ENTRADA — Lavillu's Beauty
// =====================================================

import './style.css'
import { Header, initHeader } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { CartDrawer, initCartDrawer } from './components/layout/CartDrawer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Technology } from './components/sections/Technology'
import { Collection, initCollection } from './components/sections/Collection'
import { WhyUs } from './components/sections/WhyUs'
import { Distributor } from './components/sections/Distributor'
import { International } from './components/sections/International'
import { Contact } from './components/sections/Contact'
import { addToCart } from './utils/cart'
import { products } from './data/products'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  ${Header()}

  <main>
    ${Hero()}
    ${About()}
    ${Technology()}
    ${Collection()}
    ${WhyUs()}
    ${Distributor()}
    ${International()}
    ${Contact()}
  </main>

  ${Footer()}
  ${CartDrawer()}
`

initHeader()
initCollection()
initCartDrawer()

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement
  const addButton = target.closest('[data-add-to-cart]') as HTMLElement | null

  if (!addButton) return

  const productId = addButton.dataset.addToCart
  if (!productId) return

  const product = products.find((p) => p.id === productId)
  if (!product) return

  addToCart(product, 1)

  const originalText = addButton.textContent
  addButton.textContent = 'Added ✓'
  addButton.classList.add('bg-gold-700')

  setTimeout(() => {
    addButton.textContent = originalText
    addButton.classList.remove('bg-gold-700')
  }, 1500)
})