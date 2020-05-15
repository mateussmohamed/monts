declare module '@rebass/preset'
declare module 'lodash.merge'

declare type User = {
  firstName: string
  lastName: string
  email: string
  password: string
  id?: string
}

declare type Wallet = {
  id?: string
  userId: string
  balance: number
}
