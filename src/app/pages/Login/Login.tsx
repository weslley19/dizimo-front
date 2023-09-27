import Form from 'react-bootstrap/Form'

import Logo from '../../../assets/images/logo.png'

import './styles.css'
import { Link } from 'react-router-dom'

const PageLogin = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 container-fluid container-login'>
      <div className='w-75 d-flex justify-content-center align-items-center mw-1000'>
        <div className='w-50 d-flex flex-column gap-5'>
          <img src={Logo} alt="Logo" title='Logo' width={200} />
          <h1 className='action-login'>Faça login na plataforma</h1>
        </div>
        <div className='w-50'>
          <Form className='form'>
            <div className='container-input mb-3'>
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>

            <div className='container-input mb-5'>
              <label htmlFor="">Senha</label>
              <input type="email" />
              <a href="#" className='forget-password'>Esqueci minha senha</a>
            </div>

            <button type='button' className='btn-login'><Link to="/auth/dash">ENTRAR</Link></button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default PageLogin
