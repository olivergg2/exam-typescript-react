import { useTodo } from '../../../../hooks/useTodos.hook'
import { Todo } from '../../../../types'
import { FlatButton } from '../../../Button/Button'
import { Checkbox } from '../../../Input/Input'
import Text from '../../../Text/Text'
import './TodoItem.css'

interface TodoItemProps {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { remove, toggle } = useTodo(todo)

  const isChecked = todo.complete
  const isRemoveAllowed = isChecked

  return (
    <li className="todo-item" data-done={isChecked}>
      <Checkbox checked={isChecked} onChange={toggle} />
      <Text value={todo.title} className="todo-item-text" />
      <FlatButton title="X" className="todo-remove" onClick={remove} disabled={!isRemoveAllowed} />
    </li>
  )
}
