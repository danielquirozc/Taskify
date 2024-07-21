import { createContext, useEffect, useState } from 'react'

export const ListContext = createContext()

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    const localList = localStorage.getItem('list')
    localList.length && setList(JSON.parse(localList))
  }, [])

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  )
}
