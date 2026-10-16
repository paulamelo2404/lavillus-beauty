import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="min-h-screen bg-cream-100 flex flex-col items-center justify-center gap-6">
    <h1 class="font-serif text-6xl text-gold-600">
      Lavillu's Beauty
    </h1>
    <p class="font-sans text-coffee-700">
      Paleta e fontes configuradas ✨
    </p>
    <div class="flex gap-3">
      <div class="w-12 h-12 rounded-full bg-gold-500"></div>
      <div class="w-12 h-12 rounded-full bg-rose-soft"></div>
      <div class="w-12 h-12 rounded-full bg-royal-mid"></div>
      <div class="w-12 h-12 rounded-full bg-coffee-800"></div>
    </div>
  </div>
`

console.log("Lavillu's Beauty — iniciado")