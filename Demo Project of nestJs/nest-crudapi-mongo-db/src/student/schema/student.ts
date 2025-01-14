import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type StudentDocument = Student & Document;

@Schema()
export class Student {
    //@Prop() decorator is used for define fields 
    @Prop()
    id : string;

    @Prop()
    name : string;

    @Prop()
    city : string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);

