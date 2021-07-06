import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Child} from "../../child/entities/child.entity";
import {Prop, Schema} from "@nestjs/mongoose";
import {Types, Schema as MongooseSchema} from "mongoose"

export type TestDocument = Test & Document
@Schema()
@ObjectType()
export class Test {
  @Field(type => String)
  _id: Types.ObjectId;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Prop()
  exampleField1: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  @Prop()
  exampleField2: string;

  // @Field(type => Child, { description: 'Example field (placeholder)' })
  // @Prop({type:MongooseSchema.Types.ObjectId, ref:'Child'})
  // child: Child;

  @Prop({type:Date, default:Date.now})
  updateDateDTO :Date;

  @Prop({type:Date, default:Date.now})
  createDateDTO :Date;

}
export const TestSchema = SchemaFactory.createForClass(Test)

