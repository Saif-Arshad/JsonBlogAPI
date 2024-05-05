import BlogModel from "@/models/blog";
import DbConnection from "@/database/mongodb";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest){
    const filter = req.nextUrl.searchParams.get("blogcategorie") ;
  try {
    await DbConnection()
    const categorie =   await BlogModel.find({categorie:filter})
    return NextResponse.json({
         categorie
      })
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
    
  }
  
}