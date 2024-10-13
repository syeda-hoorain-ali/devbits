import { dbConnect } from "@/lib/dbConnect";
import BlogModel from "@/models/Blog";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {

    await dbConnect();

    const { searchParams } = new URL(request.url);
    const blogName = searchParams.get('slug')

    try {
        const blog = await BlogModel.findOne({
            slug: blogName
        });

        if (!blog) {
            return NextResponse.json({
                success: false,
                message: "Blog not found",
            }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            message: "Blog found successfully",
            blog
        }, { status: 200 })

    } catch (error) {
        console.error(error)

        return NextResponse.json({
            success: false,
            message: "Internal server error",
        }, { status: 500 })
    }
}

