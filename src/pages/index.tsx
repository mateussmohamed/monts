import React from 'react'
import Link from 'next/link'

import Title from '@monts/components/title'

const IndexPage: React.FC = () => (
  <>
    <Title>monts</Title>
    <br />
    <br />
    <Link href="/welcome">welcome</Link>
    <br />
    <br />
    <Link href="/signup">signup</Link>
  </>
)

export default IndexPage
