// =====================================================
// PONTO DE ENTRADA — Lavillu's Beauty
// =====================================================

import './style.css'
import { Header, initHeader } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  ${Header()}

  <main>
    ${Hero()}
    ${About()}
  </main>
`

initHeader()