import { useState } from 'react'
import { Link } from 'react-router-dom'

import Modal from '../shared/Modal/Modal'

import { BsCashStack } from 'react-icons/bs'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { AiOutlineProject, AiOutlineDashboard } from 'react-icons/ai'
import { LuChurch } from 'react-icons/lu'
import { BiMoneyWithdraw, BiSolidContact } from 'react-icons/bi'

import Logo from '../../../assets/images/logo.png'

import './styles.css'
import { authRouter } from '../../../utils/utils'

const Aside = () => {
  const [openModalLogout, setOpenModalLogout] = useState<boolean>(false)

  return (
    <div className="container-aside">
      <div className='logo'>
        <img src={Logo} alt="Logo" title='Logo' width={140} />
      </div>
      <div className='content-nav scrollbar'>
        <nav>
          <ul>
            <div>
              <li><AiOutlineDashboard className='icon' /><Link to={`${authRouter}/dashboard`}>Dashboard</Link></li>
            </div>
            <div>
              <li className='nav-title'>Lançamentos</li>
              <li><LuChurch className='icon' /><Link to={`${authRouter}/dizimo`}>Dizimo</Link></li>
              <li><BsCashStack className='icon' /><Link to={`${authRouter}/ofertas`}>Ofertas</Link></li>
            </div>
            <div>
              <li className='nav-title'>Cadastros</li>
              <li><HiOutlineUserGroup className='icon' />Membros</li>
              <li><AiOutlineProject className='icon' />Projetos</li>
              <li><BiMoneyWithdraw className='icon' />Contas</li>
            </div>
            <div>
              <li className='nav-title'>Configurações</li>
              <li className='active'><BiSolidContact className='icon' /><Link to={`${authRouter}/perfil`}>Perfil</Link></li>
            </div>
          </ul>
        </nav>
      </div>
      <div className='content-logout' onClick={() => { setOpenModalLogout(true) }}>Sair</div>

      <Modal
        modalTitle='Tem certeza que deseja sair?'
        show={openModalLogout}
        onClose={() => { setOpenModalLogout(false) }}
      >
        Teste
      </Modal>
    </div>
  )
}

export default Aside
