import { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: 'JoeDoe',
    email: 'joeDoe@gmail.com',
  })

  const { userName, email } = formState

  const handleChange = ({ target }) => {
    const { name, value } = target

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  useEffect(() => {
    // console.log('se llamo')
  }, [])

  useEffect(() => {
    // console.log('formState changed')
  }, [formState])

  useEffect(() => {
    // console.log('email changed')
  }, [email])

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        name="userName"
        placeholder="Username"
        value={userName}
        onChange={handleChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />

      {
        userName === 'JoeDoe' && <Message />
      }

    </>
  )
}
