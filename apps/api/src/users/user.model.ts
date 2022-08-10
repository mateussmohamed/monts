import { Field, HideField, ObjectType } from '@nestjs/graphql'

import { BaseModel } from '../common/models/base.model'

@ObjectType()
export class User extends BaseModel {
  @Field(() => String, { description: 'user email' })
  email: string

  @Field(() => String, { description: 'user firstName' })
  firstName: string

  @Field(() => String, { description: 'user lastName' })
  lastName: string

  @HideField()
  password: string
}
