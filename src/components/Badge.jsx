const statusStyles = {
  todo: 'bg-red-300 text-red-800',
  inprogress: 'bg-yellow-200 text-yellow-800',
  done: 'bg-green-300 text-green-700'
}

export const Badge = ({ status }) => {
  return (
    <span className={`px-3 py-1 duration-200 min-w-16 text-center -z-10 max-h-5 absolute -top-5 text-xs capitalize font-bold rounded-t-full ${statusStyles[status.replace(' ', '').toLowerCase()]}`}>
      {status}
    </span>
  )
}
