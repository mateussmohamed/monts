import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

type Options = {
  redirectTo?: string
  redirectIfFound?: boolean
}

type useUserHook = {
  user: User
  mutateUser: any
}

function useUser({ redirectTo = '', redirectIfFound = false }: Options = {}): useUserHook {
  const router = useRouter()
  const { data: user, mutate: mutateUser } = useSWR('/api/user')

  useEffect(() => {
    if (!redirectTo || !user) return

    if ((redirectTo && !redirectIfFound && !user?.isLoggedIn) || (redirectIfFound && user?.id)) {
      router.push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo, router])

  return { user, mutateUser }
}

export default useUser
