import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookMiddleWare } from "./book.middleware";

@Module({
    imports  : [],
    controllers : [BookController],
    providers : []
})
//Implements here NestModule to fetch Class based MiddleWare
export class BookModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
       consumer.apply(BookMiddleWare).forRoutes('book');
    }

}