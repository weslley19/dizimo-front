import { Modal as ReactModal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

interface IModal {
  modalTitle: string
  children: React.ReactNode
  size?: 'sm' | 'lg' | 'xl'
  show: boolean
  onClose: () => void
  onConfirm?: () => void
}

const Modal = ({ modalTitle, children, size, show, onClose, onConfirm }: IModal) => {
  return (
    <ReactModal size={size} show={show} centered onHide={onClose} backdrop='static'>
      <ReactModal.Header closeButton>
        <ReactModal.Title>
          <h2 className='fs-5'>{modalTitle}</h2>
        </ReactModal.Title>
      </ReactModal.Header>
      <ReactModal.Body>{children}</ReactModal.Body>
      <ReactModal.Footer>
        <Button variant='danger' onClick={onClose}>Cancelar</Button>
        <Button onClick={onConfirm}>Confirmar</Button>
      </ReactModal.Footer>
    </ReactModal>
  )
}

export default Modal
