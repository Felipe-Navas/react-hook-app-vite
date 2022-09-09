import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../03-examples'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Testing the MultipleCustomHooks component', () => {
  const mockIncrement = jest.fn()
  useCounter.mockReturnValue({ counter: 1, increment: mockIncrement })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render correctly', () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })

    render(<MultipleCustomHooks />)

    expect(screen.getAllByText('Loading...'))
    expect(screen.getAllByText('Breaking Bad Quotes'))

    const nextButton = screen.getByRole('button', { name: 'Next quote' })

    expect(nextButton.disabled).toBeTruthy()
  })

  test('should show a Quote', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Walter white',
          quote: 'Test quote',
        },
      ],
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)

    expect(screen.getByText('Test quote')).toBeTruthy()
    expect(screen.getByText('Walter white')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'Next quote' })
    expect(nextButton.disabled).toBeFalsy()
  })

  test('should call the increment function', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Walter white',
          quote: 'Test quote',
        },
      ],
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)

    const nextButton = screen.getByRole('button', { name: 'Next quote' })

    fireEvent.click(nextButton)

    expect(mockIncrement).toHaveBeenCalledTimes(1)
  })
})
