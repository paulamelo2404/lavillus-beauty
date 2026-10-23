// =====================================================
// PRODUTOS — Lavillu's Beauty
// =====================================================

import type { LineId } from './lines'

export interface Product {
  id: string
  name: string
  line: LineId
  size: string
  image: string
  description: string
  actives: string[]
  benefits: string[]
}

export const products: Product[] = [
  // SOFT COLLAGEN
  {
    id: 'soft-collagen-1000',
    name: 'Soft Collagen',
    line: 'soft-collagen',
    size: '1000ml',
    image: '/images/products/soft-collagen-1000ml.jpg',
    description:
      'Advanced Anti-Frizz treatment for alignment, volume reduction and frizz control.',
    actives: ['Almond Oil', 'Hyaluronic Acid', 'Collagen'],
    benefits: ['Ultimate Shine', 'Perfect Fiber Alignment', 'Balanced Softness'],
  },

  // SUBLIME BLOND
  {
    id: 'sublime-blond-1000',
    name: 'Sublime Blond',
    line: 'sublime-blond',
    size: '1000ml',
    image: '/images/products/sublime-blond-1000ml.jpg',
    description:
      'Professional treatment for blonde, bleached or chemically damaged hair. Color protection and anti-yellowing action.',
    actives: ['Tamarind Extract', 'Shea Butter', 'Argan Oil'],
    benefits: ['Blonde Protection', 'Fiber Reconstruction', 'Anti-Yellowing'],
  },

  // COFFEE INTENSE
  {
    id: 'coffee-intense-1000',
    name: 'Coffee Intense',
    line: 'coffee-intense',
    size: '1000ml',
    image: '/images/products/coffee-intense-1000ml.jpg',
    description:
      'Ultimate shine, deep fiber reconstruction and a velvety touch for all hair types.',
    actives: ['Hydro Collagen', 'Hyaluronic Acid', 'Coffee Extract', 'Vitamin E'],
    benefits: ['Intense Shine', 'Deep Repair', 'Velvety Touch'],
  },

  // TEXTURE COLLAGEN
  {
    id: 'texture-collagen-1000',
    name: 'Texture Collagen',
    line: 'texture-collagen',
    size: '1000g',
    image: '/images/products/texture-collagen-1000g.jpg',
    description:
      'Cosmetic treatment for fiber alignment, mass replenishment and intense shine.',
    actives: ['Almond Oil', 'Hyaluronic Acid', 'Collagen'],
    benefits: ['Smooth', 'Repair', 'Shine'],
  },

  // DAILY SPA
  {
    id: 'daily-spa-kit',
    name: 'Daily Spa Kit',
    line: 'daily-spa',
    size: 'Shampoo + Conditioner + Mask',
    image: '/images/products/daily-spa-kit.jpg',
    description:
      'Complete professional home care kit with Collagen, Amino Acids and Noble Extracts. Deep hydration, shine and strength.',
    actives: ['Collagen', 'Amino Acids', 'Noble Extracts'],
    benefits: ['Deep Hydration', 'Shine & Softness', 'Strength & Repair'],
  },
  {
    id: 'daily-spa-hair-mist',
    name: 'Daily Spa Hair Mist',
    line: 'daily-spa',
    size: '200ml',
    image: '/images/products/daily-spa-hair-mist.jpg',
    description:
      'Daily mist with Hyaluronic Acid, Apple Vinegar and Biotin. Nourishes, protects and adds shine.',
    actives: ['Hyaluronic Acid', 'Apple Vinegar', 'Biotin'],
    benefits: ['Deeply Nourishes', 'Adds Shine & Softness', 'Protects & Balances'],
  },
  {
    id: 'daily-spa-ph-stabilizer',
    name: 'Daily Spa pH Stabilizer',
    line: 'daily-spa',
    size: '300ml',
    image: '/images/products/daily-spa-ph-stabilizer.jpg',
    description:
      'Balances pH and restores hair. Ideal for damaged, dry or chemically treated hair.',
    actives: ['Conditioning Agents', 'Humectants'],
    benefits: ['Balances pH', 'Reduces Split Ends', 'Hydration & Shine'],
  },
  {
    id: 'daily-spa-finishing-kit',
    name: 'Daily Spa Finishing Kit',
    line: 'daily-spa',
    size: 'Hair Parfum + Black Plum & Argan Oil',
    image: '/images/products/daily-spa-finishing-kit.jpg',
    description:
      'The perfect finishing duo. Hair Parfum with Fruity Flower essence and Black Plum & Argan Oil for a silky, long-lasting finish.',
    actives: ['Fruity Flower', 'Black Plum', 'Argan Oil'],
    benefits: ['Long-lasting Fragrance', 'Soft Finishing', 'Silky Touch'],
  },
]