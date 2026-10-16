// =====================================================
// PRODUTOS — Lavillu's Beauty
// =====================================================
// Cada produto pertence a uma linha (ver lines.ts).
// Sem preços — o cliente pergunta no WhatsApp.
// =====================================================

import type { LineId } from './lines'

export interface Product {
  id: string              // identificador único (ex: 'soft-collagen-1000')
  name: string            // nome exibido
  line: LineId            // linha a que pertence
  size: string            // tamanho (ex: '1000ml', '300ml', '1000g', '60ml')
  image: string           // caminho da imagem
  description: string     // descrição curta
  actives: string[]       // ativos principais
  benefits: string[]      // benefícios (frases curtas)
}

export const products: Product[] = [

  // =========================
  // SOFT COLLAGEN
  // =========================
  {
    id: 'soft-collagen-1000',
    name: 'Soft Collagen',
    line: 'soft-collagen',
    size: '1000ml',
    image: '/images/products/soft-collagen-1000ml.png',
    description:
      'Advanced Anti-Frizz treatment for alignment, volume reduction and frizz control.',
    actives: ['Almond Oil', 'Hyaluronic Acid', 'Collagen'],
    benefits: ['Ultimate Shine', 'Perfect Fiber Alignment', 'Balanced Softness'],
  },
  {
    id: 'soft-collagen-300',
    name: 'Soft Collagen',
    line: 'soft-collagen',
    size: '300ml',
    image: '/images/products/soft-collagen-300ml.png',
    description:
      'Home care version — enhances elasticity and firmness for healthier hair.',
    actives: ['Almond Oil', 'Hyaluronic Acid', 'Collagen'],
    benefits: ['Elasticity', 'Firmness', 'Healthier Hair'],
  },

  // =========================
  // SUBLIME BLOND
  // =========================
  {
    id: 'sublime-blond-1000',
    name: 'Sublime Blond',
    line: 'sublime-blond',
    size: '1000ml',
    image: '/images/products/sublime-blond-1000ml.png',
    description:
      'Professional treatment for blonde, bleached or chemically damaged hair. Color protection and anti-yellowing action.',
    actives: ['Tamarind Extract', 'Shea Butter', 'Argan Oil'],
    benefits: ['Blonde Protection', 'Fiber Reconstruction', 'Anti-Yellowing'],
  },

  // =========================
  // COFFEE INTENSE
  // =========================
  {
    id: 'coffee-intense-1000',
    name: 'Coffee Intense',
    line: 'coffee-intense',
    size: '1000ml',
    image: '/images/products/coffee-intense-1000ml.png',
    description:
      'Ultimate shine, deep fiber reconstruction and a velvety touch for all hair types.',
    actives: ['Hydro Collagen', 'Hyaluronic Acid', 'Coffee Extract', 'Vitamin E'],
    benefits: ['Intense Shine', 'Deep Repair', 'Velvety Touch'],
  },

  // =========================
  // TEXTURE COLLAGEN
  // =========================
  {
    id: 'texture-collagen-1000',
    name: 'Texture Collagen',
    line: 'texture-collagen',
    size: '1000g',
    image: '/images/products/texture-collagen-1000g.png',
    description:
      'Cosmetic treatment for fiber alignment, mass replenishment and intense shine.',
    actives: ['Almond Oil', 'Hyaluronic Acid', 'Collagen'],
    benefits: ['Smooth', 'Repair', 'Shine'],
  },

  // =========================
  // DAILY SPA
  // =========================
  {
    id: 'daily-spa-shampoo',
    name: 'Daily Spa Shampoo',
    line: 'daily-spa',
    size: '300ml',
    image: '/images/products/daily-spa-shampoo.png',
    description:
      'Professional shampoo that cleanses gently and restores the natural balance of the hair.',
    actives: ['Collagen', 'Amino Acids', 'Noble Extracts'],
    benefits: ['Deep Hydration', 'Shine & Softness', 'Strength & Repair'],
  },
  {
    id: 'daily-spa-conditioner',
    name: 'Daily Spa Conditioner',
    line: 'daily-spa',
    size: '300ml',
    image: '/images/products/daily-spa-conditioner.png',
    description:
      'Professional conditioner that nourishes, detangles and strengthens the hair.',
    actives: ['Collagen', 'Amino Acids', 'Noble Extracts'],
    benefits: ['Deep Hydration', 'Shine & Softness', 'Strength & Repair'],
  },
  {
    id: 'daily-spa-mask',
    name: 'Daily Spa Hair Mask',
    line: 'daily-spa',
    size: '300ml',
    image: '/images/products/daily-spa-mask.png',
    description:
      'Deep repair and intense hydration for healthier, stronger hair every day.',
    actives: ['Collagen', 'Amino Acids', 'Noble Extracts'],
    benefits: ['Deep Repair', 'Intense Hydration', 'Shine'],
  },
  {
    id: 'daily-spa-hair-mist',
    name: 'Daily Spa Hair Mist',
    line: 'daily-spa',
    size: '200ml',
    image: '/images/products/daily-spa-hair-mist.png',
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
    image: '/images/products/daily-spa-ph-stabilizer.png',
    description:
      'Balances pH and restores hair. Ideal for damaged, dry or chemically treated hair.',
    actives: ['Conditioning Agents', 'Humectants'],
    benefits: ['Balances pH', 'Reduces Split Ends', 'Hydration & Shine'],
  },
  {
    id: 'daily-spa-hair-parfum',
    name: 'Daily Spa Hair Parfum',
    line: 'daily-spa',
    size: '60ml',
    image: '/images/products/daily-spa-hair-parfum.png',
    description:
      'Fruity Flower hair perfume for a soft, long-lasting fragrance.',
    actives: ['Fruity Flower Essence'],
    benefits: ['Long-lasting Fragrance', 'Soft Finish'],
  },
  {
    id: 'daily-spa-black-plum',
    name: 'Daily Spa Black Plum & Argan Oil',
    line: 'daily-spa',
    size: '60ml',
    image: '/images/products/daily-spa-black-plum.png',
    description:
      'Soft finishing with Black Plum and Argan Oil for a silky, smooth result.',
    actives: ['Black Plum', 'Argan Oil'],
    benefits: ['Soft Finishing', 'Silky Touch'],
  },

  // =========================
  // HOME CARE
  // =========================
  {
    id: 'home-care-soft-intense',
    name: 'Soft Intense',
    line: 'home-care',
    size: '300ml',
    image: '/images/products/soft-intense-300ml.png',
    description:
      'Stimulates growth and strengthens the hair fiber.',
    actives: ['Growth Complex'],
    benefits: ['Stimulates Growth', 'Strengthens Fiber'],
  },
  {
    id: 'home-care-hyaluronic',
    name: 'Hyaluronic',
    line: 'home-care',
    size: '300ml',
    image: '/images/products/hyaluronic-300ml.png',
    description:
      'Deep hydration and intense shine for your hair.',
    actives: ['Hyaluronic Acid'],
    benefits: ['Deep Hydration', 'Intense Shine'],
  },
]