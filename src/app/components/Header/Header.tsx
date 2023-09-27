import { BsPersonCircle } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'
import { HiOutlineMoon } from 'react-icons/hi'

import { CiLogout, CiUser, CiLight } from 'react-icons/ci'

import './styles.css'
import { Link } from 'react-router-dom'
import { authRouter } from '../../../utils/utils'

const Header = () => {
  const handleShowProfile = () => {
    document.querySelector('.menu-profile')?.classList.toggle('d-none')
  }

  return (
    <div className='container-header'>
      <div className='container-header-main'>
        <div className='w-100 d-flex justify-content-between'>
          <div>
            <Link className='header-link' to={`${authRouter}/dashboard`}>Dashboard</Link>
            <Link className='header-link' to={`${authRouter}/dizimo`}>Dízimos</Link>
            <Link className='header-link' to={`${authRouter}/perfil`}>Configurações</Link>
          </div>
          <div>
            <IoNotificationsOutline className='icon me-2' color='rgba(44, 56, 74, 0.681)' />
            <HiOutlineMoon className='icon me-4' color='rgba(44, 56, 74, 0.681)' />
            <BsPersonCircle className='icon-30 curson-pointer' onClick={handleShowProfile} color='#3c4b64' />

            <div className='d-none menu-profile'>
              <div className='d-flex align-items-center gap-3 mb-4'>
                <div className='profile-photo'></div>
                <div className='profile-info'>
                  <p className='username'>Netinho delas</p>
                  <p className='email'>email@gmail.com</p>
                </div>
              </div>

              <hr />

              <nav>
                <ul>
                  <li><Link to={`${authRouter}/perfil`}><CiUser className='icon' />Perfil</Link></li>
                  <li><Link to=""><CiLight className='icon' />Tema</Link></li>
                  <li><Link to='/logout'><CiLogout className='icon' />Sair</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <hr className='m-0' />
      <div className='container-header-sub'>Home / Usuários</div>
    </div>
  )
}

export default Header
