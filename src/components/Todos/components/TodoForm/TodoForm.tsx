import { ChangeEvent, FormEvent, useState } from 'react'
import useTodos from '../../../../hooks/useTodos.hook'
import './TodoForm.css'

export default function TodoForm() {
  const { addTodo } = useTodos()
  const [title, setTitle] = useState('')

  const isAddAllowed = title.trim() !== ''

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const actual = title.trim()

    if (!actual) return

    addTodo(actual)
    setTitle('')
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setTitle(value)
  }

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <input placeholder="En super viktig todo..." value={title} onInput={handleInput} />
      <button disabled={!isAddAllowed}>Lägg till</button>
    </form>
  )
}
