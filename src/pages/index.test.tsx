import { render, screen } from '@testing-library/react'

import Home from './index'

describe('<Index />', () => {
  it('test', () => {
    render(<Home />)

    const a = screen.getByText('Home')

    expect(a).toBeInTheDocument()
  })
})
