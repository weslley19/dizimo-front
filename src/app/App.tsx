import { BrowserRouter } from 'react-router-dom'

import Routers from '../routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/global.css'

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  )
}

export default App
