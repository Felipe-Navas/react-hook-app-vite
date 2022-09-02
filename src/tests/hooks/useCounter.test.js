import { renderHook } from '@testing-library/react'
import { useCounter } from '../../hooks/useCounter'

describe('Testing the useCounter', () => {
  test('should return the default value', () => {
    const { result } = renderHook(() => useCounter())

    const { counter, increment, decrement, reset } = result.current

    expect(counter).toBe(10)
    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('should return the counter in 100', () => {
    const { result } = renderHook(() => useCounter(100))

    const { counter } = result.current

    expect(counter).toBe(100)
  })
})
