import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export const Dropdown = ({ title, options, name, defaultValue = '' }) => {
  const [option, setOption] = useState(defaultValue)

  const selectOption = (e) => {
    const optionValue = e.target.value
    setOption(optionValue)
  }

  return (
    <div className="flex relative w-full mb-5 border border-slate-400 rounded">
      <input className="hidden" name={name} readOnly value={option} />
      <button
        type="button"
        className="text-start flex justify-between items-center w-full peer px-2 py-1 rounded"
      >
        {option || title}
        <IoIosArrowDown />
      </button>
      <div
        style={{ scrollbarGutter: 'stable', scrollbarWidth: 'thin' }}
        className="absolute max-h-28 overflow-y-scroll hidden rounded top-10 border border-slate-400 rounded-b-md overflow-hidden peer-focus:grid hover:grid bg-slate-200 z-20 w-full"
      >
        {options.map((option) => (
          <button
            type="button"
            onClick={(e) => selectOption(e)}
            value={option.title}
            className="py-1 hover:bg-slate-300"
            key={option.id}
          >
            {option.title}
          </button>
        ))}
      </div>
    </div>
  )
}
