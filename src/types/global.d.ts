declare module '@rebass/preset'
declare module 'lodash.merge'

declare type User = {
  firstName: string
  lastName: string
  email: string
  password?: string
  id?: string
}

declare type Wallet = {
  id?: string
  userId: string
  balance: number
}

declare interface ResponseApi {
  data?: Record<string, unknown>
  error?: string
}

declare type NextApiRequestWithSession = NextApiRequest & {
  session: Session
}

declare type Handler = (req: NextApiRequestWithSession, res: NextApiResponse) => Promise<void>

declare type SubmitForm = (data: FieldValues) => void
