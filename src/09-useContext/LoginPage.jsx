import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)

  const loginUser = () => {
    setUser({
      id: 123,
      name: 'Don nadie',
      email: 'donNadie@gmail.com',
    })
  }

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-primary" onClick={loginUser}>
        Login User
      </button>
    </>
  )
}
