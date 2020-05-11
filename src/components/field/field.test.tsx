import React from 'react'
import { render } from '@testing-library/react'

import Field from './index'

describe('[Components - Field]', () => {
  it('should render a field', () => {
    const { getByTestId } = render(<Field label="login" />)

    expect(getByTestId('ms-field')).toBeInTheDocument()
  })
})
