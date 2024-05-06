import BlogModel from "@/models/blog";
import DbConnection from "@/database/mongodb";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest){
    const filter = req.nextUrl.searchParams.get("blogcategorie") ;
  try {
    await DbConnection()
    const categorie =   await BlogModel.find({categorie:filter})
    if(categorie.length>0){
    return NextResponse.json(
      {categorie}, { status: 200 }
    )}
      else{
        return NextResponse.json({
          "notFound":"Search using keyword in available Categories ",
          "availableCategories": ["technology","health","lifestyle","food","movie","sport","news","fashion"],
      })
      }
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
    
  }
  
}