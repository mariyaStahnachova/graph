import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {GraphQLModule} from "@nestjs/graphql";
import {join } from "path";
import { TestsModule } from './modules/tests/tests.module';
import { ChildModule } from './modules/child/child.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/test'),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TestsModule,
    ChildModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
