import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type EmployeeDocument = Employee & Document;


@Schema()
export class Employee {
    @Prop()
    id : string;

    @Prop()
    name : string;

    @Prop()
    email : string;

    @Prop()
    phone : string;

    @Prop()
    city : string; 
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);