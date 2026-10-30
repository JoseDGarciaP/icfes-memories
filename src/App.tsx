import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './componentes/Layout'
import { TemaProvider } from './tema/TemaProvider'
import { Inicio } from './paginas/Inicio'
import { ConfigurarSimulacro } from './paginas/ConfigurarSimulacro'
import { Simulacro } from './paginas/Simulacro'
import { Resultados } from './paginas/Resultados'
import { NoEncontrada } from './paginas/NoEncontrada'

export default function App() {
  return (
    <TemaProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="simulacro/nuevo" element={<ConfigurarSimulacro />} />
            <Route path="simulacro" element={<Simulacro />} />
            <Route path="resultados" element={<Resultados />} />
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TemaProvider>
  )
}
