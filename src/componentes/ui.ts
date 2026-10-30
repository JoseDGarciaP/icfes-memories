/**
 * Clases reutilizables de Tailwind para no repetirlas en cada página.
 * Uso: <div className={ui.tarjeta}>  o  className={`${ui.boton} w-full`}
 */
export const ui = {
  contenedor: 'mx-auto w-full max-w-5xl px-4',

  tarjeta: 'rounded-2xl border border-borde bg-superficie p-5 shadow-tarjeta',

  boton:
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primario px-5 ' +
    'font-semibold text-sobre-primario no-underline transition-colors hover:bg-primario-hover ' +
    'disabled:cursor-not-allowed disabled:opacity-50',

  botonSecundario:
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-borde px-5 ' +
    'font-semibold text-texto no-underline transition-colors hover:bg-superficie-2',

  /** Imágenes de preguntas: tienen fondo blanco, así que se ponen sobre blanco también en oscuro */
  imagenPregunta: 'my-3 block h-auto max-w-full rounded-lg bg-white p-2',
} as const
