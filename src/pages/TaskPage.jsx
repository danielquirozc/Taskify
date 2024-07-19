import { Badge } from '../components/Badge'
import { useList } from '../hooks/useList'
import { useModal } from '../hooks/useModal'
import { IoIosCloseCircle } from 'react-icons/io'
import { modalTypes } from '../utils/modalTypes'

export const TaskPage = () => {
  const { selectedTask, closeModal, showModal } = useModal()
  const { deleteTask } = useList()

  return (
    <>
      {selectedTask
        ? (
        <div className="flex flex-col justify-between bg-slate-200 p-4 relative rounded min-w-96 min-h-60 max-w-72">
          <IoIosCloseCircle
            onClick={() => closeModal()}
            className="text-black cursor-pointer absolute top-5 right-5"
            size={24}
          />
          <Badge status={selectedTask.status} />
          <div>
            <h1 className="text-3xl font-bold">{selectedTask.name}</h1>
            <sup>{selectedTask.createdAt}</sup>
          </div>
          <p className="text-balance flex-1 text-base text-slate-800">
            {selectedTask.description}
          </p>
          <div className="flex justify-between gap-2 mt-4 *:flex-1 *:py-2 *:px-2 *:font-semibold *:text-sm *:rounded-lg">
            <button
              onClick={() => showModal(modalTypes.EDIT, selectedTask)}
              className="bg-blue-400 text-blue-800"
            >
              Edit
            </button>
            <button
              onClick={() => { deleteTask(selectedTask.id, selectedTask.category); closeModal() }}
              className="bg-red-400 text-red-800"
            >
              Delete
            </button>
          </div>
        </div>
          )
        : (
        <div className="font-semibold bg-slate-100 p-3 rounded">
          <h1 className="text-xl">Task not found</h1>
          <p className="text-sm font-normal">
            Please reload the page if there are errors
          </p>
          <p className="text-sm font-normal">
            or contact me on discord:{' '}
            <strong className="text-purple-500">amchiwa</strong>
          </p>
        </div>
          )}
    </>
  )
}
