import { useForm } from '../hooks'

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  })

  const onFormSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    }
    handleNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter description"
        className="form-control"
        value={description}
        name="description"
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Add
      </button>
    </form>
  )
}
