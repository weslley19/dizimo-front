import { Button } from 'react-bootstrap'
import PageTitle from '../../components/shared/PageTitle/PageTitle'
import { AiOutlinePlus } from 'react-icons/ai'

const PageOffers = () => {
  return (
    <>
      <PageTitle title='Ofertas' path='Home - Ofertas' />
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

export default PageOffers
