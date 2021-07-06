import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Child {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  childExampleField: number;
}
