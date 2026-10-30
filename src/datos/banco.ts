import { useEffect, useState } from 'react'
import type { Area, Banco, Pregunta } from './tipos'

/** Carpeta pública donde van preguntas.json e imagenes/ */
export const RUTA_DATOS = '/data'

let cache: Promise<Pregunta[]> | null = null

/**
 * Carga el banco una sola vez y devuelve solo las preguntas usables.
 * Las marcadas "revisar" o "descartada" se dejan por fuera del simulacro.
 */
export function cargarBanco(): Promise<Pregunta[]> {
  if (!cache) {
    cache = fetch(`${RUTA_DATOS}/preguntas.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`No se pudo cargar el banco (HTTP ${r.status})`)
        return r.json() as Promise<Banco>
      })
      .then((b) => b.preguntas.filter((p) => p.estado === 'ok'))
      .catch((e) => {
        cache = null // permite reintentar
        throw e
      })
  }
  return cache
}

type EstadoCarga =
  | { estado: 'cargando' }
  | { estado: 'error'; mensaje: string }
  | { estado: 'listo'; preguntas: Pregunta[] }

export function useBanco(): EstadoCarga {
  const [s, setS] = useState<EstadoCarga>({ estado: 'cargando' })
  useEffect(() => {
    let vivo = true
    cargarBanco()
      .then((preguntas) => vivo && setS({ estado: 'listo', preguntas }))
      .catch((e: Error) => vivo && setS({ estado: 'error', mensaje: e.message }))
    return () => {
      vivo = false
    }
  }, [])
  return s
}

export function contarPorArea(preguntas: Pregunta[]): Record<Area, number> {
  const c = {} as Record<Area, number>
  for (const p of preguntas) c[p.area] = (c[p.area] ?? 0) + 1
  return c
}

/** Ruta pública de una imagen del banco ("imagenes/q4_enun_1.png") */
export const urlImagen = (ruta: string) => `${RUTA_DATOS}/${ruta}`
