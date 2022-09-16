import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../09-useContext/context/UserContext'
import { LoginPage } from '../../09-useContext/LoginPage'

describe('Testing LoginPage component', () => {
  test('should show the component withouth the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('pre')

    expect(preTag.innerHTML).toBe('null')
  })

  test('should call the setUser function when the button is clicked', () => {
    const user = {
      id: 123,
      name: 'Don nadie',
      email: 'donNadie@gmail.com',
    }

    const setUserMock = jest.fn()

    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(setUserMock).toHaveBeenCalledWith(user)
  })
})
