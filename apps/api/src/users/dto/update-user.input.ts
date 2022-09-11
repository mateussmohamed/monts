import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput {
  @Field()
  firstname: string
  @Field()
  lastname: string
}
