import { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef()

  const onClickSetFocus = () => {
    // document.querySelector('input').select()
    inputRef.current.select()
  }

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control mt-2"
        type="text"
        placeholder="Insert name"
      />
      <input
        className="form-control mt-2"
        type="text"
        placeholder="Insert name"
      />
      <input
        className="form-control mt-2"
        type="text"
        placeholder="Insert name"
      />

      <button className="btn btn-primary mt-2" onClick={onClickSetFocus}>
        Set focus
      </button>
    </>
  )
}
