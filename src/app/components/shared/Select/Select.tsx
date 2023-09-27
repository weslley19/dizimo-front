import { FormSelect } from 'react-bootstrap'

import { type ILabelAndValue } from '../../../../types/commom'

interface ISelect {
  options: ILabelAndValue[]
}

const Select = ({ options }: ISelect) => {
  return (
    <FormSelect>
      <option value=''>Selecione uma opção</option>
      {options.map((option: ILabelAndValue) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </FormSelect>
  )
}

export default Select
