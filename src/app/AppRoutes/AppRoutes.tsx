import { Routes, Route } from 'react-router-dom'

// import Main from '../components/Main/Main'
import Teste from '../pages/Teste/Teste'
import PageDizimo from '../pages/PageDizimo/PageDizimo'
import PageOffers from '../pages/PageOffers/PageOffers'
import PageDash from '../pages/PageDash/PageDash'
import PagePerfil from '../pages/PagePerfil/PagePerfil'

export default function AppRoutes () {
  return (
    <Routes>
      {/* <Route path='/dash' element={<Main />} /> */}
      <Route path='/teste' element={<Teste />} />
      <Route path='/dashboard' element={<PageDash />} />
      <Route path='/dizimo' element={<PageDizimo />} />
      <Route path='/ofertas' element={<PageOffers />} />
      <Route path='/perfil' element={<PagePerfil />} />
    </Routes>
  )
}
