// Debe coincidir con lo que genera limpiar_banco.py (preguntas.json)

export const AREAS = [
  'Lectura Crítica',
  'Matemáticas',
  'Sociales y Ciudadanas',
  'Ciencias Naturales',
  'Inglés',
] as const

export type Area = (typeof AREAS)[number]

export type Letra = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

export interface Opcion {
  letra: Letra
  /** null cuando las opciones vienen dentro de una imagen */
  texto: string | null
}

export type EstadoPregunta = 'ok' | 'revisar' | 'descartada'

export interface Pregunta {
  id: number
  area: Area
  subarea: string | null
  anio: number | null
  fuente: string | null
  cuadernillo: string | null
  carpeta_origen: string | null
  contexto_id: string | null
  enunciado: string | null
  pregunta: string | null
  imagenes_enunciado: string[]
  imagenes_opciones: string[]
  opciones: Opcion[]
  respuesta: Letra
  drive_url: string | null
  estado: EstadoPregunta
  problemas: string[]
}

export interface Banco {
  version: number
  total: number
  preguntas: Pregunta[]
}
