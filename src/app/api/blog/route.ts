import BlogModel from "@/models/blog";
import DbConnection from "@/database/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        await DbConnection();

        // Parse the URL parameters
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "8", 10);

        if (isNaN(page) || page < 1) {
            return NextResponse.json({ message: "Invalid page number" }, { status: 400 });
        }
        if (isNaN(limit) || limit < 1) {
            return NextResponse.json({ message: "Invalid limit number" }, { status: 400 });
        }

        const skip = (page - 1) * limit;

        const response = await BlogModel.find().skip(skip).limit(limit).lean();

        const total = await BlogModel.countDocuments();

        return NextResponse.json({
            data: response,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        }, { status: 200 });
    } catch (error:any) {
        return NextResponse.json({ message: "Something went wrong", error: error.message }, { status: 500 });
    }
}
