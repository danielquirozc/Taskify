import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'

export function useModal () {
  const { modal, setModal } = useContext(ModalContext)

  const showModal = (type, data = null) => {
    setModal({ isOpen: true, modalType: type, data })
  }

  const closeModal = () => {
    setModal({ isOpen: false, modalType: '' })
  }

  return {
    isOpen: modal.isOpen,
    showModal,
    closeModal,
    modalType: modal.modalType,
    selectedTask: modal.data
  }
}
