import { UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'

import { GqlAuthGuard } from '../auth/gql-auth.guard'
import { UserEntity } from '../common/decorators/user.decorator'

import { User } from './user.model'
import { UsersService } from './users.service'

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'me' })
  async me(@UserEntity() user: User): Promise<User> {
    return user
  }
}
