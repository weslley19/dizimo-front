/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from 'react-bootstrap'

import AppRoutes from '../../AppRoutes/AppRoutes'
import Aside from '../../components/Aside/Aside'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import './styles.css'

const PageMain = () => {
  return (
    <div className='App'>
      <div className='row mx-0'>
        <div className='col-md-2 col-sm-12 p-0' style={{ width: '16rem' }}>
          <Aside />
        </div>
        <div className='col-md-10 col-sm-12 p-0 scrollbar' style={{ width: 'calc(100vw - 16rem)', height: '100vh', overflow: 'hidden auto' }}>
          <Header />
          <div className='container-main'>
            <Container>
              <AppRoutes />
            </Container>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PageMain
