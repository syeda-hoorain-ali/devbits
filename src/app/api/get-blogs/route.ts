import { dbConnect } from "@/lib/dbConnect";
import BlogModel from "@/models/Blog";
import { NextResponse } from "next/server";

export const GET = async () => {
    
    await dbConnect();

    try {
        const blogs = await BlogModel.find();

        if (!blogs) {
            return NextResponse.json({
                success: false,
                message: "No blogs found",
            }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            message: "Blogs found successfully",
            blogs
        }, { status: 200 })

    } catch (error) {        
        console.log(error)

        return NextResponse.json({
            success: false,
            message: "Internal server error",
        }, { status: 500 })
    }
}

