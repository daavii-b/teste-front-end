import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '@/app'

describe('App', () => {
  it('renders the storefront header sections and actions', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: 'Categorias principais' })).toBeInTheDocument()
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Carrinho' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ofertas do dia' })).toBeInTheDocument()
  })
})
