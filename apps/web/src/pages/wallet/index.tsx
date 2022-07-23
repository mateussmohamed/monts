import fetch from 'domains/shared/lib/helpers/fetch'
import useUser from 'domains/shared/lib/hooks/use-user'
import { Button, Heading } from 'rebass/styled-components'

import { BottomNavigation } from '../../ui/components/bottom-navigation'

const Dashboard = () => {
  const { mutateUser } = useUser({ redirectTo: '/login' })

  async function handleLogout() {
    await mutateUser(fetch('/api/auth/logout'))
  }

  return (
    <div>
      <Heading color="primary" fontWeight="semi">
        Dashboard
      </Heading>
      <Button mt={4} variant="negative" onClick={handleLogout}>
        Sair
      </Button>

      <BottomNavigation />
    </div>
  )
}

export default Dashboard
