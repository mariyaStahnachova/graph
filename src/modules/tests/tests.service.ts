import { Injectable } from '@nestjs/common';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
import {Test, TestDocument} from "./entities/test.entity";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class TestsService {

  constructor(
      @InjectModel(Test.name) private WeeklyFigureModel : Model<TestDocument>
  ) {
  }
  create(createTestInput: CreateTestInput) {
    return 'This action adds a new test';
  }



  findAll() {
    return `This action returns all tests`;
  }

  findOne(id: number): Test {
    return {
      // exampleField:id,
      exampleField1:id,
      exampleField2:'hi',
      child :{
        childExampleField: id+2
      }
    };
  }

  update(id: number, updateTestInput: UpdateTestInput) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
