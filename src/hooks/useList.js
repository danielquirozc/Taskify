import { useContext } from 'react'
import { ListContext } from '../context/ListContext'
import { getTime } from '../utils/getTime'

export function useList () {
  const { list, setList } = useContext(ListContext)

  const addTask = async ({ title: name, description, category }) => {
    const index = list.findIndex(task => task.title === category)
    const newTask = {
      id: list[index].tasks.length + 1,
      name,
      description,
      status: 'to do',
      createdAt: getTime()
    }
    const newList = [...list]
    newList[index].tasks.push(newTask)
    setList(newList)
    localStorage.setItem('list', JSON.stringify(newList))
  }

  const addCategory = async category => {
    const newList = [...list]
    category.id = list.length + 1
    category.tasks = []
    newList.push(category)
    setList(newList)
    localStorage.setItem('list', JSON.stringify(newList))
  }

  const deleteTask = (id, categoryTitle) => {
    const index = list.findIndex(category => category.title === categoryTitle)
    const newList = [...list]
    newList[index].tasks = newList[index].tasks.filter(task => task.id !== id)
    setList(newList)
    localStorage.setItem('list', JSON.stringify(newList))
  }

  const deleteCategory = id => {
    const index = list.findIndex(category => category.id === id)
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
    localStorage.setItem('list', JSON.stringify(newList))
  }

  const editTask = (data) => {
    const index = list.findIndex(category => category.title === data.category)
    const newList = [...list]
    newList[index].tasks = newList[index].tasks.map(task => {
      if (task.id === data.id) {
        return data
      }
      return task
    })
    setList(newList)
    localStorage.setItem('list', JSON.stringify(newList))
  }

  return { list, addTask, addCategory, deleteTask, deleteCategory, editTask }
}
