import useTodos from '../../hooks/useTodos.hook'
import TodoForm from './components/TodoForm/TodoForm'
import TodoHeader from './components/TodoHeader/TodoHeader'
import TodosInfo from './components/TodosInfo/TodosInfo'
import TodosList from './components/TodosList/TodosList'
import './Todos.css'

export default function Todos() {
  const { todos } = useTodos()

  return (
    <main id="todo-container">
      <TodoHeader />
      <TodoForm />
      <TodosList todos={todos} />
      <TodosInfo />
    </main>
  )
}
