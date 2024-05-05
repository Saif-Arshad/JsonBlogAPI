import BlogModel from "@/models/blog";
import DbConnection from "@/database/mongodb";
import { NextResponse } from "next/server";


   export async function GET(){
    try {
        await DbConnection()
        const response = await BlogModel.find().lean();

        return NextResponse.json({response})
    } catch (error) {
            return NextResponse.json("Something went wrong")
    }   


   }