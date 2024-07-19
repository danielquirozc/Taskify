export const Input = ({ text, type = 'text', value = null }) => {
  return (
    <label className="relative flex mb-2 items-center">
      <input
        className="bg-transparent relative rounded px-1 focus:border-blue-500 peer border p-2 border-slate-400 outline-none w-full h-full"
        type={type}
        placeholder=" "
        name={text}
        defaultValue={value}
        required
      />
      <span className="absolute px-1 bg-slate-200 text-slate-600 font-medium left-2 duration-300 peer-[:not(:placeholder-shown)]:scale-[0.9] peer-[:not(:placeholder-shown)]:-translate-y-5 peer-focus:-translate-y-5 peer-focus:scale-[0.9] peer-focus:text-blue-500 capitalize">
        {text}
      </span>
    </label>
  )
}
