import DbConnection from "@/database/mongodb";
import BlogModel from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){
    const id = req.nextUrl.searchParams.get("id") ;
    // console.log(id);
    try {
        await DbConnection()
        const blog =  await BlogModel.findOne({_id:id})
        return NextResponse.json({blog},{status:200})
    } catch (error:any) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    
}