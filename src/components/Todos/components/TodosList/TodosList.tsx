import { PropsWithChildren } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodosList.css'
import { Todo } from '../../../../types'

interface TodosListProps extends PropsWithChildren {
  todos: Todo[]
}

export default function TodosList({ todos }: TodosListProps) {
  return (
    <ul id="todos-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
