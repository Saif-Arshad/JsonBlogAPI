import DbConnection from "@/database/mongodb";
import BlogModel from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await DbConnection();
        const blog = await BlogModel.findOne({ _id: id });
      
    
        if (blog) {
            return NextResponse.json({ blog }, { status: 200 });
        } else {
                return NextResponse.json({
                notFound: "No results found"
            });
        }
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
