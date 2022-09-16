import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MainApp } from '../../09-useContext/MainApp'

describe('Testing MainApp component', () => {
  test('should render correctly the HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )

    expect(screen.getByText('HomePage')).toBeTruthy()
  })

  test('should render correctly the LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    )

    expect(screen.getByText('LoginPage')).toBeTruthy()
  })

  test('should render correctly the AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    )

    expect(screen.getByText('AboutPage')).toBeTruthy()
  })
})
