import { Table } from 'react-bootstrap'

import './styles.css'

interface IDataTable {
  headerTable: JSX.Element
  bodyTable: JSX.Element
  totalItems: number
  loading: boolean
}

const DataTable = ({ headerTable, bodyTable, totalItems, loading }: IDataTable) => {
  return (
    <Table striped hover>
      <thead>{headerTable}</thead>
      <tbody>{bodyTable}</tbody>
    </Table>
  )
}

export default DataTable
