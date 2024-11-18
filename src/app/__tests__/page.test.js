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

describe("Usuarios", () => {
  it('verifica cantidad de cursos de un usuario', () => {
    const usuario = {};
    const curso1 = { nombre: 'Cursito 1' };
    usuario.cursos = [];
    usuario.cursos.push(curso1);

    expect(usuario.cursos.length).toBeGreaterThanOrEqual(1);
  })
})