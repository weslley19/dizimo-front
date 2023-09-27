import { Routes, Route } from 'react-router-dom'

import PageLogin from './app/pages/Login/Login'
import PageMain from './app/pages/PageMain/PageMain'

import { authRouter } from './utils/utils'

export default function Routers () {
  return (
    <Routes>
      <Route path='/' element={<h1>Rota /</h1>} />
      <Route path='/login' element={<PageLogin />} />
      <Route path='/logout' element={<PageLogin />} />
      <Route path={`${authRouter}/*`} element={<PageMain />} />

      <Route path='*' element={<h1>Rota não encontrada</h1>} />
    </Routes>
  )
}
