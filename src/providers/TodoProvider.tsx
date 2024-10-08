import { createContext, PropsWithChildren, useEffect } from 'react'
import { Todo } from '../types'
import { saveToLocalStorage } from '../helpers/localeStorage.helper'
import useStored from '../hooks/useStored.hook'

interface ITodoContext {
  todos: Todo[]
  addTodo: (title: string) => void
  removeTodo: (id: string) => void
  toggleComplete: (id: string) => void
}

export const TodoContext = createContext<ITodoContext | null>(null)

export default function TodoProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useStored<Todo[]>('todos', [])

  useEffect(() => {
    // Save current state of todos to localStorage whenever it is updated
    saveToLocalStorage('todos', todos)
  }, [todos])

  function addTodo(title: string) {
    const id = crypto.randomUUID()
    const todoToAdd = { id, title, complete: false } satisfies Todo

    setTodos(current => [...current, todoToAdd])
  }

  function removeTodo(id: string) {
    setTodos(current => current.filter(todo => todo.id !== id))
  }

  function toggleComplete(id: string) {
    setTodos(current =>
      current.map(todo => (todo.id === id ? { ...todo, complete: !todo.complete } : todo))
    )
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  )
}
