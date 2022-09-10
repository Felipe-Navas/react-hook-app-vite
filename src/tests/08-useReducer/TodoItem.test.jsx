import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../08-useReducer/TodoItem'

describe('Testing TodoItem component', () => {
  const todo = {
    id: 1,
    description: 'Create a new application',
    done: false,
  }

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should show the Todo done false', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const liElement = screen.getByRole('listitem')

    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    )

    const spanElement = screen.getByLabelText('span')

    expect(spanElement.className).toContain('align-self-center')
    expect(spanElement.className).not.toContain('text-decoration-line-through')
  })

  test('should show the Todo done true', () => {
    todo.done = true

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')

    expect(spanElement.className).toBe(
      'align-self-center text-decoration-line-through'
    )
  })

  test('should call onToggleTodoMock function on span click', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')

    fireEvent.click(spanElement)

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
  })

  test('should call onDeleteTodoMock function on button click', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const buttonElement = screen.getByRole('button')

    fireEvent.click(buttonElement)

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
  })
})
