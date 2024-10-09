import useTodos from '../../../../hooks/useTodos.hook'
import './TodosInfo.css'
import Text from '../../../Text/Text'

export default function TodosInfo() {
  const { todos } = useTodos()

  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.complete).length
  const incompleteTodos = todos.length - completedTodos

  const hasAddedTodos = todos.length > 0

  const noTodos = 'Inga todos ännu, lägg till en!'
  const infoString = `Totalt ${totalTodos} todos, ${completedTodos} klara, ${incompleteTodos} att göra`

  const displayedText = hasAddedTodos ? infoString : noTodos

  return (
    <footer id="todos-info">
      <Text>{displayedText}</Text>
    </footer>
  )
}
