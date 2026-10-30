import { useSearchParams } from 'react-router-dom'
import { areaDesdeSlug } from '../datos/areas'
import { ui } from '../componentes/ui'

/**
 * Pendiente: elegir área (o mixto), número de preguntas y tiempo límite,
 * y luego navegar a /simulacro con esa configuración.
 */
export function ConfigurarSimulacro() {
  const [params] = useSearchParams()
  const area = areaDesdeSlug(params.get('area') ?? undefined)

  return (
    <section className={ui.tarjeta}>
      <h1 className="mb-2 text-2xl font-bold">Nuevo simulacro</h1>
      <p className="mb-2 text-texto-suave">
        {area ? `Área seleccionada: ${area}.` : 'Simulacro mixto (todas las áreas).'}
      </p>
      <p className="text-texto-suave">Aquí irán las opciones: número de preguntas, cronómetro y orden aleatorio.</p>
    </section>
  )
}
