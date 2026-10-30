import { Link } from 'react-router-dom'
import { contarPorArea, useBanco } from '../datos/banco'
import { INFO_AREA } from '../datos/areas'
import { AREAS } from '../datos/tipos'
import { ui } from '../componentes/ui'

export function Inicio() {
  const banco = useBanco()

  return (
    <>
      <section className="pt-6 pb-8">
        <h1 className="mb-2 text-[clamp(1.75rem,5vw,2.5rem)] leading-tight font-bold">Prepárate para el Saber 11</h1>
        <p className="mb-4 max-w-[52ch] text-[1.05rem] text-texto-suave">
          Practica con preguntas reales liberadas por el ICFES. Elige un área o arma un simulacro mixto.
        </p>
        <Link to="/simulacro/nuevo" className={ui.boton}>
          Nuevo simulacro
        </Link>
      </section>

      <h2 className="mb-3 text-lg font-bold">Practicar por área</h2>

      {banco.estado === 'cargando' && <p className="text-texto-suave">Cargando banco de preguntas…</p>}

      {banco.estado === 'error' && (
        <div className={ui.tarjeta}>
          <strong>No se pudo cargar el banco.</strong>
          <p className="text-texto-suave">
            {banco.mensaje}. Revisa que <code>public/data/preguntas.json</code> exista.
          </p>
        </div>
      )}

      {banco.estado === 'listo' && (
        <ul className="grid list-none grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3 p-0">
          {AREAS.map((area) => {
            const info = INFO_AREA[area]
            const n = contarPorArea(banco.preguntas)[area] ?? 0
            return (
              <li key={area}>
                <Link
                  to={`/simulacro/nuevo?area=${info.slug}`}
                  className={`${ui.tarjeta} ${info.bordeIzq} flex flex-col gap-1 border-l-[5px] text-texto no-underline transition-transform hover:-translate-y-0.5`}
                >
                  <span className="text-[1.05rem] font-semibold">{area}</span>
                  <span className="text-texto-suave">{n} preguntas</span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
