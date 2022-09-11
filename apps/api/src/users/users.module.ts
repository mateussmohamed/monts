import { Module } from '@nestjs/common'

import { PasswordService } from '../auth/password.service'

import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'

@Module({
  imports: [],
  providers: [UsersResolver, UsersService, PasswordService]
})
export class UsersModule {}
