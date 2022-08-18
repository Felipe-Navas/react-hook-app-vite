import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Buy milk',
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: 'Do homework',
    done: false,
  },
]

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleNewTodo = (newTodo) => {
    console.log(newTodo)
  }

  return (
    <>
      <h1>
        TodoApp: (10), <small>pending: (2)</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Add todo</h4>
          <hr />

          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
