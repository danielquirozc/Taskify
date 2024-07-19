import { useList } from '../hooks/useList'
import { Task } from './Task'
import { IoIosTrash } from 'react-icons/io'
export const List = () => {
  const { list, deleteCategory } = useList()

  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="w-11/12 flex flex-col flex-wrap">
        {list && list.map((category) => (
          <div key={category.id} className="w-full my-3">
            <div className="flex gap-2 items-center">
              <h1 className="text-3xl font-inter font-black">
                {category.title}
              </h1>
              <IoIosTrash
                onClick={() => deleteCategory(category.id)}
                size={24}
                className='cursor-pointer'
              />
            </div>
            <ul className='flex flex-wrap gap-y-8 mt-5 gap-2 min-h-36'>
              {!category.tasks.length > 0
                ? <h1 className='text-2xl font-semibold text-slate-500 text-center'>Empty</h1>
                : category.tasks.map((task) => (
                  <Task key={task.id} task={task} category={category.title} />
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
