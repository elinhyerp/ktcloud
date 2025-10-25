import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false, timestamps: { createdAt: true, updatedAt: false } })
export class Comment {
  @Prop({ default: '익명' })
  authorName: string;

  @Prop({ required: true })
  content: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

@Schema({ timestamps: true })
export class Post extends Document {
  @Prop({ required: true, maxLength: 100 })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: [CommentSchema], default: [] })
  comments: Comment[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
