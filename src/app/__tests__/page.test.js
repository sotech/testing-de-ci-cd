import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomeData from '../home';
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<HomeData />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})