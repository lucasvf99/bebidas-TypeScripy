import {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import Layout from './layouts/Layout'

const FavoritePage = lazy(() => import('./views/FavoritesPage'))
const GenerateAi = lazy(() => import('./views/GenerateAi'))

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}> 
                {/* colocando index definimos la pagina principal */}
                <Route path='/' element={<IndexPage/>} index/> 
                {/* // El componente FavoritePage se cargará de forma diferida, y mientras se carga, se puede mostrar un indicador de carga o un mensaje de espera. */}
                <Route path='/favoritos' element={
                    <Suspense fallback="Cargando..."> 
                        <FavoritePage/> 
                    </Suspense>
                }/>
                <Route path='/generate' element={
                    <Suspense >
                        <GenerateAi/>
                    </Suspense>
                }
                /> 
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
