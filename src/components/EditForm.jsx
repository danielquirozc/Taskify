import { IoIosCloseCircle } from 'react-icons/io'
import { Input } from './Input'
import { useModal } from '../hooks/useModal'
import { Dropdown } from '../components/Dropdown'
import { useList } from '../hooks/useList'
import { taskStatus } from '../utils/taskStatus'
import { getTime } from '../utils/getTime'

export const EditForm = () => {
  const { closeModal, selectedTask } = useModal()
  const { editTask } = useList()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const task = {
      ...selectedTask,
      ...data,
      createdAt: getTime()
    }
    editTask(task)
    closeModal()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex py-3 flex-col px-4 font-inter rounded min-h-96 max-w-80 min-w-96 bg-slate-200 relative"
    >
      <button
        type='button'
        className="absolute top-4 right-4"
        onClick={() => closeModal()}
      >
        <IoIosCloseCircle size={24} />
      </button>
      <h1 className="font-semibold text-2xl">Edit Task</h1>
      <p className="mb-10 text-sm text-slate-500">
        Complete the following form to edit a task
      </p>
      <Input text="name" value={selectedTask.name} />
      <textarea
        name="description"
        defaultValue={selectedTask.description}
        placeholder="Enter your description"
        className="max-h-[400px] min-h-24 text-sm outline-none bg-transparent border p-2 border-slate-400 rounded mb-2"
      ></textarea>
      <Dropdown
        options={taskStatus}
        defaultValue={selectedTask.status}
        title='Select Status'
        name="status"
      />
      <button
        type="submit"
        className="bg-zinc-800 my-2 text-slate-200 font-medium w-full rounded py-2"
      >
        Edit Task
      </button>
    </form>
  )
}
