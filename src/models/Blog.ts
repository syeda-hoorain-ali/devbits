import mongoose, { Schema } from "mongoose";

export interface IComment {
    name: string;
    message: string;
    createdAt: Date;
}

export interface IBlog {
    title: string;
    description: string;
    date: Date;
    image: string;
    slug: string;
    link: string;
    content: string;
    comments: IComment[]
}

const CommentSchema = new Schema<IComment>({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
})


const BlogSchema = new Schema<IBlog>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    comments: [CommentSchema]
})


const BlogModel = mongoose.models.Blog as mongoose.Model<IBlog> || mongoose.model('Blog', BlogSchema);

export default BlogModel