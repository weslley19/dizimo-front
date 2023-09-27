import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { AiOutlinePlus } from 'react-icons/ai'

import './styles.css'
import PageTitle from '../shared/PageTitle/PageTitle'

const Main = () => {
  return (
    <>
      <PageTitle title='Usuários' path='Home - Usuários' />
      <div className='content'>
        <div className='content-filter-actions mt-2 mb-4'>
          <div className='content-filter'>
            <input type="text" className='form-input' placeholder='Buscar usuário...' />
          </div>
          <div className='content-actions'>
            <Button variant="primary"><AiOutlinePlus className='icon' />Adicionar</Button>{' '}
          </div>
        </div>
        <div className='content-table'>
          <Table striped hover>
            <thead>
              <tr>
                <th><Form.Check /></th>
                <th>ID</th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Data Início</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Form.Check /></td>
                <td>1</td>
                <td>Netinho delas</td>
                <td>Tesoureiro</td>
                <td>01/01/2000</td>
              </tr>
              <tr>
                <td><Form.Check /></td>
                <td>2</td>
                <td>Tchesco deles</td>
                <td>Cantor</td>
                <td>01/01/2000</td>
              </tr>
              <tr>
                <td><Form.Check /></td>
                <td>3</td>
                <td>Daniel veaco</td>
                <td>Mesário</td>
                <td>01/01/2000</td>
              </tr>
              <tr>
                <td><Form.Check /></td>
                <td>4</td>
                <td>Lucas rico</td>
                <td>Batera</td>
                <td>01/01/2000</td>
              </tr>
              <tr>
                <td><Form.Check /></td>
                <td>4</td>
                <td>Lucas rico</td>
                <td>Batera</td>
                <td>01/01/2000</td>
              </tr>
              <tr>
                <td><Form.Check /></td>
                <td>4</td>
                <td>Lucas rico</td>
                <td>Batera</td>
                <td>01/01/2000</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default Main
