import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import configuration from './common/config/configuration'
import { upperDirectiveTransformer } from './common/directives/upper-case.directive'

import { UsersModule } from './users/users.module'
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      load: [configuration]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class'
      }
    }),
    WalletsModule
  ]
})
export class AppModule {}
