import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";
import { StudentMiddleWare } from "./student.middleware";

@Module({
    imports :[],
    controllers : [StudentController],
    providers : [StudentService]
})
export  class studentModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
       // throw new Error("Method not implemented.");
       consumer.apply(StudentMiddleWare).forRoutes('student');
    }

}