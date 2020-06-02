import React from 'react'
import { Heading } from 'rebass/styled-components'
import { Button } from 'rebass/styled-components'

import fetcher from '@monts/lib/unfetch'
import useUser from '@monts/hooks/use-user'

function Dashboard(): JSX.Element {
  const { mutateUser } = useUser({ redirectTo: '/login' })

  async function handleLogout() {
    await mutateUser(fetcher('/api/auth/logout'))
  }

  return (
    <div>
      <Heading color="primary" fontWeight="semi">
        Dashboard
      </Heading>
      <Button mt={4} variant="negative" onClick={handleLogout}>
        Sair
      </Button>
    </div>
  )
}

export default Dashboard
