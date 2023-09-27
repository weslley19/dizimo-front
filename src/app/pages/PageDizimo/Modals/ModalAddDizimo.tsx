import Form from 'react-bootstrap/Form'
import Select from '../../../components/shared/Select/Select'
import { type ILabelAndValue } from '../../../../types/commom'

interface IModalAddDizimo {
  dizimoToEdit: any
}

const ModalAddDizimo = ({ dizimoToEdit }: IModalAddDizimo) => {
  const options = [
    { label: 'Netinho delas', value: '1' },
    { label: 'Tchesquin deles', value: '2' },
    { label: 'Lucas veaco', value: '3' }
  ] as ILabelAndValue[]

  return (
    <Form>
      <div className='row'>
        <div className='col-md-12'>
          <Form.Group className='mb-3'>
            <Form.Label>Membro</Form.Label>
            <Select options={options} />
          </Form.Group>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <Form.Group className='mb-3'>
            <Form.Label>Valor do dízimo</Form.Label>
            <Form.Control type='text' placeholder='Digite o valor...' />
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className='mb-3'>
            <Form.Label>Data</Form.Label>
            <Form.Control type='date' />
          </Form.Group>
        </div>
      </div>
    </Form>
  )
}

export default ModalAddDizimo
