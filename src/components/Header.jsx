import { modalTypes } from '../utils/modalTypes'

export const Header = ({ openModal }) => {
  return (
    <header className="flex justify-between font-inter items-center max-h-24 w-full px-5 p-2 border-b-2 border-slate-300">
      <div className="flex items-center gap-2">
        <img className="w-10" src="/logo.svg" alt="Logo de Taskify" />
        <h1 className="text-3xl hidden md:block font-bold italic">Taskify</h1>
      </div>

      <div className="flex items-center gap-2 *:rounded-lg *:font-medium *:h-10 *:min-w-24 *:px-5">
        <button
          onClick={() => openModal(modalTypes.TASK)}
          className="bg-slate-200 border border-slate-400 hover:bg-slate-300"
        >
          Add Task
        </button>
        <button
          onClick={() => openModal(modalTypes.CATEGORY)}
          className="bg-zinc-900 text-slate-50"
        >
          Add Category
        </button>
      </div>
    </header>
  )
}
