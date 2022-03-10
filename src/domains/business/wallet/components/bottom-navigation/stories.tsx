import React from 'react'

import BottomNavigation from '.'
export default {
  title: 'BottomNavigation',
  component: BottomNavigation
}

export const Default = (): JSX.Element => (
  <div style={{ padding: '3rem' }}>
    <BottomNavigation />
  </div>
)
