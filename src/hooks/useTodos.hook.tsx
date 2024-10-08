import { useContext } from 'react'
import { TodoContext } from '../providers/TodoProvider'
import { Todo } from '../types'

export default function useTodos() {
  return useContext(TodoContext)!
}

export function useTodo(todo: Todo) {
  const { removeTodo, toggleComplete } = useTodos()

  const remove = () => removeTodo(todo.id)
  const toggle = () => toggleComplete(todo.id)

  return { remove, toggle }
}
