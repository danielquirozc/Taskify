import { useList } from '../hooks/useList'
import { useModal } from '../hooks/useModal'
import { Dropdown } from './Dropdown'
import { Input } from './Input'
import { IoIosCloseCircle } from 'react-icons/io'

export const TaskForm = () => {
  const { addTask, list } = useList()
  const { closeModal } = useModal()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    addTask(data)
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
      <h1 className="font-semibold text-2xl">Add a new Task</h1>
      <p className="mb-10 text-sm text-slate-500">
        Complete the following form to add a new task in a specific category
      </p>
      <Input text="title" />
      <textarea
        name="description"
        placeholder="Enter your description"
        className="max-h-[400px] min-h-24 text-sm outline-none bg-transparent border p-2 border-slate-400 rounded mb-2"
      ></textarea>
      <Dropdown
        options={list}
        title="Select Category"
        name="category"
      />
      <button
        type="submit"
        className="bg-zinc-800 my-2 text-slate-200 font-medium w-full rounded py-2"
      >
        Add Task
      </button>
    </form>
  )
}
