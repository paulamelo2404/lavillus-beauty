// =====================================================
// PONTO DE ENTRADA — Lavillu's Beauty
// =====================================================

import './style.css'
import { Header, initHeader } from './components/layout/Header'

const app = document.querySelector<HTMLDivElement>('#app')!

// Monta o site
app.innerHTML = `
  ${Header()}

  <main class="pt-24">
    <section class="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 class="font-serif text-6xl text-gold-600">
        Lavillu's Beauty
      </h1>
      <p class="font-sans text-coffee-700">
        Site em construção ✨
      </p>
    </section>
  </main>
`

// Inicializa comportamentos
initHeader()