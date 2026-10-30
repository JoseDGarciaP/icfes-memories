import type { Area } from './tipos'

/**
 * Datos visuales de cada área.
 * Las clases de Tailwind van escritas completas (no armadas con plantillas)
 * para que Tailwind las detecte al compilar.
 */
export const INFO_AREA: Record<Area, { slug: string; corto: string; bordeIzq: string; texto: string; fondo: string }> = {
  'Lectura Crítica': {
    slug: 'lectura-critica',
    corto: 'Lectura',
    bordeIzq: 'border-l-area-lectura',
    texto: 'text-area-lectura',
    fondo: 'bg-area-lectura',
  },
  Matemáticas: {
    slug: 'matematicas',
    corto: 'Matemáticas',
    bordeIzq: 'border-l-area-matematicas',
    texto: 'text-area-matematicas',
    fondo: 'bg-area-matematicas',
  },
  'Sociales y Ciudadanas': {
    slug: 'sociales',
    corto: 'Sociales',
    bordeIzq: 'border-l-area-sociales',
    texto: 'text-area-sociales',
    fondo: 'bg-area-sociales',
  },
  'Ciencias Naturales': {
    slug: 'naturales',
    corto: 'Naturales',
    bordeIzq: 'border-l-area-naturales',
    texto: 'text-area-naturales',
    fondo: 'bg-area-naturales',
  },
  Inglés: {
    slug: 'ingles',
    corto: 'Inglés',
    bordeIzq: 'border-l-area-ingles',
    texto: 'text-area-ingles',
    fondo: 'bg-area-ingles',
  },
}

export function areaDesdeSlug(slug: string | undefined): Area | null {
  const e = Object.entries(INFO_AREA).find(([, v]) => v.slug === slug)
  return e ? (e[0] as Area) : null
}
