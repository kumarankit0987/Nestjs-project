import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookGuard } from "./book.guard";

@Module({
    imports :[],
    controllers : [BookController],
    providers : [BookGuard]
})
export class BookModule {

}