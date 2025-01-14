import { Module } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { EmployeeController } from "./employee.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { models } from "mongoose";
import { Employee, EmployeeSchema } from "./schema/employee";

@Module({
    imports :[MongooseModule.forFeature([{name : Employee.name, schema : EmployeeSchema}])],
    controllers : [EmployeeController],
    providers : [EmployeeService]
})
export class EmployeeModule {

}