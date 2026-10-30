import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type PreferenciaTema = 'claro' | 'oscuro' | 'sistema'
export type TemaEfectivo = 'claro' | 'oscuro'

const CLAVE = 'icfes-tema'

interface ContextoTema {
  preferencia: PreferenciaTema
  efectivo: TemaEfectivo
  setPreferencia: (p: PreferenciaTema) => void
}

const Ctx = createContext<ContextoTema | null>(null)

function leerPreferencia(): PreferenciaTema {
  try {
    const v = localStorage.getItem(CLAVE)
    if (v === 'claro' || v === 'oscuro') return v
  } catch {
    /* almacenamiento no disponible: se usa el sistema */
  }
  return 'sistema'
}

const consultaOscuro = () => window.matchMedia('(prefers-color-scheme: dark)')

export function TemaProvider({ children }: { children: ReactNode }) {
  const [preferencia, setPreferenciaState] = useState<PreferenciaTema>(leerPreferencia)
  const [sistemaOscuro, setSistemaOscuro] = useState(() => consultaOscuro().matches)

  // Sigue los cambios del tema del sistema (p. ej. modo oscuro automático al anochecer)
  useEffect(() => {
    const mq = consultaOscuro()
    const alCambiar = (e: MediaQueryListEvent) => setSistemaOscuro(e.matches)
    mq.addEventListener('change', alCambiar)
    return () => mq.removeEventListener('change', alCambiar)
  }, [])

  const efectivo: TemaEfectivo =
    preferencia === 'sistema' ? (sistemaOscuro ? 'oscuro' : 'claro') : preferencia

  useEffect(() => {
    const raiz = document.documentElement
    if (preferencia === 'sistema') delete raiz.dataset.tema
    else raiz.dataset.tema = preferencia

    // Barra de estado del celular acorde al tema
    const color = efectivo === 'oscuro' ? '#0f1320' : '#f6f7fb'
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', color))
  }, [preferencia, efectivo])

  const setPreferencia = (p: PreferenciaTema) => {
    setPreferenciaState(p)
    try {
      if (p === 'sistema') localStorage.removeItem(CLAVE)
      else localStorage.setItem(CLAVE, p)
    } catch {
      /* sin almacenamiento: el cambio dura solo esta sesión */
    }
  }

  return <Ctx.Provider value={{ preferencia, efectivo, setPreferencia }}>{children}</Ctx.Provider>
}

export function useTema() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useTema debe usarse dentro de <TemaProvider>')
  return ctx
}
