import { Button } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import PageTitle from '../../components/shared/PageTitle/PageTitle'

const Teste = () => {
  return (
    <>
      <PageTitle title='Teste' path='Home - Teste' />
      <div className='content'>
        <div className='content-filter-actions mt-2 mb-4'>
          <div className='content-filter'>
            <input type="text" className='form-input' placeholder='Buscar usuário...' />
          </div>
          <div className='content-actions'>
            <Button variant="primary"><AiOutlinePlus className='icon' />Adicionar</Button>{' '}
          </div>
        </div>
      </div>
    </>
  )
}

export default Teste
