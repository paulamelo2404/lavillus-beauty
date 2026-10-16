// =====================================================
// LINHAS DE PRODUTO — Lavillu's Beauty
// =====================================================
// Cada linha representa uma família de produtos com
// identidade visual própria (cor, capa, descrição).
// =====================================================

export type LineId =
  | 'soft-collagen'
  | 'sublime-blond'
  | 'coffee-intense'
  | 'texture-collagen'
  | 'daily-spa'
  | 'home-care'

export interface Line {
  id: LineId
  name: string           // Nome exibido
  tagline: string        // Frase curta da linha
  description: string    // Descrição longa
  color: string          // Classe Tailwind da cor principal da linha
  colorHex: string       // Cor em hexadecimal (pra usar em estilos dinâmicos)
  cover: string          // Caminho da imagem de capa (em /public/images/lines/)
}

export const lines: Line[] = [
  {
    id: 'soft-collagen',
    name: 'Soft Collagen',
    tagline: 'Advanced Anti-Frizz Technology',
    description:
      'Professional treatment for hair alignment, volume reduction and frizz control. Enriched with Almond Oil, Hyaluronic Acid and Collagen for a silky, disciplined finish.',
    color: 'rose-soft',
    colorHex: '#E8B4B8',
    cover: '/images/lines/soft-collagen-cover.jpg',
  },
  {
    id: 'sublime-blond',
    name: 'Sublime Blond',
    tagline: 'Advanced Anti-Frizz Technology',
    description:
      'Specially developed for blonde, bleached or chemically damaged hair. Protects color, reconstructs the fiber and fights yellowing with Tamarind Extract, Shea Butter and Argan Oil.',
    color: 'royal-mid',
    colorHex: '#3E6FB0',
    cover: '/images/lines/sublime-blond-cover.jpg',
  },
  {
    id: 'coffee-intense',
    name: 'Coffee Intense',
    tagline: 'Advanced Anti-Frizz Technology',
    description:
      'Ultimate shine, deep fiber reconstruction and a velvety touch. Formulated with Hydro Collagen, Hyaluronic Acid, Coffee Extract and Vitamin E.',
    color: 'coffee-700',
    colorHex: '#4A3728',
    cover: '/images/lines/coffee-intense-cover.jpg',
  },
  {
    id: 'texture-collagen',
    name: 'Texture Collagen',
    tagline: 'Advanced Hair Alignment System',
    description:
      'Cosmetic treatment for fiber alignment, mass replenishment and intense shine. Collagen Complex with Almond Oil, Hyaluronic Acid and Collagen.',
    color: 'gold-500',
    colorHex: '#B8903A',
    cover: '/images/lines/texture-collagen-cover.jpg',
  },
  {
    id: 'daily-spa',
    name: 'Daily Spa',
    tagline: 'Daily Care, Visible Results',
    description:
      'Daily maintenance line with Collagen, Amino Acids and Noble Extracts. Deep hydration, shine and strength for every hair type.',
    color: 'gold-600',
    colorHex: '#9A7530',
    cover: '/images/lines/daily-spa-cover.jpg',
  },
  {
    id: 'home-care',
    name: 'Home Care',
    tagline: 'Professional Care at Home',
    description:
      'High-performance 300ml formulas developed to strengthen, hydrate and reveal healthier, more beautiful hair — salon quality at home.',
    color: 'coffee-800',
    colorHex: '#3A2A1E',
    cover: '/images/lines/home-care-cover.jpg',
  },
]