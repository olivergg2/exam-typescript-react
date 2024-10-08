import { useTodo } from '../../../../hooks/useTodos.hook'
import { Todo } from '../../../../types'
import './TodoItem.css'

interface TodoItemProps {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { remove, toggle } = useTodo(todo)

  const isChecked = todo.complete
  const isRemoveAllowed = isChecked

  return (
    <li className="todo-item">
      <input type="checkbox" checked={isChecked} onChange={toggle} />
      <h3>{todo.title}</h3>
      <button disabled={!isRemoveAllowed} className="todo-remove" onClick={remove}>
        X
      </button>
    </li>
  )
}
