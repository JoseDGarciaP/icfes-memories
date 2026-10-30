import { Link, Outlet } from 'react-router-dom'
import { SelectorTema } from '../tema/SelectorTema'
import { ui } from './ui'

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10 border-b border-borde bg-fondo/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <div className={`${ui.contenedor} flex h-15 items-center justify-between`}>
          <Link to="/" className="inline-flex items-center gap-2.5 text-[1.05rem] font-bold text-texto no-underline">
            <img src="/favicon.svg" alt="" width={28} height={28} />
            <span>ICFES Memories</span>
          </Link>
          <SelectorTema />
        </div>
      </header>

      <main className={`${ui.contenedor} flex-1 pt-6 pb-8`}>
        <Outlet />
      </main>

      <footer className={`${ui.contenedor} pb-[calc(20px+env(safe-area-inset-bottom))] text-center text-sm text-texto-suave`}>
        Preguntas liberadas por el ICFES. Uso educativo.
      </footer>
    </div>
  )
}
