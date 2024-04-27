import { act } from 'react'
import { renderHook } from '@testing-library/react'
import { useForm } from '../../hooks/useForm'

describe('Testing the useForm', () => {
  const initialForm = {
    name: 'test',
    email: 'test@gmail.com',
  }

  test('should return the default values', () => {
    const { result } = renderHook(() => useForm(initialForm))

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  })

  test('should change the name', () => {
    const { result } = renderHook(() => useForm(initialForm))

    const { onInputChange } = result.current

    const newValue = 'Test value'

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
    })

    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  test('should reset after changing the name', () => {
    const { result } = renderHook(() => useForm(initialForm))

    const { onInputChange, onResetForm } = result.current

    const newValue = 'Test value'

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } })
      onResetForm()
    })

    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState).toEqual(initialForm)
  })
})
