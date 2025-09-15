import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// 교차타입(&) 생성
export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
    @Prop()
    id: string;
    
    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    name: string;

    @Prop()
    createdDt: Date;

    @Prop()
    updatedDt: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog); // 스키마 생성