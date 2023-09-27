import { Button } from 'react-bootstrap'
import PageTitle from '../../components/shared/PageTitle/PageTitle'
import { AiOutlinePlus } from 'react-icons/ai'
import DataTable from '../../components/shared/DataTable/DataTable'
import { formatValueReal } from '../../../utils/utils'
import CheckBox from '../../components/shared/CheckBox/CheckBox'
import { useState } from 'react'
import Modal from '../../components/shared/Modal/Modal'
import ModalAddDizimo from './Modals/ModalAddDizimo'

import { TbEdit, TbTrash } from 'react-icons/tb'
import ModalDeleteDizimo from './Modals/ModalDeleteDizimo'

const PageDizimo = () => {
  const [openModalAddDizmo, setOpenModalAddDizimo] = useState<boolean>(false)
  const [openModalEditDizimo, setOpenModalEditDizimo] = useState<boolean>(false)
  const [openModalDeleteDizmo, setOpenModalDeleteDizimo] = useState<boolean>(false)
  const [dizimoToEdit, setDizimoToEdit] = useState<any>(null)

  const HeaderDataTable = () => (
    <tr>
      <th><CheckBox /></th>
      <th>Membro</th>
      <th>Valor</th>
      <th>Data</th>
      <th>Ações</th>
    </tr>
  )

  const dizimo = [
    { id: 1, nome: 'Netinho delas', valor: 250, data: '07/09/2023' },
    { id: 1, nome: 'Tchesquin deles', valor: 150, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' },
    { id: 1, nome: 'Lucas veaco', valor: 15, data: '07/09/2023' }
  ]

  const BodyDataTable = () => (
    <>
      {dizimo.map((item, index) => (
        <tr key={index}>
          <td><CheckBox /></td>
          <td>{item.nome}</td>
          <td className='text-end'>{formatValueReal(item.valor)}</td>
          <td>{item.data}</td>
          <td>
            <div className='d-flex align-items-center gap-2'>
              <TbEdit className='icon icon-edit' onClick={() => { setOpenModalEditDizimo(true); setDizimoToEdit(item) }} />
              <TbTrash className='icon icon-delete' onClick={() => { setOpenModalDeleteDizimo(true) }} />
            </div>
          </td>
        </tr>
      ))}
    </>
  )

  return (
    <>
      <PageTitle title='Dizimos' path='Home - Dizimos' />
      <div className='content'>
        <div className='content-filter-actions mt-2 mb-4'>
          <div className='content-filter'>
            <input type="text" className='form-input' placeholder='Buscar usuário...' />
          </div>
          <div className='content-actions'>
            <Button variant="primary" onClick={() => { setOpenModalAddDizimo(true) }}><AiOutlinePlus className='icon' />Adicionar</Button>{' '}
          </div>
        </div>

        <DataTable
          headerTable={<HeaderDataTable />}
          bodyTable={<BodyDataTable />}
          totalItems={2}
          loading={false}
        />
      </div>

      <Modal
        modalTitle={!openModalAddDizmo ? 'Editar dizimo' : 'Adicionar dizimo'}
        show={openModalAddDizmo || openModalEditDizimo}
        onClose={() => { setOpenModalAddDizimo(false); setOpenModalEditDizimo(false) }}
      >
        <ModalAddDizimo dizimoToEdit={dizimoToEdit} />
      </Modal>

      <Modal
        modalTitle='Tem certeza que deseja excluir?'
        show={openModalDeleteDizmo}
        onClose={() => { setOpenModalDeleteDizimo(false) }}
      >
        <ModalDeleteDizimo />
      </Modal>
    </>
  )
}

export default PageDizimo
