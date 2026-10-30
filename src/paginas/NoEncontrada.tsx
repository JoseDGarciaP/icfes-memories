import { Link } from 'react-router-dom'
import { ui } from '../componentes/ui'

export function NoEncontrada() {
  return (
    <section className={ui.tarjeta}>
      <h1 className="mb-2 text-2xl font-bold">Página no encontrada</h1>
      <p className="mb-4 text-texto-suave">La dirección que abriste no existe.</p>
      <Link to="/" className={ui.botonSecundario}>
        Volver al inicio
      </Link>
    </section>
  )
}
