import type { ReactNode } from 'react'
import { useTema, type PreferenciaTema } from './TemaProvider'

const OPCIONES: { valor: PreferenciaTema; etiqueta: string; icono: ReactNode }[] = [
  {
    valor: 'claro',
    etiqueta: 'Claro',
    icono: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
  },
  {
    valor: 'sistema',
    etiqueta: 'Sistema',
    icono: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
  {
    valor: 'oscuro',
    etiqueta: 'Oscuro',
    icono: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />,
  },
]

export function SelectorTema() {
  const { preferencia, setPreferencia } = useTema()

  return (
    <div
      role="radiogroup"
      aria-label="Tema de la aplicación"
      className="inline-flex gap-0.5 rounded-full border border-borde bg-superficie-2 p-[3px]"
    >
      {OPCIONES.map((o) => {
        const activo = preferencia === o.valor
        return (
          <button
            key={o.valor}
            type="button"
            role="radio"
            aria-checked={activo}
            aria-label={o.etiqueta}
            title={o.etiqueta}
            onClick={() => setPreferencia(o.valor)}
            className={
              'grid size-[34px] cursor-pointer place-items-center rounded-full transition-colors ' +
              (activo
                ? 'bg-superficie text-primario shadow-tarjeta'
                : 'bg-transparent text-texto-suave hover:text-texto')
            }
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-[18px] fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
            >
              {o.icono}
            </svg>
          </button>
        )
      })}
    </div>
  )
}
