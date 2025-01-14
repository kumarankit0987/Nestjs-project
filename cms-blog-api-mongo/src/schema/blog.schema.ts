import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Blog {
    @Prop()
    title : string;

    @Prop()
    content : string;

    @Prop()
    author : string;

    @Prop({ type: Types.ObjectId, ref: 'Category' })
    categoryId : Types.ObjectId;

    @Prop()
    status : string;
}


export const  BlogSchema = SchemaFactory.createForClass(Blog);