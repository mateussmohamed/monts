import React from 'react'
import { render } from '@testing-library/react'

import IndexPage from '@monts/pages/index'

describe('[Pages - Index]', () => {
  it('should render a index page with "monts"', () => {
    const { getByText } = render(<IndexPage />)

    expect(getByText('monts')).toBeInTheDocument()
  })
})
