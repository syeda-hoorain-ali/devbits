import { dbConnect } from "@/lib/dbConnect";
import BlogModel, { IComment } from "@/models/Blog";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {

    await dbConnect();
    const { name, message, createdAt, blogSlug } = await request.json();

    try {
        const blog = await BlogModel.findOne({
            slug: blogSlug
        });

        if (!blog) {
            return NextResponse.json({
                success: false,
                message: "Blog not found",
            }, { status: 404 })
        }

        const newComment = { name, message, createdAt } as IComment

        blog.comments.push(newComment);
        await blog.save();

        return NextResponse.json({
            success: true,
            message: "Comment added successfully",
            blog: blog
        }, { status: 200 })

    } catch (error) {
        console.error(error)

        return NextResponse.json({
            success: false,
            message: "Internal server error",
        }, { status: 500 })
    }
}
