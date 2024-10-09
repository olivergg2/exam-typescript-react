import useTodos from '../../../../hooks/useTodos.hook'
import './TodosInfo.css'

export default function TodosInfo() {
  const { todos } = useTodos()

  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.complete).length
  const incompleteTodos = todos.length - completedTodos

  const hasAddedTodos = todos.length > 0

  const noTodos = 'Inga todos ännu, lägg till en!'
  const infoString = `Totalt ${totalTodos} todos, ${completedTodos} klara, ${incompleteTodos} att göra`

  return (
    <footer id="todos-info">
      <p>
        {!hasAddedTodos && noTodos}
        {hasAddedTodos && infoString}
      </p>
    </footer>
  )
}
