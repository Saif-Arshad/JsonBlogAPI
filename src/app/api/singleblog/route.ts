import DbConnection from "@/database/mongodb";
import BlogModel from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){
    const id = req.nextUrl.searchParams.get("id") ;
    // console.log(id);
    try {
        await DbConnection()
        const blog =  await BlogModel.findOne({_id:id})
        if(blog.length>0){
            return NextResponse.json({blog},{status:200})
        }
        else{
            return NextResponse.json({
                "notFound":"No results found"
            })

        }
    } catch (error:any) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    
}