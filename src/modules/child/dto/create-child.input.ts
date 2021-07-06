import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateChildInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
