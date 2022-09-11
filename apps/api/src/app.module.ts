import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { PrismaModule } from 'nestjs-prisma'

import { AuthModule } from './auth/auth.module'
import config from './common/config/config'
import { UsersModule } from './users/users.module'
import { GqlConfigService } from './graphql-config-service'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),

    PrismaModule.forRoot({ isGlobal: true }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService
    }),

    AuthModule,
    UsersModule
  ]
})
export class AppModule {}
