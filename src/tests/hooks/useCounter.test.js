import { act } from 'react'
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

  test('should increment correctly', () => {
    const { result } = renderHook(() => useCounter())

    const { increment } = result.current

    act(() => {
      increment()
      increment(2)
    })
    expect(result.current.counter).toBe(13)
  })

  test('should decrement correctly', () => {
    const { result } = renderHook(() => useCounter(100))

    const { decrement } = result.current

    act(() => {
      decrement()
      decrement(2)
    })
    expect(result.current.counter).toBe(97)
  })

  test('should reset correctly', () => {
    const { result } = renderHook(() => useCounter(200))

    const { decrement, reset } = result.current

    act(() => {
      decrement()
      reset()
    })
    expect(result.current.counter).toBe(200)
  })
})
