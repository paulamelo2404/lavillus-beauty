// =====================================================
// LINHAS DE PRODUTO — Lavillu's Beauty
// =====================================================

export type LineId =
  | 'soft-collagen'
  | 'sublime-blond'
  | 'coffee-intense'
  | 'texture-collagen'
  | 'daily-spa'

export interface Line {
  id: LineId
  name: string
  tagline: string
  description: string
  color: string
  colorHex: string
  cover: string
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
]