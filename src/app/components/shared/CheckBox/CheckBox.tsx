import { FormCheck } from 'react-bootstrap'

import './styles.css'

interface IChechBox {
  type?: 'checkbox' | 'radio' | 'switch'
}

const CheckBox = ({ type = 'checkbox' }: IChechBox) => {
  return (
    <FormCheck type={type} />
  )
}

export default CheckBox
