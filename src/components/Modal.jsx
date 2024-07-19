import { TaskForm } from './TaskForm'
import { useModal } from '../hooks/useModal'
import { CategoryForm } from './CategoryForm'
import { TaskPage } from '../pages/TaskPage'
import { EditForm } from './EditForm'

const ModalMap = {
  taskpage: <TaskPage />,
  task: <TaskForm />,
  category: <CategoryForm />,
  edit: <EditForm />
}

export const Modal = () => {
  const { isOpen, modalType } = useModal()
  return (
    <>
      {isOpen && (
        <div className="fixed w-full font-inter h-full top-0 left-0 grid place-items-center z-10 bg-black/50">
          {ModalMap[modalType]}
        </div>
      )}
    </>
  )
}
