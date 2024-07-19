import { IoIosCloseCircle } from 'react-icons/io'
import { useModal } from '../hooks/useModal'
import { Input } from './Input'
import { useList } from '../hooks/useList'

export const CategoryForm = () => {
  const { closeModal } = useModal()
  const { addCategory } = useList()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    addCategory(data)
  }

  return (
    <form
    onSubmit={handleSubmit}
    className="flex py-3 flex-col px-4 font-inter rounded max-w-80 min-w-96 bg-slate-200 relative"
  >
    <button
      type='button'
      className="absolute top-4 right-4"
      onClick={() => closeModal()}
    >
      <IoIosCloseCircle size={24} />
    </button>
    <div className='mb-10'>
      <h1 className="font-semibold text-2xl">Add new Category</h1>
      <p className="mb-10 text-sm text-slate-500">
        Complete the following form to add a new category
      </p>
    </div>
    <Input text="title" />
    <button
      type="submit"
      className="bg-zinc-800 my-2 text-slate-200 font-medium w-full rounded py-2"
    >
      Add Category
    </button>
  </form>
  )
}
