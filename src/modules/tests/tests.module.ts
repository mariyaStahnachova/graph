import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsResolver } from './tests.resolver';
import {Test, TestSchema} from "./entities/test.entity";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports:[
      MongooseModule.forFeature([{
        name:Test.name,
        schema:TestSchema}])

  ],
  providers: [TestsResolver, TestsService]
})
export class TestsModule {}
