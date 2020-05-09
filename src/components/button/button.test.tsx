import React from 'react'
import { render } from '@testing-library/react'

import Button from './index'

describe('[Components - Button]', () => {
  it('should render a button', () => {
    const { getByText } = render(<Button>Primary</Button>)
    const button = getByText('Primary')

    expect(button).toBeInTheDocument()
  })
})
