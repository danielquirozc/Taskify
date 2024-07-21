import { Badge } from './Badge'
import { useModal } from '../hooks/useModal'
import { modalTypes } from '../utils/modalTypes'

export const Task = ({ id, name, status, description, createdAt, category }) => {
  const { showModal } = useModal()
  return (
    <li
      onClick={() => showModal(modalTypes.TASKPAGE, { id, name, status, description, createdAt, category })}
      className="w-52 flex flex-col justify-between min-h-32 px-2 py-1 relative font-inter rounded bg-slate-200 border border-slate-400 cursor-pointer"
    >
      <div className="flex justify-between items-center mb-1">
        <h1 className="font-bold  text-lg px-1">{name}</h1>
        <Badge status={status} />
      </div>
      <p className="px-1 text-start flex-1 text-wrap text-sm text-slate-600 truncate line-clamp-4">{description}</p>
      <sup className='text-xs mt-4'>{createdAt}</sup>
    </li>
  )
}
