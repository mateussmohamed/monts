// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from 'next-iron-session'

function withSession(handler: Handler): (...args: any[]) => Promise<any> {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD || 'SECRET_COOKIE_PASSWORD',
    cookieName: 'monts',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' ? true : false
    }
  })
}

export default withSession
