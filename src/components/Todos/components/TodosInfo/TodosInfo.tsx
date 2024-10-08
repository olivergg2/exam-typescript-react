import useTodos from '../../../../hooks/useTodos.hook'
import './TodosInfo.css'

export default function TodosInfo() {
  const { todos } = useTodos()

  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.complete).length
  const incompleteTodos = todos.length - completedTodos

  const hasAddedTodos = todos.length > 0

  return (
    <footer id="todos-info">
      {!hasAddedTodos && <h3>Inga todos ännu, lägg till en!</h3>}
      {hasAddedTodos && (
        <p>{`Totalt ${totalTodos} todos, ${completedTodos} klara, ${incompleteTodos} att göra`}</p>
      )}
    </footer>
  )
}
