import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

  const { formState, onInputChange, userName, email, password, onResetForm } =
    useForm({
      userName: '',
      email: '',
      password: '',
    })

  // const { userName, email, password } = formState

  return (
    <>
      <h1>Form with custom hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        name="userName"
        placeholder="Username"
        value={userName}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        name="password"
        placeholder="Password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-3" onClick={onResetForm}>
        Reset
      </button>
    </>
  )
}
